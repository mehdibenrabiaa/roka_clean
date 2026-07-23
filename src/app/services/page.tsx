import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Nos Services — Roka Clean",
  description: "Découvrez l'ensemble des prestations de nettoyage professionnel proposées par Roka Clean, pour tous les types d'espaces.",
}

const categories = [
  {
    emoji: "🏠",
    title: "Nettoyage de maisons",
    items: [
      "Dépoussiérage",
      "Lavage des sols",
      "Nettoyage de la cuisine",
      "Nettoyage des salles de bains",
      "Nettoyage des vitres",
      "Nettoyage des chambres et du salon",
      "Désinfection des surfaces",
      "Grand nettoyage",
    ],
  },
  {
    emoji: "🏘️",
    title: "Nettoyage de résidences",
    items: [
      "Nettoyage des halls d'entrée",
      "Entretien des escaliers",
      "Nettoyage des ascenseurs",
      "Lavage des parties communes",
      "Nettoyage des vitres",
      "Nettoyage des parkings",
      "Entretien des locaux à poubelles",
      "Désinfection des points de contact",
    ],
  },
  {
    emoji: "🏢",
    title: "Nettoyage de bureaux",
    items: [
      "Dépoussiérage des postes de travail",
      "Lavage des sols",
      "Nettoyage des salles de réunion",
      "Nettoyage des sanitaires",
      "Nettoyage des vitres",
      "Désinfection des bureaux",
      "Vidage des corbeilles",
      "Nettoyage des espaces communs",
    ],
  },
  {
    emoji: "🏥",
    title: "Nettoyage d'hôpitaux et cliniques",
    items: [
      "Désinfection des chambres",
      "Nettoyage des salles d'attente",
      "Entretien des cabinets médicaux",
      "Nettoyage des couloirs",
      "Désinfection des sanitaires",
      "Lavage des sols",
      "Nettoyage des vitres",
      "Désinfection des points de contact",
    ],
  },
  {
    emoji: "🛍️",
    title: "Nettoyage de magasins",
    items: [
      "Nettoyage des espaces de vente",
      "Nettoyage des vitrines",
      "Dépoussiérage des rayons",
      "Lavage des sols",
      "Nettoyage des caisses",
      "Désinfection des surfaces",
      "Nettoyage des réserves",
      "Entretien des sanitaires",
    ],
  },
  {
    emoji: "🏨",
    title: "Nettoyage d'hôtels",
    items: [
      "Nettoyage des chambres",
      "Changement du linge",
      "Nettoyage des salles de bains",
      "Entretien des halls",
      "Nettoyage des restaurants",
      "Lavage des vitres",
      "Désinfection des espaces communs",
      "Nettoyage des couloirs",
    ],
  },
  {
    emoji: "🍽️",
    title: "Nettoyage de restaurants",
    items: [
      "Nettoyage des salles",
      "Nettoyage des cuisines",
      "Désinfection des plans de travail",
      "Lavage des sols",
      "Nettoyage des sanitaires",
      "Nettoyage des vitres",
      "Dégraissage des équipements",
      "Gestion des déchets",
    ],
  },
  {
    emoji: "🏫",
    title: "Nettoyage d'écoles",
    items: [
      "Nettoyage des salles de classe",
      "Désinfection des tables",
      "Nettoyage des sanitaires",
      "Entretien des couloirs",
      "Lavage des sols",
      "Nettoyage des vitres",
      "Nettoyage des cours de récréation",
      "Désinfection des espaces communs",
    ],
  },
  {
    emoji: "🏭",
    title: "Nettoyage industriel",
    items: [
      "Nettoyage des ateliers",
      "Nettoyage des machines",
      "Lavage des sols industriels",
      "Dépoussiérage des installations",
      "Nettoyage des entrepôts",
      "Gestion des déchets",
      "Désinfection des zones de travail",
      "Nettoyage des quais",
    ],
  },
  {
    emoji: "🧱",
    title: "Nettoyage après chantier",
    items: [
      "Enlèvement des gravats",
      "Dépoussiérage complet",
      "Lavage des sols",
      "Nettoyage des vitres",
      "Nettoyage des murs et plafonds",
      "Désinfection",
      "Nettoyage des sanitaires",
      "Remise en état des locaux",
    ],
  },
  {
    emoji: "🪟",
    title: "Nettoyage de vitres et façades",
    items: [
      "Vitres intérieures",
      "Vitres extérieures",
      "Façades vitrées",
      "Vérandas",
      "Baies vitrées",
      "Miroirs",
      "Encadrements de fenêtres",
      "Nettoyage en hauteur",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero banner */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/confidentialite.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5 mb-4">
            Nos prestations
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Tous Nos Services de Nettoyage
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            De la maison à l&apos;usine, Roka Clean intervient dans tous types d&apos;espaces avec le même souci du détail.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-section-alt rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h2 className="font-bold text-[#1e1e1e] text-lg">{cat.title}</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <Check size={9} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-[#1e1e1e]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Prêt à réserver votre nettoyage ?"
        subtitle="Quel que soit votre espace, notre équipe est prête à intervenir. Obtenez votre devis gratuit dès aujourd'hui."
      />

    </main>
  )
}
