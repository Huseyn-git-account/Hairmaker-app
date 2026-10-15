// Contact — TikTok, Telegram, WhatsApp, Instagram + address and hours.
import { Send, MessageCircle, Music2, Camera, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config";
import Reveal from "./Reveal";

export default function Contact() {
  const { socials, contact } = siteConfig;

  // Four social buttons in TikTok-visitor-friendly order.
  const buttons = [
    { label: "Telegram", href: socials.telegram, Icon: Send, dark: true },
    { label: "WhatsApp", href: socials.whatsapp, Icon: MessageCircle, dark: true },
    { label: "TikTok", href: socials.tiktok, Icon: Music2, dark: false },
    { label: "Instagram", href: socials.instagram, Icon: Camera, dark: false },
  ];

  return (
    <section id="contact" className="bg-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-cream-50 sm:text-4xl">
              Book your consultation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/80">
              Send a photo of your hair in daylight — I will suggest the best
              treatment, price and time. {contact.phoneNote}.
            </p>
          </div>
        </Reveal>

        {/* Social buttons — 2x2 on phones, 4 in a row on desktop */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {buttons.map(({ label, href, Icon, dark }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                dark
                  ? "bg-gold-400 text-ink-900 hover:bg-gold-300"
                  : "border border-cream-200/30 text-cream-50 hover:border-gold-300 hover:text-gold-200"
              }`}
            >
              <Icon size={17} />
              {label}
            </a>
          ))}
        </div>

        {/* Address + working hours */}
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-3xl bg-white/5 p-5">
            <MapPin size={20} className="mt-0.5 shrink-0 text-gold-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cream-200/60">
                Address
              </p>
              <p className="mt-1 text-sm font-medium text-cream-50">
                {contact.address}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-3xl bg-white/5 p-5">
            <Clock size={20} className="mt-0.5 shrink-0 text-gold-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cream-200/60">
                Working hours
              </p>
              <p className="mt-1 text-sm font-medium text-cream-50">
                {contact.workingHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
