import { useEffect, useRef } from "react";
import { SplitText } from "./SplitText";
import { BeforeAfter } from "./BeforeAfter";

const features = [
  {
    title: "Waterproof",
    desc: "Hermetic surfaces engineered for kitchens, baths and humid climates.",
    icon: (
      <svg viewBox="0 0 64 64" className="icon-stroke h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8c10 14 18 24 18 32a18 18 0 1 1-36 0c0-8 8-18 18-32z" />
        <path d="M22 38a10 10 0 0 0 10 10" />
      </svg>
    ),
  },
  {
    title: "Termite Proof",
    desc: "Inert polymer cores that pests cannot touch. Decades of integrity.",
    icon: (
      <svg viewBox="0 0 64 64" className="icon-stroke h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <path d="M14 32h36M32 14v36M20 20l24 24M44 20L20 44" />
      </svg>
    ),
  },
  {
    title: "Eco Friendly",
    desc: "Low-VOC, recyclable, certified — a quiet contribution to a louder planet.",
    icon: (
      <svg viewBox="0 0 64 64" className="icon-stroke h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 50c0-20 14-34 36-36-2 22-16 36-36 36z" />
        <path d="M14 50C26 38 36 28 50 14" />
      </svg>
    ),
  },
  {
    title: "Easy Install",
    desc: "Click-lock and adhesive systems — most rooms transform in a day.",
    icon: (
      <svg viewBox="0 0 64 64" className="icon-stroke h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="20" width="44" height="24" rx="2" />
        <path d="M22 32h20M32 26v12" />
      </svg>
    ),
  },
];

export function TextureStudio() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".icon-stroke").forEach((el) =>
              el.classList.add("in-view"),
            );
          }
        });
      },
      { threshold: 0.2 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="studio"
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-10 bg-gradient-to-b from-[#0d0d0f] via-[#101012] to-[#0d0d0f]"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-white/45">
            <span className="h-px w-10 bg-[color:var(--accent)]/60" />
            Texture Studio
          </div>
          <SplitText
            as="h2"
            text="Built like architecture. Detailed like jewellery."
            className="font-display font-bold text-white text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.02em]"
          />
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Big bento card with before/after */}
          <div className="col-span-12 lg:col-span-8 rounded-sm border border-white/5 bg-[#141416] p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl md:text-2xl text-white">
                See the transformation
              </h3>
              <span className="text-[10px] tracking-[0.28em] uppercase text-white/45">
                Drag · Reveal
              </span>
            </div>
            <BeforeAfter />
          </div>

          {/* Stat / quote card */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
            <div className="rounded-sm border border-white/5 bg-[#141416] p-7 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/45">
                Crafted In
              </div>
              <div className="font-display font-bold text-[clamp(3rem,7vw,5rem)] leading-none gold-gradient">
                12+
              </div>
              <div className="text-sm text-white/60">
                Years redefining Indian interiors, surface by surface.
              </div>
            </div>
            <div className="rounded-sm border border-white/5 bg-gradient-to-br from-[#0f2a1c] to-[#141416] p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--accent)]">
                Warranty
              </div>
              <div className="font-display font-bold text-[clamp(3rem,7vw,5rem)] leading-none text-white">
                10y
              </div>
              <div className="text-sm text-white/60">
                Structural integrity guaranteed across the full collection.
              </div>
            </div>
          </div>

          {/* Features */}
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card col-span-12 sm:col-span-6 lg:col-span-3 rounded-sm border border-white/5 bg-[#141416] p-7 transition-all duration-500 hover:border-[color:var(--gold)]/40 hover:-translate-y-1 hover:bg-[#181818] group"
              data-cursor="hover"
            >
              <div className="text-[color:var(--gold)] group-hover:text-[color:var(--accent)] transition-colors duration-500">
                {f.icon}
              </div>
              <h4 className="mt-6 font-display text-xl text-white">{f.title}</h4>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
