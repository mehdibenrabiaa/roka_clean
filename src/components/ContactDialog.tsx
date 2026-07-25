"use client"

import Link from "next/link"
import { Phone, Mail, Handshake } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const PHONE_DISPLAY = "+33 6 76 34 44 68"
const PHONE_TEL = "tel:+33676344468"
const WHATSAPP_HREF = "https://wa.me/33676344468"
const EMAIL = "contact@rokaclean.fr"

const socials = [
  {
    href: "#",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.43 1.35 4.86L2 22l5.36-1.41c1.36.72 2.94 1.13 4.68 1.13 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.72 14.15c-.24.68-1.19 1.24-1.94 1.4-.51.11-1.18.19-3.43-.73-2.88-1.19-4.74-4.1-4.88-4.29-.14-.19-1.16-1.54-1.16-2.94s.72-2.08.98-2.37c.24-.26.53-.32.71-.32h.51c.16 0 .38-.06.6.46.24.58.82 2 .89 2.14.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.8.85.27.14.44.2.51.31.07.12.07.68-.17 1.36z" />
    </svg>
  )
}

export default function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto mb-1 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Handshake size={26} className="text-primary" />
          </div>
          <DialogTitle>Contactez-nous</DialogTitle>
          <DialogDescription>
            Nous sommes ravis de vous aider ! Choisissez le moyen qui vous convient le mieux.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          <Link
            href={PHONE_TEL}
            className="flex items-center gap-3 rounded-xl border border-[#DDE3E8] px-4 py-3 hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Phone size={18} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-[#1e1e1e]">Appelez-nous</span>
              <span className="text-xs text-[#1e1e1e]/60">{PHONE_DISPLAY}</span>
            </span>
          </Link>

          <Link
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[#DDE3E8] px-4 py-3 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
              <WhatsAppIcon />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-[#1e1e1e]">WhatsApp</span>
              <span className="text-xs text-[#1e1e1e]/60">Discutez avec nous directement</span>
            </span>
          </Link>

          <Link
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 rounded-xl border border-[#DDE3E8] px-4 py-3 hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Mail size={18} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-[#1e1e1e]">Envoyez un e-mail</span>
              <span className="text-xs text-[#1e1e1e]/60">{EMAIL}</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 pt-5 border-t border-[#DDE3E8]">
          {socials.map(({ svg, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dk transition-colors text-white"
            >
              {svg}
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-[#1e1e1e]/60 mt-4">
          Merci pour votre confiance 💙
        </p>
      </DialogContent>
    </Dialog>
  )
}
