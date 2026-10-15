// Hero — headline, subtext, Telegram/WhatsApp buttons, hero image.
import Image from "next/image";
import { Send, MessageCircle, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/config";
import Reveal from "./Reveal";

export default function Hero() {
  const { hero, socials } = siteConfig;

  return (
    <section id="top" className="bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:px-6 md:grid-cols-2 md:pt-16">
        {/* Copy side */}
        <Reveal>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
              <BadgeCheck size={14} />
              {hero.badge}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
              {hero.subtitle}
            </p>

            {/* Two messenger CTAs — mobile-first stacked */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-soft transition hover:bg-gold-500"
              >
                <Send size={17} />
                {hero.primaryCtaLabel}
              </a>
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-gold-400 bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-card transition hover:border-gold-500 hover:bg-cream-100"
              >
                <MessageCircle size={17} />
                {hero.secondaryCtaLabel}
              </a>
            </div>
            <p className="mt-4 text-xs text-ink-500">{hero.note}</p>

            {/* Social proof stats */}
            <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
              {hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gold-200/70 bg-white/70 px-3 py-3 text-center"
                >
                  <p className="font-serif text-lg font-bold text-ink-900">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Image side — replace /public/hero.jpg with a real photo */}
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-200/70 shadow-soft">
            <Image
              src={hero.heroImage}
              alt={hero.heroImageAlt}
              width={900}
              height={1100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-warm aspect-[4/5] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 px-4 py-3 backdrop-blur">
              <p className="font-serif text-sm font-semibold text-ink-900">
                {siteConfig.businessName}
              </p>
              <p className="text-xs text-ink-500">{siteConfig.tagline}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
