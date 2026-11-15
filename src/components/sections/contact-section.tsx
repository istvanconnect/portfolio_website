import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute -bottom-56 -right-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[90px]" />
      <div className="relative mx-auto max-w-[1220px]">
        <span className="eyebrow">04 / Have a good one in mind?</span>
        <h2 className="mb-12 mt-6 font-display text-[clamp(3.8rem,10vw,8.4rem)] font-bold leading-[0.88] tracking-[-0.095em]">
          LET&apos;S MAKE
          <br />
          <span className="text-accent">IT HAPPEN.</span>
        </h2>
        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <a
              className="mt-3 inline-flex items-center gap-2 border-b border-accent/50 pb-1 font-display text-2xl font-bold tracking-[-0.05em] transition hover:text-accent sm:text-3xl"
              href="mailto:hello@yourname.studio"
            >
              hello@yourname.studio <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold tracking-[0.1em] text-white/45">
            <a className="transition hover:text-accent" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>
            <a className="transition hover:text-accent" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              INSTAGRAM ↗
            </a>
            <a className="transition hover:text-accent" href="https://www.behance.net/" target="_blank" rel="noreferrer">
              BEHANCE ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
