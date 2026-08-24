import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Tell us about your business", d: "A short intake call. Goals, audience, offer." },
  { n: "02", t: "We design & build", d: "Custom architecture, copy, build and QA — end to end." },
  { n: "03", t: "You go live", d: "Deployed, secured and monitored on our infrastructure." },
  { n: "04", t: "We manage + report", d: "Ongoing updates plus monthly AI insight reports." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-y border-border bg-card/30 py-24 md:py-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="02 / Process"
            title="The build sequence."
            subtitle="A schematic, not a mystery. Four stages from first call to continuous reporting."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="hairline absolute top-[26px] right-0 left-0 hidden h-px lg:block" />
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative pl-8 lg:pt-0 lg:pl-0">
                  <div className="absolute top-1 left-0 h-full w-px bg-border lg:hidden" />
                  <div className="cut-corner-sm relative z-10 flex h-13 w-13 items-center justify-center border border-signal/50 bg-background">
                    <span className="font-display text-sm text-signal">{s.n}</span>
                  </div>
                  <h3 className="font-display mt-5 text-base tracking-[0.08em] text-foreground">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
