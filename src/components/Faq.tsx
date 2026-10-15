// FAQ — accessible accordion with subtle Framer Motion animation.
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { siteConfig } from "@/config";
import Reveal from "./Reveal";

export default function Faq() {
  // Index of the open question (0 = first open by default).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              FAQ
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900 sm:text-4xl">
              Questions, answered
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {siteConfig.faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    open
                      ? "border-gold-400 bg-cream-100"
                      : "border-gold-200/70 bg-cream-50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-serif text-base font-semibold text-ink-900">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-600"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
