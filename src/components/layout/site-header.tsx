import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Selected work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#101010]/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[76px] max-w-[1220px] items-center justify-between gap-6 px-5 md:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="inline-flex items-center gap-3 font-display text-sm font-bold tracking-[-0.05em] text-foreground"
          aria-label="Alex Morgan home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-8 w-8 rotate-[-7deg] place-items-center rounded-[10px] bg-accent text-base font-black text-[#101010]">
            A.
          </span>
          <span>
            alexmorgan<span className="text-accent">®</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 text-[11px] font-bold text-white/65 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-[10px] font-extrabold tracking-[0.08em] text-[#101010] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-accent md:inline-flex"
        >
          LET&apos;S TALK <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-foreground transition hover:border-accent hover:text-accent md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute left-0 right-0 top-full flex flex-col gap-5 border-b border-white/10 bg-[#151515] px-6 py-6 text-sm font-semibold text-white/75 shadow-2xl md:hidden",
          menuOpen ? "flex" : "hidden",
        )}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-accent"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-accent"
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
