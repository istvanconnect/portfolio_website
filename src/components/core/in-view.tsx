import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

type InViewProps = {
  children: ReactNode;
  className?: string;
  variants: Variants;
  viewOptions?: UseInViewOptions;
  transition?: Transition;
};

export function InView({
  children,
  className,
  variants,
  viewOptions,
  transition,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, ...viewOptions });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
