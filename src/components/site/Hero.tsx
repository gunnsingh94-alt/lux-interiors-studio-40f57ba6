import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { SplitText } from "./SplitText";
import heroBg from "../../assets/hero-bg.jpg";
import pvc from "../../assets/pvc-panels.jpg";
import uv from "../../assets/uv-rolls.jpg";
import pu from "../../assets/pu-stone.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.transform = `translateY(${y * 0.25}px)`;
      ref.current.style.opacity = `${Math.max(0, 1 - y / 700)}`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#0d0d0f] pt-28 md:pt-0"
    >
      {/* Bento background grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-40 md:opacity-50">
        <img
          src={heroBg}
          alt=""
          className="col-span-6 row-span-3 md:col-span-4 md:row-span-4 h-full w-full object-cover"
        />
        <img
          src={pvc}
          alt=""
          className="hidden md:block col-span-2 row-span-2 h-full w-full object-cover"
        />
        <img
          src={uv}
          alt=""
          className="hidden md:block col-span-2 row-span-2 h-full w-full object-cover"
        />
        <img
          src={pu}
          alt=""
          className="hidden md:block col-span-2 row-span-2 h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f]/70 via-[#0d0d0f]/40 to-[#0d0d0f]" />
      <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[color:var(--accent)]/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[color:var(--gold)]/10 blur-[140px]" />

      <div
        ref={ref}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center px-6 py-24 md:px-10"
      >
        <div className="mb-8 flex items-center gap-4 text-[11px] tracking-[0.32em] uppercase text-white/55">
          <span className="h-px w-12 bg-[color:var(--gold)]/60" />
          Interior Materials · Est. Jai Jagdamba
        </div>

        <h1 className="font-display font-bold text-white leading-[0.92] tracking-[-0.02em] text-[clamp(2.6rem,9.5vw,9rem)]">
          <SplitText
            as="span"
            text="Redefining Spaces."
            className="block"
          />
          <SplitText
            as="span"
            text="Elevating Interiors."
            className="block gold-gradient italic"
            delayStep={70}
          />
        </h1>

        <p className="mt-10 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
          A curated atelier of PVC panels, UV rolls and PU stone — engineered for
          architects, dreamers and the people who live inside their work.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <MagneticButton href="#collection" strength={0.45}>
            <span className="group relative inline-flex h-[88px] w-[88px] md:h-[140px] md:w-[140px] items-center justify-center rounded-full bg-gradient-to-br from-[#f4e4b2] via-[#c8a14a] to-[#8a6321] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#1a1305] shadow-[0_20px_60px_-15px_rgba(196,148,55,0.65)] transition-all duration-700 hover:scale-105">
              <span className="absolute inset-1 rounded-full border border-black/20" />
              Explore the
              <br />
              Collection
            </span>
          </MagneticButton>
          <div className="text-xs tracking-[0.22em] uppercase text-white/45">
            Scroll <span className="text-[color:var(--accent)]">↓</span> to immerse
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-md py-4">
        <div className="marquee-track flex whitespace-nowrap text-white/40 text-sm tracking-[0.3em] uppercase">
          {Array(2)
            .fill(0)
            .map((_, k) => (
              <div key={k} className="flex shrink-0 gap-12 pr-12">
                {[
                  "PVC Panels",
                  "·",
                  "UV Wallpapers",
                  "·",
                  "PU Stone",
                  "·",
                  "Waterproof",
                  "·",
                  "Termite Proof",
                  "·",
                  "Eco Friendly",
                  "·",
                  "Made in India",
                  "·",
                ].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
