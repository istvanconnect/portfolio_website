import { ArrowUpRight } from "lucide-react";

const fieldClassName =
  "w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-white/25 focus:border-accent/60 focus:bg-white/[0.055]";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#141414] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">04 / Start a conversation</span>
          <h2 className="mb-6 mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.085em]">
            LET&apos;S MAKE
            <br />
            <span className="text-accent">IT HAPPEN.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">
            Have an idea, a challenge, or a project in mind? Share a few details
            and I&apos;ll get back to you.
          </p>
        </div>

        <form
          action="https://formsubmit.co/istvan.connect@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input
            type="hidden"
            name="_subject"
            value="New portfolio project inquiry"
          />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2 text-xs font-semibold text-white/65">
              Your name
              <input
                className={fieldClassName}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name"
                required
              />
            </label>
            <label className="block space-y-2 text-xs font-semibold text-white/65">
              Email address
              <input
                className={fieldClassName}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label className="block space-y-2 text-xs font-semibold text-white/65">
            What are you looking to make?
            <textarea
              className={`${fieldClassName} min-h-36 resize-y`}
              name="message"
              placeholder="A little about your project, goals, and timeline..."
              required
              rows={5}
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-6 py-3.5 text-[11px] font-extrabold tracking-[0.08em] text-[#101010] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-accent"
          >
            SEND INQUIRY <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
