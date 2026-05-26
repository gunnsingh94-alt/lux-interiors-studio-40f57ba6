import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { SplitText } from "./SplitText";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-10 bg-[#0d0d0f] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--accent)]/8 blur-[160px]" />
      <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[color:var(--gold)]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-white/45">
            <span className="h-px w-10 bg-[color:var(--gold)]/60" />
            Begin a Project
          </div>
          <SplitText
            as="h2"
            text="Let's build something beautiful."
            className="font-display font-bold text-white text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em]"
          />
          <p className="mt-8 max-w-md text-white/60 leading-relaxed">
            Tell us about your space. Our atelier will respond within one
            working day with material samples, drawings and a fixed quote.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1 w-20">
                Studio
              </span>
              <span className="text-white/85">
                Jai Jagdamba Interior · Gujarat, India
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1 w-20">
                Email
              </span>
              <a
                href="mailto:hello@jaijagdamba.in"
                className="text-white/85 hover:text-[color:var(--gold)] transition-colors"
              >
                hello@jaijagdamba.in
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-[0.28em] uppercase text-white/40 mt-1 w-20">
                Phone
              </span>
              <a
                href="tel:+919999999999"
                className="text-white/85 hover:text-[color:var(--gold)] transition-colors"
              >
                +91 99999 99999
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-sm border border-white/8 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="field-line">
              <input id="name" type="text" placeholder=" " required />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="field-line">
              <input id="email" type="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="field-line">
            <input id="project" type="text" placeholder=" " />
            <label htmlFor="project">Project type</label>
          </div>
          <div className="field-line">
            <textarea id="msg" rows={4} placeholder=" " />
            <label htmlFor="msg">Tell us about the space</label>
          </div>

          <div className="pt-6">
            <MagneticButton strength={0.3}>
              <span className="inline-flex items-center gap-4 rounded-full bg-gradient-to-br from-[#f4e4b2] via-[#c8a14a] to-[#8a6321] px-8 py-4 text-[12px] tracking-[0.28em] uppercase text-[#1a1305] font-medium shadow-[0_20px_50px_-15px_rgba(196,148,55,0.6)] transition-transform hover:scale-[1.02]">
                {sent ? "Sent ✓" : "Send Enquiry"}
                <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
              </span>
            </MagneticButton>
          </div>
        </form>
      </div>

      <footer className="relative mt-32 md:mt-40 border-t border-white/5 pt-10">
        <div className="mx-auto max-w-[1500px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs tracking-[0.2em] uppercase text-white/40">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-sm border border-[color:var(--gold)]/40 text-[color:var(--gold)] font-display font-bold text-xs">
              JJ
            </span>
            Jai Jagdamba Interior © {new Date().getFullYear()}
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Pinterest</a>
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Linkedin</a>
          </div>
          <div>Crafted with intent · Made in India</div>
        </div>
      </footer>
    </section>
  );
}
