const phrases = [
  "Independent thinking",
  "Thoughtful design",
  "Digital craft",
  "Useful ideas",
];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/10" aria-hidden="true">
      <div className="ticker-track flex w-max items-center gap-8 py-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/55">
        {[0, 1, 2, 3].map((repeat) => (
          <div key={repeat} className="flex items-center gap-8">
            {phrases.map((phrase) => (
              <span key={`${repeat}-${phrase}`} className="flex items-center gap-8 whitespace-nowrap">
                {phrase}
                <span className="text-lg text-accent">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
