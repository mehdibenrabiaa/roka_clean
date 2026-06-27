"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "Étape 1",
    title: "Choisissez votre formule",
    description:
      "Sélectionnez la prestation qui vous convient et planifiez votre visite — nous vous attribuons un professionnel de confiance immédiatement.",
    cta: null,
  },
  {
    number: "Étape 2",
    title: "Notre équipe intervient",
    description:
      "Notre équipe formée arrive à l'heure, équipée d'outils et de produits écologiques pour un nettoyage impeccable.",
    cta: "Réserver maintenant",
  },
  {
    number: "Étape 3",
    title: "Profitez de votre espace propre",
    description:
      "Détendez-vous : votre espace est désormais impeccable, rafraîchi et prêt pour votre confort.",
    cta: null,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24" style={{ background: "linear-gradient(129deg, #9aff00 0%, #efffdb 60%)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] leading-tight mb-3 max-w-xl">
            Comment Roka Clean Garde Votre Maison Étincelante
          </h2>
          <p className="text-sm md:text-base text-[#1e1e1e]/70 max-w-md">
            De la réservation au résultat parfait — voici comment nous rendons le nettoyage simple et sans effort.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">

          {/* Left — image */}
          <div className="flex-1 relative min-h-[340px] md:min-h-0">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[340px] bg-[#DDE3E8]">
              <Image
                src="/professionnelde nettoyage Roka Clean.webp"
                alt="Équipe Roka Clean en action"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating satisfaction badge */}
            <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-3xl font-bold text-[#1e1e1e]">98%</p>
              <p className="text-xs text-[#1e1e1e]/60 mt-0.5">Clients Satisfaits</p>
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex-1 flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl px-6 py-5 shadow-sm">
                <p className="text-sm font-semibold text-[#1e1e1e]/50 mb-1">{step.number}</p>
                <h3 className="text-lg font-bold text-[#1e1e1e] mb-2">{step.title}</h3>
                <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{step.description}</p>
                {step.cta && (
                  <Button className="mt-4 rounded-full cursor-pointer font-bold" size="lg">
                    {step.cta}
                  </Button>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
