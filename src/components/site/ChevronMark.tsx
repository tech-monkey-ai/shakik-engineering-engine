/** Shakik Industries angular chevron / jet-intake mark, metallic gradient. */
export function ChevronMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="shakik-chrome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#cfd3d6" />
          <stop offset="60%" stopColor="#6d7377" />
          <stop offset="100%" stopColor="#e9ecee" />
        </linearGradient>
      </defs>
      <path d="M2 8 L62 8 L20 20 L26 60 L8 22 Z" fill="url(#shakik-chrome)" />
    </svg>
  );
}
