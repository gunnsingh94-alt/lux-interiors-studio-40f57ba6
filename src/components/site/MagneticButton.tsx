import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    if (inner.current) {
      inner.current.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px)`;
    }
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    if (inner.current) inner.current.style.transform = "translate(0,0)";
  };

  const cls = `inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`;
  const content = (
    <span ref={inner} className="inline-block transition-transform duration-500">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={ref as never}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        className={cls}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cls}
    >
      {content}
    </button>
  );
}
