import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Contact — Roka Clean",
  description: "Contactez Roka Clean par téléphone, WhatsApp ou e-mail pour toute demande d'information ou de devis.",
}

const PHONE_DISPLAY = "+33 6 76 34 44 68"
const PHONE_TEL = "tel:+33676344468"
const WHATSAPP_HREF = "https://wa.me/33676344468"
const EMAIL = "contact@rokaclean.fr"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.43 1.35 4.86L2 22l5.36-1.41c1.36.72 2.94 1.13 4.68 1.13 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.72 14.15c-.24.68-1.19 1.24-1.94 1.4-.51.11-1.18.19-3.43-.73-2.88-1.19-4.74-4.1-4.88-4.29-.14-.19-1.16-1.54-1.16-2.94s.72-2.08.98-2.37c.24-.26.53-.32.71-.32h.51c.16 0 .38-.06.6.46.24.58.82 2 .89 2.14.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.8.85.27.14.44.2.51.31.07.12.07.68-.17 1.36z" />
    </svg>
  )
}

const contactMethods = [
  {
    icon: Phone,
    title: "Appelez-nous",
    detail: PHONE_DISPLAY,
    href: PHONE_TEL,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    detail: PHONE_DISPLAY,
    href: WHATSAPP_HREF,
    external: true,
    accent: "#25D366",
  },
  {
    icon: Mail,
    title: "Envoyez un e-mail",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
]

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero banner */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/confidentialite.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5 mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Contactez Roka Clean
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md mx-auto">
            Nous sommes ravis de vous aider ! Choisissez le moyen qui vous convient le mieux.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map(({ icon: Icon, title, detail, href, external, accent }) => (
              <Link
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-[#DDE3E8] px-6 py-8 hover:shadow-md transition-shadow"
              >
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: accent ?? "#294a7d" }}
                >
                  <Icon size={24} />
                </span>
                <span className="font-bold text-[#1e1e1e]">{title}</span>
                <span className="text-sm text-[#1e1e1e]/70">{detail}</span>
              </Link>
            ))}
          </div>

          {/* Address + hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-section-alt flex items-center justify-center text-primary shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-bold text-[#1e1e1e] text-sm mb-1">Adresse</p>
                <p className="text-sm text-[#1e1e1e]/70">17 Rue Léon Blum, 94350 Villiers-sur-Marne</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-section-alt flex items-center justify-center text-primary shrink-0">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-bold text-[#1e1e1e] text-sm mb-1">Horaires</p>
                <p className="text-sm text-[#1e1e1e]/70">Lundi – Samedi, 8h à 19h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Prêt à réserver votre nettoyage ?"
        subtitle="Obtenez votre devis gratuit dès aujourd'hui, notre équipe vous rappelle très vite."
      />

    </main>
  )
}
