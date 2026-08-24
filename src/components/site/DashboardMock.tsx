/** Abstract "your business, visualized" command-center mockup. Pure SVG/CSS, no data. */
export function DashboardMock() {
  return (
    <div className="relative w-full [perspective:1400px]">
      <div className="relative [transform:rotateX(8deg)_rotateY(-12deg)_rotateZ(2deg)]">
        <div className="cut-corner border border-border bg-card/80 p-4 shadow-[var(--shadow-panel)] backdrop-blur sm:p-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">
              Live Performance
            </span>
            <span className="flex items-center gap-2">
              <span
                className="block h-1.5 w-1.5 bg-signal"
                style={{ animation: "pulse-dot 1.6s infinite" }}
              />
              <span className="font-display text-[10px] tracking-[0.25em] text-signal">
                Online
              </span>
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { k: "Visitors", v: "12.4K", d: "+18%" },
              { k: "Leads", v: "381", d: "+9%" },
              { k: "Uptime", v: "99.9%", d: "30d" },
            ].map((m) => (
              <div key={m.k} className="cut-corner-sm border border-border bg-background/60 p-3">
                <div className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                  {m.k}
                </div>
                <div className="font-display chrome-text mt-1 text-lg sm:text-xl">{m.v}</div>
                <div className="text-[10px] text-signal">{m.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1.6fr_1fr]">
            <div className="cut-corner-sm border border-border bg-background/60 p-3">
              <div className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                Conversion trend
              </div>
              <svg viewBox="0 0 300 110" className="mt-2 h-28 w-full">
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="300"
                    y1={12 + i * 28}
                    y2={12 + i * 28}
                    stroke="currentColor"
                    className="text-border"
                    strokeWidth="1"
                  />
                ))}
                <polyline
                  points="0,88 40,74 80,80 120,54 160,60 200,34 240,40 300,14"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="2"
                  strokeDasharray="600"
                  style={{ animation: "dash-flow 9s linear infinite" }}
                />
                <polyline
                  points="0,96 40,92 80,86 120,84 160,74 200,70 240,62 300,52"
                  fill="none"
                  stroke="var(--steel-dim)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="cut-corner-sm flex flex-col items-center justify-center border border-border bg-background/60 p-3">
              <svg viewBox="0 0 120 120" className="h-24 w-24 -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="currentColor"
                  className="text-border"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.87} ${2 * Math.PI * 50}`}
                  strokeLinecap="square"
                />
              </svg>
              <div className="font-display chrome-text -mt-16 text-2xl">87%</div>
              <div className="mt-12 text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                Health score
              </div>
            </div>
          </div>
        </div>

        <div className="cut-corner-sm absolute -right-4 -bottom-8 hidden w-44 border border-border bg-card/90 p-3 shadow-[var(--shadow-panel)] backdrop-blur md:block">
          <div className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            AI Insight
          </div>
          <p className="mt-1 text-[11px] leading-snug text-foreground/80">
            Mobile visitors convert 2.3× slower. Recommend tightening the hero CTA.
          </p>
        </div>
      </div>
    </div>
  );
}
