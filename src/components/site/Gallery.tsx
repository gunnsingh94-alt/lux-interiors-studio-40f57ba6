import { useRef, type MouseEvent } from "react";
import { SplitText } from "./SplitText";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";

const items = [
  { img: g1, title: "Aurum Lobby", tag: "PU Stone · Mumbai" },
  { img: g2, title: "Velour Dining", tag: "UV Rolls · Pune" },
  { img: g3, title: "Corridor Noir", tag: "PVC Panels · Delhi" },
  { img: g4, title: "Hydra Bath", tag: "PU Stone · Bangalore" },
  { img: g5, title: "Verdant Office", tag: "UV Wallpaper · Hyderabad" },
  { img: g6, title: "Atelier Penthouse", tag: "Mixed · Surat" },
];

function Tile({ img, title, tag }: { img: string; title: string; tag: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className="group relative overflow-hidden rounded-sm bg-[#141416] transition-transform duration-500 will-change-transform"
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 translate-y-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)]">
          {tag}
        </div>
        <div className="mt-2 font-display text-xl md:text-2xl text-white">
          {title}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-[#0d0d0f]"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-white/45">
              <span className="h-px w-10 bg-[color:var(--gold)]/60" />
              Immersive Gallery
            </div>
            <SplitText
              as="h2"
              text="Selected works from rooms that breathe."
              className="font-display font-bold text-white text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.02em]"
            />
          </div>
          <p className="max-w-sm text-white/55 text-sm md:text-base leading-relaxed">
            A living index of recent installations across hospitality, residential
            and commercial spaces.
          </p>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <div
              key={i}
              className={`mb-4 md:mb-6 break-inside-avoid ${
                i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
              }`}
            >
              <Tile {...it} />
            </div>
          ))}
        </div>

        {/* Marquee tag strip */}
        <div className="mt-20 overflow-hidden border-y border-white/5 py-8">
          <div className="marquee-track flex whitespace-nowrap">
            {Array(2)
              .fill(0)
              .map((_, k) => (
                <div key={k} className="flex shrink-0 gap-16 pr-16">
                  {[
                    "Hospitality",
                    "Residential",
                    "Retail",
                    "Restaurants",
                    "Boutique Hotels",
                    "Penthouses",
                    "Spas",
                    "Offices",
                  ].map((t, i) => (
                    <span
                      key={i}
                      className="font-display text-3xl md:text-5xl text-white/15 hover:text-[color:var(--gold)] transition-colors"
                    >
                      {t} <span className="text-[color:var(--accent)]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
