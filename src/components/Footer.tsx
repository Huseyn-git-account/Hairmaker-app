// Footer — brand, quick links, copyright. All text from siteConfig.
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-200/60 bg-cream-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-white">
            <Sparkles size={16} />
          </span>
          <span className="font-serif text-base font-semibold text-ink-900">
            {siteConfig.businessName}
          </span>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-ink-500">
          {siteConfig.footerNote}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-ink-700 hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-ink-500">
          © {year} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
