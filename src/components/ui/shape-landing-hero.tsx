"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import BreathingText from "@/components/fancy/text/breathing-text";

const WebGLShader = lazy(() =>
  import("@/components/ui/web-gl-shader").then((module) => ({
    default: module.WebGLShader,
  })),
);

function DeferredWebGLShader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeoutId = window.setTimeout(() => setShouldLoad(true), 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return shouldLoad ? (
    <Suspense fallback={null}>
      <WebGLShader />
    </Suspense>
  ) : null;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  y = 15,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  y?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, y, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border-2 border-white/[0.12] backdrop-blur-[2px]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export type HeroGeometricProps = {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  rotate?: number;
  width?: number;
  height?: number;
  y?: number;
};

function HeroGeometric({
  badge = "Independent creative partner",
  title1 = "Making Digital",
  title2 = "Matter.",
  description = "I’m Istvan Horvath — a designer and creative developer building distinct digital experiences for ambitious people and brands. Strategy, design, and technology, all working as one.",
  rotate = 12,
  width = 600,
  height = 140,
  y = 15,
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-76px)] w-full items-center justify-center overflow-hidden bg-[#101010] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <DeferredWebGLShader />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(197,255,74,0.07),transparent_58%)]" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <ElegantShape
          delay={0.3}
          width={width}
          height={height}
          rotate={rotate}
          y={y}
          gradient="from-lime-500/[0.13]"
          className="left-[-15%] top-[12%] md:left-[-7%] md:top-[17%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          y={y}
          gradient="from-emerald-500/[0.12]"
          className="right-[-18%] top-[68%] md:right-[-4%] md:top-[72%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          y={y}
          gradient="from-violet-500/[0.12]"
          className="bottom-[3%] left-[1%] md:bottom-[8%] md:left-[8%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          y={y}
          gradient="from-amber-500/[0.12]"
          className="right-[5%] top-[5%] md:right-[14%] md:top-[10%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          y={y}
          gradient="from-cyan-500/[0.12]"
          className="left-[12%] top-[4%] md:left-[22%] md:top-[8%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2 md:mb-11"
          >
            <Circle className="h-2 w-2 fill-accent text-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1
              aria-label={`${title1} ${title2}`}
              className="mb-7 font-display text-[clamp(3.8rem,10vw,8.8rem)] font-bold leading-[0.88] tracking-[-0.09em] md:mb-9"
            >
              <span className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-transparent">
                <BreathingText>{title1}</BreathingText>
              </span>
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-white/90 to-emerald-300 bg-clip-text text-transparent">
                <BreathingText>{title2}</BreathingText>
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-8 max-w-2xl px-4 text-sm font-light leading-7 tracking-wide text-white/50 sm:text-base md:mb-10 md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full border border-accent bg-accent px-6 py-3.5 text-[11px] font-extrabold tracking-[0.08em] text-[#101010] transition hover:-translate-y-1 hover:bg-transparent hover:text-accent"
              >
                EXPLORE MY WORK <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-[11px] font-extrabold tracking-[0.08em] text-white transition hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                GET IN TOUCH <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101010]/70 via-transparent to-[#101010]/40" />
      <span className="absolute bottom-7 right-8 hidden text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 [writing-mode:vertical-rl] md:block">
        Scroll to explore ↓
      </span>
    </section>
  );
}

export { ElegantShape, HeroGeometric };
export default HeroGeometric;
