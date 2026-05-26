import { useEffect, useRef } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  wordClassName?: string;
  delayStep?: number;
};

export function SplitText({
  text,
  as: Tag = "h2",
  className = "",
  wordClassName = "",
  delayStep = 60,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>(".split-word");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((w, i) => {
              setTimeout(() => w.classList.add("revealed"), i * delayStep);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayStep]);

  const parts = text.split(" ");
  return (
    <Tag ref={ref as never} className={className}>
      {parts.map((w, i) => (
        <span key={i} className="split-line">
          <span className={`split-word ${wordClassName}`}>
            {w}
            {i < parts.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
