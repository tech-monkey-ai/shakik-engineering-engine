import { Instagram } from "lucide-react";
import { ChevronMark } from "./ChevronMark";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <ChevronMark className="h-6 w-9" />
              <span className="font-display chrome-text text-base tracking-[0.18em]">
                Shakik Industries
              </span>
            </div>
            <p className="font-display mt-4 text-xs tracking-[0.3em] text-signal">
              Engineering tomorrow.
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Building the digital backbone of modern business. Websites · AI · Automation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <div className="font-display text-[10px] tracking-[0.28em] text-muted-foreground">
              Follow
            </div>
            <a
              href="https://www.instagram.com/shakik_industries"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-signal"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
              @shakik_industries
            </a>
          </div>
        </div>

        <div className="hairline mt-12 h-px" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shakik Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
