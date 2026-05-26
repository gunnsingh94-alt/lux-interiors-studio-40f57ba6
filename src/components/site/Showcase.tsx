import { useRef, useState, type MouseEvent } from "react";
import { SplitText } from "./SplitText";
import pvc from "../../assets/pvc-panels.jpg";
import uv from "../../assets/uv-rolls.jpg";
import pu from "../../assets/pu-stone.jpg";

type Item = {
  num: string;
  title: string;
  tag: string;
  desc: string;
  img: string;
};

const items: Item[] = [
  {
    num: "01",
    title: "PVC Panels",
    tag: "Architectural Surfaces",
    desc: "Fluted, marbled, and high-gloss panels that wrap your walls in cinematic depth.",
    img: pvc,
  },
  {
    num: "02",
    title: "UV Rolls & Wallpaper",
    tag: "Printed Statements",
    desc: "UV-cured patterns and bespoke prints — saturated, scratch resistant, infinite.",
    img: uv,
  },
  {
    num: "03",
    title: "PU Stone",
    tag: "Tactile Materiality",
    desc: "Hand-finished polyurethane stone with the weight of mountains, the soul of sculpture.",
    img: pu,
  },
];

export function Showcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="collection"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-[#0d0d0f]"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-white/45">
              <span className="h-px w-10 bg-[color:var(--gold)]/60" />
              The Triple Threat
            </div>
            <SplitText
              as="h2"
              text="Three materials. Infinite atmospheres."
              className="font-display font-bold text-white text-[clamp(2rem,5.5vw,4.5rem)] leading-[1] tracking-[-0.02em] max-w-3xl"
            />
          </div>
          <p className="max-w-sm text-white/55 text-sm md:text-base leading-relaxed">
            Hover. Linger. The collection reveals itself when you give it
            attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Card
              key={it.num}
              item={it}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  index,
  hovered,
  setHovered,
}: {
  item: Item;
  index: number;
  hovered: number | null;
  setHovered: (n: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = `scale(1.1) translate(${x * -20}px, ${y * -20}px)`;
  };
  const onLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = "scale(1.05)";
    setHovered(null);
  };

  const dim = hovered !== null && hovered !== index;
  const active = hovered === index;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className={`group relative aspect-[3/4] md:aspect-[3/5] overflow-hidden rounded-sm bg-[#161618] transition-all duration-700 cursor-none ${
        dim ? "opacity-50 scale-[0.98]" : "opacity-100"
      } ${active ? "md:scale-[1.02] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]" : ""}`}
    >
      <img
        ref={imgRef}
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30 scale-105 transition-all duration-1000 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">
        <div className="flex items-start justify-between">
          <span className="font-display text-[11px] tracking-[0.3em] uppercase text-[color:var(--gold)]">
            {item.num} / 03
          </span>
          <span className="text-[10px] tracking-[0.28em] uppercase text-white/40">
            {item.tag}
          </span>
        </div>

        <div>
          <h3
            className={`font-display font-bold text-white leading-[0.95] tracking-[-0.01em] transition-all duration-700 ${
              active ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-5 text-sm text-white/65 leading-relaxed max-w-xs transition-all duration-700 ${
              active ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
            }`}
          >
            {item.desc}
          </p>
          <div className="mt-7 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-white/80">
            <span>View Material</span>
            <span
              className={`inline-block h-px bg-[color:var(--gold)] transition-all duration-700 ${
                active ? "w-16" : "w-6"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
