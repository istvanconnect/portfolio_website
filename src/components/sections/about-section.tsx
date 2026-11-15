export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.018] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        <div>
          <span className="eyebrow">02 / A little about me</span>
        </div>
        <div>
          <p className="max-w-4xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.13] tracking-[-0.065em]">
            Good work lives at the intersection of{" "}
            <span className="text-white/35">
              clear thinking, brave ideas, and careful execution.
            </span>{" "}
            I bring all three to every collaboration.
          </p>
          <div className="mt-14 grid gap-9 sm:grid-cols-2 md:mt-16">
            <div>
              <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                The approach
              </h3>
              <p className="max-w-sm text-sm leading-7 text-white/45">
                Curious by default. I like getting to the heart of a problem,
                finding the simplest strong idea, then making every detail count.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.17em] text-accent">
                The person
              </h3>
              <p className="max-w-sm text-sm leading-7 text-white/45">
                Working independently and with trusted collaborators. Based in
                Budapest, partnering with good people everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
