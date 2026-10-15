// Services — six premium cards read from siteConfig.services.
import { Clock, Tag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Services
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900 sm:text-4xl">
              Treatments for every hair type
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Premium-class formulas and a custom diagnosis before every
              treatment. Prices below are starting points — final quote after a
              free photo consultation.
            </p>
          </div>
        </Reveal>

        {/* Cards grid — 1 col on phones, 3 on desktop */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-gold-200/60 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="font-serif text-4xl text-gold-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-ink-900">
                    <Tag size={15} className="text-gold-500" />
                    {service.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-ink-500">
                    <Clock size={15} className="text-gold-500" />
                    {service.duration}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500"
                >
                  Book this treatment <ArrowRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
