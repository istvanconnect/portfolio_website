import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type FocusEvent as ReactFocusEvent,
  type ReactNode,
} from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type HighlightPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type AnimatedBackgroundProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  className,
  transition = { type: "spring", bounce: 0.2, duration: 0.3 },
  enableHover = false,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState(defaultValue);
  const [position, setPosition] = useState<HighlightPosition | null>(null);

  const updatePosition = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeItem = Array.from(
      container.querySelectorAll<HTMLElement>("[data-id]"),
    ).find((item) => item.dataset.id === activeValue);
    if (!activeItem) {
      setPosition(null);
      return;
    }

    const containerBounds = container.getBoundingClientRect();
    const itemBounds = activeItem.getBoundingClientRect();
    const nextPosition = {
      x: itemBounds.left - containerBounds.left,
      y: itemBounds.top - containerBounds.top,
      width: itemBounds.width,
      height: itemBounds.height,
    };

    setPosition((current) =>
      current &&
      current.x === nextPosition.x &&
      current.y === nextPosition.y &&
      current.width === nextPosition.width &&
      current.height === nextPosition.height
        ? current
        : nextPosition,
    );
  }, [activeValue]);

  useLayoutEffect(() => {
    updatePosition();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updatePosition);
    observer.observe(container);
    container
      .querySelectorAll<HTMLElement>("[data-id]")
      .forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [updatePosition, children]);

  const activateFromEvent = (
    event: ReactPointerEvent<HTMLDivElement> | ReactFocusEvent<HTMLDivElement>,
  ) => {
    const target =
      event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-id]")
        : null;

    if (target && containerRef.current?.contains(target) && target.dataset.id) {
      setActiveValue(target.dataset.id);
    }
  };

  const handlePointerOver = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (enableHover && event.pointerType === "mouse") {
      activateFromEvent(event);
    }
  };

  const handlePointerLeave = () => setActiveValue(defaultValue);

  const handleBlur = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveValue(defaultValue);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative isolate inline-flex items-center"
      onPointerOver={handlePointerOver}
      onPointerLeave={enableHover ? handlePointerLeave : undefined}
      onFocusCapture={activateFromEvent}
      onBlurCapture={handleBlur}
    >
      <motion.div
        aria-hidden="true"
        className={cn("pointer-events-none absolute left-0 top-0 z-0", className)}
        initial={false}
        animate={
          position
            ? {
                x: position.x,
                y: position.y,
                width: position.width,
                height: position.height,
                opacity: 1,
              }
            : { opacity: 0 }
        }
        transition={transition}
      />
      {children}
    </div>
  );
}
