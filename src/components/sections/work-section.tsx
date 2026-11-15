import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/section-heading";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeading
          eyebrow="01 / Selected work"
          title={
            <>
              A FEW GOOD
              <br />
              PROJECTS<span className="text-accent">.</span>
            </>
          }
          aside="A mix of identity, digital products, and experiences made to leave a little mark. A selection of recent explorations."
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-[1.12fr_0.88fr] md:gap-y-16">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={index === 1 ? "md:mt-28" : index === 2 ? "md:-mt-20" : index === 3 ? "md:mt-8" : ""}
            >
              <a href="#contact" className="group block" aria-label={`Discuss ${project.name}`}>
                <div className="relative aspect-[1.22/1] overflow-hidden rounded-[22px] bg-[#202020]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5 opacity-70 transition group-hover:opacity-90" />
                  <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[9px] font-bold tracking-[0.17em] text-white/85 backdrop-blur-md">
                    PROJECT {project.number}
                  </span>
                  <span className="absolute bottom-6 right-6 grid h-11 w-11 translate-y-2 place-items-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
              <div className="flex items-start justify-between gap-5 px-0.5 pt-5">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.05em] text-foreground md:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/45">{project.category}</p>
                </div>
                <span className="shrink-0 pt-1 text-[11px] text-white/40">{project.year} ↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
