import { motion, useReducedMotion, type Variants } from "framer-motion";
import { projects } from "@/data/portfolio";
import { InView } from "@/components/core/in-view";
import { SectionHeading } from "@/components/sections/section-heading";

function ProjectCard({
  project,
  index,
  variants,
}: {
  project: (typeof projects)[number];
  index: number;
  variants: Variants;
}) {
  return (
    <motion.article
      variants={variants}
      className={`relative cursor-none ${
        index === 1
          ? "md:mt-28"
          : index === 2
            ? "md:-mt-20"
            : index === 3
              ? "md:mt-8"
              : ""
      }`}
    >
      <a
        href="#contact"
        className="group block"
        aria-label={`Discuss ${project.name}`}
        data-cursor-target="project"
      >
        <div
          className="relative aspect-[1.22/1] overflow-hidden rounded-[22px] bg-[#202020]"
        >
          <img
            src={project.image}
            srcSet={[480, 768, 1024, 1500]
              .map(
                (width) =>
                  `${project.image.replace("w=1500", `w=${width}`)} ${width}w`,
              )
              .join(", ")}
            sizes="(min-width: 768px) 55vw, 100vw"
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5 opacity-70 transition group-hover:opacity-90" />
          <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[9px] font-bold tracking-[0.17em] text-white/85 backdrop-blur-md">
            PROJECT {project.number}
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
        <span className="shrink-0 pt-1 text-[11px] text-white/40">
          {project.year} ↗
        </span>
      </div>
    </motion.article>
  );
}

export function WorkSection() {
  const shouldReduceMotion = useReducedMotion();
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
      },
    },
  };
  const cardVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

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

        <InView
          className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-[1.12fr_0.88fr] md:gap-y-16"
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={listVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              variants={cardVariants}
            />
          ))}
        </InView>
      </div>
    </section>
  );
}
