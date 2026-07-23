import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Nettoyage de Bureau",
    description: "Gardez votre espace de travail propre et sain pour favoriser la concentration et le bien-être de vos équipes.",
    image: "/office_cleaning.webp",
  },
  {
    title: "Nettoyage en Profondeur",
    description: "Nettoyage intensif des cuisines, salles de bains et zones difficiles d'accès pour un résultat impeccable.",
    image: "/deep cleaning.webp",
  },
  {
    title: "Nettoyage après Travaux",
    description: "Élimination complète des poussières et résidus de chantier après rénovation ou construction.",
    image: "/Post-renovation cleaning.webp",
  },
  {
    title: "Nettoyage de Vitres et Facades",
    description: "Des vitres parfaitement nettes à l'intérieur comme à l'extérieur, réalisées en toute sécurité par nos équipes.",
    image: "/glass cleaning.webp",
  },
  {
    title: "Nettoyage de Contenaires",
    description: "Entretien des parties communes de résidences : sous-sol, locaux techniques, espaces vélos et couloirs.",
    image: "/Nettoyage de Contenaires.webp",
  },
  {
    title: "Bio Nettoyage",
    description: "Nettoyage écologique avec des produits certifiés bio, sans danger pour votre famille et l'environnement.",
    image: "/Biohazard Cleaning.webp",
  },
  {
    title: "Bio Nettoyage Médical",
    description: "Désinfection et bio nettoyage pour hôpitaux et cabinets médicaux, conformes aux normes sanitaires en vigueur.",
    image: "/Hospital Cleaning.webp",
  },
]

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            La Fraîcheur Commence avec Roka Clean
          </h2>
          <p className="text-sm md:text-base text-[#1e1e1e]/70 max-w-md mx-auto">
            Du nettoyage hebdomadaire au grand ménage, nos experts apportent
            propreté et soin à chaque espace.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col">

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-[240px] bg-[#DDE3E8]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1e1e1e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text */}
              <div className="pt-5 flex flex-col flex-1">
                <h3 className="font-bold text-[#1e1e1e] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#1e1e1e]/70 leading-relaxed mb-4 flex-1">{service.description}</p>
                <Button size="sm" className="rounded-full cursor-pointer gap-2 font-bold w-fit">
                  Réserver <ArrowRight size={13} />
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
