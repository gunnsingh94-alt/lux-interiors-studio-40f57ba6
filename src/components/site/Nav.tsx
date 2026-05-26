import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-[color:var(--gold)]/40 text-[color:var(--gold)] font-display font-bold text-sm">
            JJ
          </span>
          <span className="hidden sm:block font-display text-sm tracking-[0.22em] uppercase text-white/90">
            Jai Jagdamba
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.18em] uppercase text-white/70">
          {["Collection", "Studio", "Gallery", "Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="relative inline-block py-1 transition-colors hover:text-white"
              >
                {l}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[color:var(--gold)] transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-[12px] tracking-[0.22em] uppercase text-white/85 transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
        >
          Enquire
          <span className="h-1 w-1 rounded-full bg-[color:var(--accent)] glow-emerald" />
        </a>
      </nav>
    </header>
  );
}
