export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-6 text-[10px] text-white/35 md:px-8">
      <div className="mx-auto flex max-w-[1220px] flex-col justify-between gap-3 sm:flex-row">
        <span>© {new Date().getFullYear()} Alex Morgan. Made with intent.</span>
        <span>INDEPENDENT DESIGNER & DEVELOPER · BUDAPEST / EVERYWHERE</span>
      </div>
    </footer>
  );
}
