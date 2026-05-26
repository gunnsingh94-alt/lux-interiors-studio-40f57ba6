import { useRef, useState, useEffect } from "react";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const onMove = (clientX: number) => {
      if (!dragging.current || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const mm = (e: MouseEvent) => onMove(e.clientX);
    const tm = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchmove", tm);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-sm select-none"
    >
      <img
        src={after}
        alt="After"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Before"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
        />
      </div>
      <div className="pointer-events-none absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-white/80 bg-black/40 px-3 py-1.5 backdrop-blur-sm rounded-sm">
        Before
      </div>
      <div className="pointer-events-none absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] bg-black/40 px-3 py-1.5 backdrop-blur-sm rounded-sm">
        After
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-[color:var(--gold)] shadow-[0_0_20px_rgba(244,228,178,0.8)]"
        style={{ left: `${pos}%` }}
      >
        <button
          aria-label="Drag to compare"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          data-cursor="hover"
          className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing place-items-center rounded-full bg-[color:var(--gold)] text-black shadow-[0_10px_40px_rgba(196,148,55,0.6)]"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
