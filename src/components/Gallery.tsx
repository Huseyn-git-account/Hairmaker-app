// Results gallery — grid of before/after placeholders from /public/gallery.
import Image from "next/image";
import { siteConfig } from "@/config";
import { assetPath } from "@/lib/assetPath";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="results" className="bg-cream-200/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Results
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900 sm:text-4xl">
              Real transformations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Before / after examples. To replace: drop your photos into
              /public/gallery and update paths in src/config.ts.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {siteConfig.gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.08}>
              <figure className="group overflow-hidden rounded-3xl border border-gold-200/60 bg-white shadow-card">
                <div className="relative">
                  <Image
                    src={assetPath(item.src)}
                    alt={item.alt}
                    width={600}
                    height={700}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                    className="img-warm aspect-[6/7] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-center text-xs font-semibold text-ink-700">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
