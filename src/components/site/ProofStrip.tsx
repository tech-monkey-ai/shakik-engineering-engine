import { Reveal } from "./Reveal";

// EDITABLE PLACEHOLDER NUMBERS — swap for real figures once available.
const stats = [
  { v: "120+", k: "Websites launched" },
  { v: "99.9%", k: "Managed uptime" },
  { v: "14 days", k: "Avg. time to launch" },
  { v: "24/7", k: "Monitoring & reporting" },
];

export function ProofStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.k} delay={i * 80}>
            <div className="px-2 py-8 text-center md:py-10">
              <div className="font-display chrome-text text-3xl md:text-4xl">{s.v}</div>
              <div className="mt-2 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                {s.k}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
