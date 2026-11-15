import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Ticker } from "@/components/sections/ticker";
import { WorkSection } from "@/components/sections/work-section";
import { Cursor } from "@/components/core/cursor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function App() {
  const [cursorMode, setCursorMode] = useState<
    "default" | "interactive" | "menu" | "project" | "text"
  >("default");
  const [isClicking, setIsClicking] = useState(false);
  const [clickPulse, setClickPulse] = useState(0);

  const handleCursorPositionChange = useCallback((x: number, y: number) => {
    const target = document.elementFromPoint(x, y);
    const isProject = Boolean(
      target?.closest("[data-cursor-target='project']"),
    );
    const isMenuItem = Boolean(
      target?.closest("[data-cursor-target='menu']"),
    );
    const isInteractive = Boolean(
      target?.closest(
        "a, button, [role='button'], select, summary, input[type='button'], input[type='submit']",
      ),
    );
    const isTextInput = Boolean(
      target?.closest(
        "textarea, input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio']), [contenteditable='true'], [role='textbox']",
      ),
    );
    const textRange = target
      ? document.caretRangeFromPoint?.(x, y)
      : null;
    const hasTextUnderPointer =
      textRange?.startContainer.nodeType === Node.TEXT_NODE &&
      Boolean(textRange.startContainer.textContent?.trim());
    const isSelectableText =
      !isInteractive &&
      (isTextInput ||
        hasTextUnderPointer ||
        Boolean(target?.closest("p, h1, h2, h3, h4, h5, h6, label, li, blockquote")));

    const nextMode = isMenuItem
      ? "menu"
      : isProject
      ? "project"
      : isInteractive
        ? "interactive"
        : isSelectableText
          ? "text"
          : "default";
    setCursorMode((currentMode) =>
      currentMode === nextMode ? currentMode : nextMode,
    );
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      setIsClicking(true);
      setClickPulse((pulse) => pulse + 1);
    };
    const handlePointerUp = () => setIsClicking(false);

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("blur", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handlePointerUp);
    };
  }, []);

  const cursorWidth = isClicking
    ? 44
    : cursorMode === "menu"
      ? 5
      : cursorMode === "project"
      ? 84
      : cursorMode === "interactive"
        ? 28
        : cursorMode === "text"
          ? 3
          : 16;
  const cursorHeight = isClicking
    ? 44
    : cursorMode === "menu"
      ? 5
      : cursorMode === "project"
      ? 34
      : cursorMode === "interactive"
        ? 28
        : cursorMode === "text"
          ? 24
          : 16;

  return (
    <div className="custom-cursor-enabled min-h-screen overflow-clip bg-background text-foreground">
      <Cursor
        className="z-[100]"
        onPositionChange={handleCursorPositionChange}
      >
        <AnimatePresence>
          {clickPulse > 0 && (
            <motion.span
              key={clickPulse}
              initial={{ scale: 0.4, opacity: 0.75 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute h-8 w-8 rounded-full border border-accent/80"
            />
          )}
        </AnimatePresence>
        <motion.div
          animate={{
            width: cursorWidth,
            height: cursorHeight,
          }}
          transition={{ type: "spring", bounce: 0.001 }}
          className={`relative flex items-center justify-center text-white shadow-lg shadow-black/10 backdrop-blur-md ${
            cursorMode === "text" && !isClicking
              ? "rounded-sm bg-accent"
              : "rounded-full bg-white/25"
          }`}
        >
          {cursorMode === "text" && !isClicking && (
            <>
              <span className="absolute -left-[3px] top-0 h-[2px] w-2 rounded-full bg-accent" />
              <span className="absolute -left-[3px] bottom-0 h-[2px] w-2 rounded-full bg-accent" />
            </>
          )}
          <AnimatePresence>
            {cursorMode === "project" && !isClicking && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex items-center text-xs font-medium"
              >
                More <Plus className="ml-1 h-3.5 w-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <SiteHeader />
      <main>
        <HeroGeometric
          badge="Independent creative partner · Available for select projects"
          title1="Making Digital"
          title2="Matter."
          description="I’m Istvan Horvath — a designer and creative developer building distinct digital experiences for ambitious people and brands. Strategy, design, and technology, all working as one."
          rotate={12}
          width={600}
          height={140}
          y={15}
        />
        <AboutSection />
        <Ticker />
        <WorkSection />
        <ContactSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
