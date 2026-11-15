import { motion, useReducedMotion, type Variants } from "framer-motion";
import { InView } from "@/components/core/in-view";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.12,
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };
  const textVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/10 bg-[#141414] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[28px] border border-white/10 bg-[#20231f] shadow-2xl shadow-black/30">
          <svg
            viewBox="0 0 480 580"
            role="img"
            aria-labelledby="about-portrait-title"
            className="block h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="about-portrait-title">Illustrated profile portrait of a man</title>
            <defs>
              <linearGradient id="portrait-background" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#303d34" />
                <stop offset="1" stopColor="#151715" />
              </linearGradient>
              <linearGradient id="portrait-skin" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#f2c5a3" />
                <stop offset="1" stopColor="#c98664" />
              </linearGradient>
              <linearGradient id="portrait-jacket" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#434f43" />
                <stop offset="1" stopColor="#202721" />
              </linearGradient>
              <radialGradient id="portrait-light" cx="0" cy="0" r="1" gradientTransform="matrix(0 280 -260 0 240 180)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c5ff4a" stopOpacity=".25" />
                <stop offset="1" stopColor="#c5ff4a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path fill="url(#portrait-background)" d="M0 0h480v580H0z" />
            <path fill="url(#portrait-light)" d="M0 0h480v580H0z" />
            <circle cx="368" cy="112" r="82" fill="#c5ff4a" fillOpacity=".08" />
            <path
              d="M36 580c10-93 54-147 137-170l67-18 67 18c83 23 127 77 137 170H36Z"
              fill="url(#portrait-jacket)"
            />
            <path d="m173 409 67 78 67-78-67-18-67 18Z" fill="#e7e1d4" />
            <path d="m211 458 29 28 29-28-15-25h-28l-15 25Z" fill="#313a32" />
            <path d="M197 324h86v91c0 25-19 45-43 45s-43-20-43-45v-91Z" fill="url(#portrait-skin)" />
            <path
              d="M147 215c0-72 38-120 94-120s94 48 94 120v59c0 79-43 133-94 133s-94-54-94-133v-59Z"
              fill="url(#portrait-skin)"
            />
            <path
              d="M143 243c-17-79 3-143 53-171 31-18 89-19 121 5 41 30 55 80 37 166-8-26-18-50-35-69-27 4-64 4-105-10-10 28-33 55-71 79Z"
              fill="#20211e"
            />
            <path d="M156 235c-11 0-19 11-17 25 2 17 12 30 25 31l-8-56Zm168 0c11 0 19 11 17 25-2 17-12 30-25 31l8-56Z" fill="#d99a77" />
            <path d="M183 258c10-8 22-10 34-5" fill="none" stroke="#49352d" strokeLinecap="round" strokeWidth="5" />
            <path d="M263 253c12-5 24-3 34 5" fill="none" stroke="#49352d" strokeLinecap="round" strokeWidth="5" />
            <ellipse cx="201" cy="275" fill="#27231f" rx="5" ry="7" />
            <ellipse cx="279" cy="275" fill="#27231f" rx="5" ry="7" />
            <path d="m239 275-9 43 15 4" fill="none" stroke="#a8644d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d="M215 342c14 12 35 12 49 0" fill="none" stroke="#754638" strokeLinecap="round" strokeWidth="5" />
            <path d="m171 405-36 19 42 79 63-66-69-32Zm138 0 36 19-42 79-63-66 69-32Z" fill="#343f36" />
            <path d="M83 580c15-63 56-104 113-126l44 46 44-46c57 22 98 63 113 126H83Z" fill="#242a24" />
            <path d="M48 54h57M48 54v57m384 0V54h-57M48 526v-57m384 57h-57" fill="none" stroke="#c5ff4a" strokeOpacity=".6" strokeWidth="2" />
          </svg>
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
              Independent creative
            </span>
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur">
              Budapest
            </span>
          </figcaption>
        </figure>

        <div>
          <span className="eyebrow">About the process</span>
          <InView
            className="mt-7 space-y-8"
            variants={sectionVariants}
            viewOptions={{ margin: "0px 0px -120px 0px" }}
          >
            <motion.div variants={textVariants}>
              <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
                Vibe coding,{" "}
                <span className="text-accent">with a point of view.</span>
              </h2>
            </motion.div>

            <motion.article
              variants={textVariants}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                01 / Start with a spark
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Vibe coding helps me turn an early idea into something tangible.
                I use AI-assisted tools to explore directions and get a first
                version on screen quickly.
              </p>
            </motion.article>

            <motion.article
              variants={textVariants}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                02 / Make, test, refine
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Then I try it, follow what feels right, and shape the rough
                edges. Real interactions make feedback faster and the next
                decision clearer.
              </p>
            </motion.article>

            <motion.article
              variants={textVariants}
              className="border-t border-white/10 pt-6"
            >
              <h3 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                03 / Keep the human touch
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                The tools can speed up the build, but the point of view stays
                human. Curiosity, taste, and care are what make the final thing
                feel distinctive.
              </p>
            </motion.article>
          </InView>
        </div>
      </div>
    </section>
  );
}
