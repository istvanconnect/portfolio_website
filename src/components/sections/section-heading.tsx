import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  aside: string;
};

export function SectionHeading({ eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 font-display text-[clamp(2.7rem,6vw,4.8rem)] font-bold leading-[0.94] tracking-[-0.08em]">
          {title}
        </h2>
      </div>
      <p className="max-w-[290px] text-sm leading-7 text-white/45">{aside}</p>
    </div>
  );
}
