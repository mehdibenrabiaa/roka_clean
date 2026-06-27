import Link from "next/link"
import Image from "next/image"

const links = [
  {
    heading: "Explorer",
    items: ["Accueil", "À propos", "Services", "Témoignages", "FAQ"],
    hrefs: ["/", "/about", "/services", "/testimonials", "/#faq"],
  },
  {
    heading: "Nos Services",
    items: [
      "Nettoyage de Bureau",
      "Nettoyage en Profondeur",
      "Nettoyage après Travaux",
      "Nettoyage de Vitres",
    ],
    hrefs: ["/services", "/services", "/services", "/services"],
  },
  {
    heading: "Ressources",
    items: ["Blog", "Études de cas", "Support", "Politique de confidentialité", "Conditions d'utilisation"],
    hrefs: ["/blog", "/case-studies", "/support", "/privacy", "/terms"],
  },
  {
    heading: "Entreprise",
    items: ["À propos", "Notre équipe", "Carrières", "Contactez-nous"],
    hrefs: ["/about", "/team", "/careers", "/contact"],
  },
]

const socials = [
  {
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "#",
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
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#DDE3E8]">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Link href="/">
              <Image src="/logo.svg" alt="Roka Clean" width={200} height={55} className="object-contain" />
            </Link>
            <p className="text-sm text-[#1e1e1e]/60 leading-relaxed max-w-[200px]">
              Un espace propre, un esprit serein — à chaque intervention.
            </p>
            <div className="flex gap-3">
              {socials.map(({ svg, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dk transition-colors text-[#1e1e1e]"
                >
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-[#1e1e1e] mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={item}>
                    <Link
                      href={col.hrefs[i]}
                      className="text-sm text-[#1e1e1e]/60 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#DDE3E8] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#1e1e1e]/50">
          <span>© 2025 Roka Clean. Tous droits réservés.</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Conditions d'utilisation</Link>
        </div>

      </div>
    </footer>
  )
}
