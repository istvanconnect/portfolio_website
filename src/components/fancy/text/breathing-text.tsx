import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BreathingTextProps = {
  children: string;
  className?: string;
  staggerDuration?: number;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
};

export default function BreathingText({
  children,
  className,
  staggerDuration = 0.08,
  fromFontVariationSettings = "'wght' 100, 'slnt' 0",
  toFontVariationSettings = "'wght' 800, 'slnt' -10",
}: BreathingTextProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={cn("inline", className)} aria-hidden="true">
      {Array.from(children).map((character, index) =>
        character === " " ? (
          <span key={`${character}-${index}`} className="whitespace-pre">
            {" "}
          </span>
        ) : (
          <motion.span
            key={`${character}-${index}`}
            className="inline-block"
            style={{ fontVariationSettings: fromFontVariationSettings }}
            animate={
              shouldReduceMotion
                ? { fontVariationSettings: toFontVariationSettings }
                : {
                    fontVariationSettings: [
                      fromFontVariationSettings,
                      toFontVariationSettings,
                      fromFontVariationSettings,
                    ],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 2.4,
                    delay: index * staggerDuration,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
          >
            {character}
          </motion.span>
        ),
      )}
    </span>
  );
}
