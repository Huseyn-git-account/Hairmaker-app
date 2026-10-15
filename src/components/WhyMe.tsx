// Why Choose Me — four short premium points with icons.
import { Gem, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import { siteConfig } from "@/config";
import Reveal from "./Reveal";

// Icons paired with the four points in order.
const icons = [Gem, ShieldCheck, SlidersHorizontal, Sparkles];

export default function WhyMe() {
  return (
    <section id="why-me" className="bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Why me
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900 sm:text-4xl">
              Premium care, honest advice
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyPoints.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.title} delay={(i % 4) * 0.08}>
                <article className="h-full rounded-3xl border border-gold-200/60 bg-gradient-to-b from-white to-cream-100 p-6 text-center shadow-card">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {point.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
