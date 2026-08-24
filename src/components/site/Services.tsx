import { Boxes, ServerCog, BrainCircuit, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Boxes,
    title: "Website Design & Build",
    body: "A full custom build engineered around your business — never a recycled template.",
  },
  {
    icon: ServerCog,
    title: "Hosting & Management",
    body: "We host it, monitor it, patch it and update it. You never touch a dashboard.",
  },
  {
    icon: BrainCircuit,
    title: "AI Business Insights",
    body: "Traffic, visitors and conversion patterns translated into plain-English recommendations.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Lead capture, email flows and integrations that keep running without you.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="01 / Services"
            title="Everything, handled."
            subtitle="Four systems that make up the digital backbone we run for you."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="cut-corner group h-full border border-border bg-card/60 p-6 transition-colors hover:border-steel-dim">
                <div className="cut-corner-sm flex h-11 w-11 items-center justify-center border border-border bg-background">
                  <s.icon className="h-5 w-5 text-signal" strokeWidth={1.6} />
                </div>
                <h3 className="font-display mt-5 text-lg tracking-[0.06em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
