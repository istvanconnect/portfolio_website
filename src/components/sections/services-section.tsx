import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeading
          eyebrow="03 / What I do"
          title={
            <>
              SMALL TEAM.
              <br />
              <span className="text-accent">BIG THINKING.</span>
            </>
          }
          aside="From the first sketch to the final interaction, I connect the dots between what a brand says and how it shows up."
        />

        <div className="grid border-t border-white/15 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`py-7 md:pr-8 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0 md:pl-8" : ""}`}
            >
              <span className="text-[10px] font-extrabold tracking-[0.15em] text-accent">
                {service.number}
              </span>
              <h3 className="mb-3 mt-7 font-display text-2xl font-bold tracking-[-0.055em]">
                {service.title}
              </h3>
              <p className="max-w-xs text-sm leading-7 text-white/45">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
