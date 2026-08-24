import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  businessName: z.string().trim().max(120).optional().or(z.literal("")),
  websiteUrl: z.string().trim().max(255).optional().or(z.literal("")),
});

function confirmationHtml(name: string) {
  return `<!doctype html><html><body style="margin:0;background:#0A0A0A;font-family:Helvetica,Arial,sans-serif;color:#EDEDED;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#101010;border:1px solid #2A2A2A;">
        <tr><td style="height:3px;background:linear-gradient(90deg,#FFFFFF,#9AA0A6,#3A3F44);"></td></tr>
        <tr><td style="padding:36px 34px 8px;">
          <div style="font-size:12px;letter-spacing:4px;color:#8A8F94;text-transform:uppercase;">Shakik Industries</div>
          <h1 style="margin:14px 0 0;font-size:30px;line-height:1.05;color:#ffffff;text-transform:uppercase;letter-spacing:-0.5px;">You're in.</h1>
          <p style="margin:18px 0 0;font-size:15px;line-height:1.6;color:#B9BEC3;">
            ${name ? `${name}, welcome` : "Welcome"} to Shakik Industries. We build, host and manage your entire website —
            then keep feeding you AI-powered insight on how your business is performing through it.
          </p>
          <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#B9BEC3;">
            Our team will reach out shortly with next steps and a first read on your digital presence.
          </p>
          <p style="margin:28px 0 0;font-size:13px;letter-spacing:3px;color:#FF4718;text-transform:uppercase;">Engineering tomorrow.</p>
        </td></tr>
        <tr><td style="padding:28px 34px 34px;">
          <div style="height:1px;background:#242424;"></div>
          <p style="margin:16px 0 0;font-size:12px;color:#6E7378;">Websites · AI · Automation — @shakik_industries</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`)
            h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      email: data.email,
      business_name: data.businessName || null,
      website_url: data.websiteUrl || null,
      source: "landing_page",
    });
    if (error) throw new Error(error.message);

    // === RESEND ===
    // Add your Resend API key as a project secret named RESEND_API_KEY.
    // Also set the verified sending domain in the `from` field below.
    const resendKey = process.env["RESEND_API_KEY"];
    let emailSent = false;
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Shakik Industries <onboarding@resend.dev>", // replace with your verified domain sender
            to: [data.email],
            subject: "You're in — welcome to Shakik Industries",
            html: confirmationHtml(data.name),
          }),
        });
        emailSent = res.ok;
        if (!res.ok) console.error("Resend error", res.status, await res.text());
      } catch (err) {
        console.error("Resend request failed", err);
      }
    }

    return { ok: true, emailSent };
  });
