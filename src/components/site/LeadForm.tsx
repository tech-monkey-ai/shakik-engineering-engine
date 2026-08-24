import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2 } from "lucide-react";
import { z } from "zod";
import { submitLead } from "@/lib/leads.functions";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  businessName: z.string().trim().max(120).optional(),
  websiteUrl: z.string().trim().max(255).optional(),
});

export function LeadForm() {
  const send = useServerFn(submitLead);
  const [form, setForm] = useState({ name: "", email: "", businessName: "", websiteUrl: "" });
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setError(null);
    setState("sending");
    try {
      await send({ data: parsed.data });
      setState("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setState("idle");
    }
  };

  const field = (
    label: string,
    key: keyof typeof form,
    placeholder: string,
    type = "text",
    required = false,
  ) => (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.24em] text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="cut-corner-sm mt-2 w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-signal"
      />
    </label>
  );

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            index="05 / Contact"
            title="Claim your website."
            subtitle="Tell us where you are today. We'll come back with a build plan, a timeline and a first read on your digital presence."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="cut-corner border border-border bg-card/60 p-6 shadow-[var(--shadow-panel)] sm:p-8">
            {state === "done" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div
                  className="cut-corner-sm flex h-16 w-16 items-center justify-center border border-signal/60 bg-signal/10"
                  style={{ animation: "pulse-dot 1.8s ease-in-out 2" }}
                >
                  <Check className="h-8 w-8 text-signal" strokeWidth={2.2} />
                </div>
                <h3 className="headline chrome-text mt-6 text-3xl">You're in.</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  A confirmation is on its way to {form.email}. Our team will be in touch shortly
                  with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {field("Name", "name", "Your name", "text", true)}
                  {field("Email", "email", "you@company.com", "email", true)}
                </div>
                {field("Business name", "businessName", "Company / brand")}
                {field("Website URL", "websiteUrl", "yourdomain.com (optional)")}

                {error && <p className="text-xs text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="cut-btn font-display flex w-full items-center justify-center gap-2 bg-signal px-8 py-4 text-xs tracking-[0.22em] text-signal-foreground shadow-[var(--shadow-signal)] disabled:opacity-60"
                >
                  {state === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                  Start Your Website
                </button>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  We'll email a confirmation immediately. No spam — just your build plan.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
