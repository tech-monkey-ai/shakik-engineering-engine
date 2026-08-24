# Shakik Industries Launchpad

Build a premium, dark, industrial-tech landing page for Shakik Industries — a paid website-building and website-management service. Shakik Industries builds a client's entire website end-to-end, then keeps running it for them and gives them ongoing AI-powered insights and analytics about their business based on how their website is performing (traffic, leads, conversion behavior, growth trends). It is a "we handle everything" subscription service, not a one-time freelance gig.

Brand identity — follow this exactly, do not default to a generic SaaS template:

Primary palette: near-black background (
#0A0A0A / 
#0D0D0D), with a brushed steel / chrome gradient (white → silver → gunmetal grey) as the signature accent, used the way a metallic logo mark would catch light.
One sharp accent color used sparingly for CTAs and live-data highlights — an electric orange-red (like a warning-light or engineering-blueprint accent) or an ice-blue if you prefer a cooler read. Pick one and stay consistent.
Logo mark language: a fast, angular chevron/arrowhead shape (like a jet intake or forward-motion arrow) rendered in a metallic gradient. Echo that angularity in section dividers, card corners (cut/bevelled corners, not soft rounded ones), and button shapes.
Typography: a bold, condensed, slightly italicized industrial sans-serif for headlines (something in the family of Archivo Black / Oswald / Bebas Neue / Zuume — condensed, high-impact, engineered feel), paired with a clean modern grotesk (Inter / Space Grotesk) for body text. Avoid soft rounded default fonts like Poppins or Nunito — this brand is precision and machinery, not friendly and bubbly.
Overall tone: engineering / command-center / mission-control. Think dashboards, live metrics, schematics, subtle grid or blueprint textures in the background, thin glowing lines, not pastel gradients or bubbly illustrations. This must NOT look like a generic AI-startup template — no default purple-to-pink gradients, no generic "Untitled UI" look, no stock hero illustration of a laptop with confetti. It needs a distinct visual signature someone would recognize as Shakik Industries specifically.
Tagline to use somewhere prominent: "Engineering tomorrow." Sub-line concept: "Building the digital backbone of modern business." Category line: "Websites · AI · Automation."

Build these sections, in order:

Navigation — logo mark + wordmark on the left, links (Services, How It Works, Pricing, Insights, Contact), a sharp-cornered CTA button ("Get Started" / "Claim Your Website") on the right. Sticky on scroll, transparent over the hero, solidifies with a subtle blur/border once scrolled.
Hero — Large condensed headline built around "Engineering tomorrow." / "The digital backbone of modern business," a supporting line explaining Shakik Industries builds, hosts, and manages your entire website AND gives you continuous AI insight into your business through it. Primary CTA ("Start Your Website") and secondary CTA ("See How It Works"). Include a hero visual: an abstract live-dashboard mockup — animated line charts, a circular progress ring (like "87%"), small KPI cards — floating at an angle, styled in the metallic/dark palette, implying "your business, visualized."
Trust/social proof strip — a thin row of stats or short proof lines (e.g. "Websites launched," "Uptime," "Avg. time to launch") in the metallic accent style. Use placeholder numbers clearly marked as editable.
Services section — present as 3–4 angular cards, cut-corner style, each with an icon, title, and 1–2 line description:
Website Design & Build (full custom build, not templates)
Hosting & Ongoing Management (we run it so you don't have to)
AI Business Insights (analytics on your traffic, visitors, conversion patterns, translated into plain-English recommendations)
Automation (lead capture, email flows, integrations that run without you)
How It Works — a 3–4 step horizontal or vertical process (Tell us about your business → We design & build → You go live → We manage + report), styled like a schematic/flow diagram with connecting lines, matching the engineering aesthetic.
AI Insights feature (the AI/automation requirement) — a dedicated, visually rich section that is the centerpiece "wow" feature. Build a small interactive "Instant Website Snapshot" tool: the visitor enters a website URL (or their business name/industry if no site yet) into a styled input inside a dashboard-style card, clicks "Analyze," and after a short simulated loading sequence (skeleton loaders / progress bar in the brand accent color) the card populates with a stylized mock report: a headline score (e.g. "Digital Presence Score: 74/100"), 3–4 short AI-generated-sounding insight lines (e.g. "Your site loads slower than 60% of competitors in your industry," "No clear call-to-action above the fold," "Mobile experience needs improvement"), and a CTA "Get the full report — talk to us." Make clear in a code comment that the analysis is a front-end demo experience for now (mock/randomized output), not a real live audit, so it's easy to later wire up to a real API. Use Lovable's built-in AI (via a Supabase edge function calling an LLM) to actually generate these 3–4 insight lines dynamically from the URL/business name the user typed, so it feels genuinely AI-powered rather than fully hardcoded.
Pricing — 2–3 tier cards (e.g. Starter / Growth / Managed), angular card style, monthly price placeholders, feature checklists, one tier marked "Most Popular" with the accent color border/glow. Include a short line clarifying this is a subscription (build + ongoing management + insights), not a one-off purchase.
Registration / lead capture with email integration — a signup/contact form (name, email, business name, optional website URL) styled to match the dashboard aesthetic. On submit:
Save the submission to the Supabase database (table: leads/signups).
Trigger a confirmation email via the Resend API using a Supabase edge function, sending the new signup a branded confirmation email ("You're in — welcome to Shakik Industries") styled with the same dark/metallic identity in the email HTML.
Show a success state on the form (confirmation message / checkmark animation) after the email is triggered.
Add a code comment noting where my Resend API key needs to be added as a secret, since I'll provide that separately.
Footer — logo mark, short tagline, nav links repeated, social links (Instagram: @shakik_industries), copyright line.

Technical requirements:

Fully responsive: the hero, dashboard mockups, and pricing cards must reflow cleanly on mobile (stack vertically, no overflow, tap-friendly buttons).
Use Supabase (Lovable's native integration) for storing leads and for the edge function that calls Resend + the AI insight generator.
Smooth scroll and subtle scroll-triggered animations (fade/slide-in) on section entry — tasteful, not overdone.
Clean component structure so I can find and edit the hero, services, pricing, and AI-snapshot sections independently afterward.
Do not use default Lovable/shadcn purple as the accent color — enforce the metallic + single accent palette described above everywhere, including buttons, focus states, and links.

Build it now as a complete, working, responsive single-page site with these sections in this order.

Build it in one shot, no breaks, continuously and make it amazing. I have attached the logo 
Link for instagram: https://www.instagram.com/shakik_industries?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw%3D%3D

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shakik-engineering-engine.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3c50cb4d-aeb0-452a-a734-24926f7498d3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
