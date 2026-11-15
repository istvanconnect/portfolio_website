import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
  type Transition,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

type CursorProps = {
  children: ReactNode;
  attachToParent?: boolean;
  className?: string;
  variants?: Variants;
  springConfig?: SpringOptions;
  transition?: Transition;
  onPositionChange?: (x: number, y: number) => void;
};

const defaultVariants: Variants = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.3, opacity: 0 },
};

export function Cursor({
  children,
  attachToParent = false,
  className,
  variants = defaultVariants,
  springConfig = { stiffness: 500, damping: 30, mass: 0.5 },
  transition = { ease: "easeInOut", duration: 0.15 },
  onPositionChange,
}: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, springConfig);
  const y = useSpring(pointerY, springConfig);

  useEffect(() => {
    const cursor = cursorRef.current;
    const parent = attachToParent ? cursor?.parentElement : null;
    const eventTarget = parent ?? window;

    const handlePointerMove: EventListener = (nativeEvent) => {
      if (!(nativeEvent instanceof PointerEvent)) return;
      const event = nativeEvent;

      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      if (parent) {
        const bounds = parent.getBoundingClientRect();
        pointerX.set(event.clientX - bounds.left);
        pointerY.set(event.clientY - bounds.top);
      } else {
        pointerX.set(event.clientX);
        pointerY.set(event.clientY);
      }

      onPositionChange?.(event.clientX, event.clientY);
      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      onPositionChange?.(-1, -1);
    };

    eventTarget.addEventListener("pointermove", handlePointerMove);
    if (parent) {
      parent.addEventListener("pointerleave", handlePointerLeave);
    } else {
      window.addEventListener("blur", handlePointerLeave);
    }

    return () => {
      eventTarget.removeEventListener("pointermove", handlePointerMove);
      if (parent) {
        parent.removeEventListener("pointerleave", handlePointerLeave);
      } else {
        window.removeEventListener("blur", handlePointerLeave);
      }
    };
  }, [attachToParent, onPositionChange, pointerX, pointerY]);

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none left-0 top-0 z-30 grid place-items-center",
        attachToParent ? "absolute" : "fixed",
        className,
      )}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      initial="initial"
      animate={isVisible ? "animate" : "exit"}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
