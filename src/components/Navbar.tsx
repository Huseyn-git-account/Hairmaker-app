// Sticky navbar — logo, anchor links, Contact button, mobile hamburger.
"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/config";

export default function Navbar() {
  // Mobile menu open state.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-200/60 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand logo + name */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-white">
            <Sparkles size={18} />
          </span>
          <span className="font-serif text-lg font-semibold text-ink-900">
            {siteConfig.taglineShort}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-gold-500"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-full border border-gold-300 p-2 text-ink-900 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-gold-200/60 bg-cream-50 px-4 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-cream-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-cream-50"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
