import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

// EDITABLE PLACEHOLDER PRICING
const tiers = [
  {
    name: "Starter",
    price: "$299",
    tag: "Single-page presence",
    features: [
      "Custom one-page website",
      "Hosting, SSL & monitoring",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$699",
    tag: "Most Popular",
    popular: true,
    features: [
      "Multi-page custom build",
      "Hosting & full management",
      "AI insight reports (bi-weekly)",
      "Lead capture + email automation",
      "Priority support",
    ],
  },
  {
    name: "Managed",
    price: "$1,499",
    tag: "Full command centre",
    features: [
      "Everything in Growth",
      "Unlimited content updates",
      "Live analytics dashboard",
      "Custom integrations & automations",
      "Dedicated strategist",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="04 / Pricing"
            title="Subscription, not a one-off."
            subtitle="Every tier includes the build, the hosting, the ongoing management and the insight reporting. Cancel or upgrade any month."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div
                className={cn(
                  "cut-corner relative h-full border bg-card/60 p-7",
                  t.popular
                    ? "border-signal/70 shadow-[var(--shadow-signal)]"
                    : "border-border hover:border-steel-dim",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl tracking-[0.1em] text-foreground">
                    {t.name}
                  </h3>
                  {t.popular && (
                    <span className="font-display cut-corner-sm bg-signal px-2 py-1 text-[9px] tracking-[0.2em] text-signal-foreground">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display chrome-text text-4xl">{t.price}</span>
                  <span className="pb-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    /mo
                  </span>
                </div>
                {!t.popular && (
                  <div className="mt-2 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                    {t.tag}
                  </div>
                )}

                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "cut-btn font-display mt-8 block px-6 py-4 text-center text-xs tracking-[0.2em] transition-transform hover:-translate-y-0.5",
                    t.popular
                      ? "bg-signal text-signal-foreground"
                      : "border border-border bg-background text-foreground",
                  )}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
