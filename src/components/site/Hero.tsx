import { DashboardMock } from "./DashboardMock";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        <Reveal>
          <div className="font-display flex items-center gap-3 text-[10px] tracking-[0.35em] text-muted-foreground">
            <span className="hairline h-px w-10" />
            Websites · AI · Automation
          </div>

          <h1 className="headline chrome-text mt-6 text-[3.1rem] leading-[0.9] sm:text-7xl lg:text-[5.4rem]">
            Engineering
            <br />
            tomorrow.
          </h1>

          <p className="font-display mt-5 text-lg tracking-[0.06em] text-signal sm:text-xl">
            The digital backbone of modern business.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            We design, build, host and manage your entire website — end to end — then keep it
            running and feed you continuous AI insight into your traffic, leads and growth. One
            subscription. Zero maintenance on your side.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="cut-btn font-display bg-signal px-8 py-4 text-center text-xs tracking-[0.22em] text-signal-foreground shadow-[var(--shadow-signal)] transition-transform hover:-translate-y-0.5"
            >
              Start Your Website
            </a>
            <a
              href="#how-it-works"
              className="cut-btn font-display border border-border bg-card/60 px-8 py-4 text-center text-xs tracking-[0.22em] text-foreground transition-colors hover:border-steel-dim"
            >
              See How It Works
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
