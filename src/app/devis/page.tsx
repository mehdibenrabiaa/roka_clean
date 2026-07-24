import type { Metadata } from "next"
import { Suspense } from "react"
import { Check, Clock, ShieldCheck, BadgeEuro } from "lucide-react"
import DevisForm from "@/components/DevisForm"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Devis Gratuit | Roka Clean",
  description: "Obtenez votre devis de nettoyage gratuit et sans engagement en quelques minutes. Réponse sous 24h.",
}

const benefits = [
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Notre équipe vous recontacte rapidement pour affiner votre besoin et planifier une intervention.",
  },
  {
    icon: BadgeEuro,
    title: "100% gratuit et sans engagement",
    description: "Le devis ne vous engage à rien. Vous décidez si et quand vous souhaitez réserver.",
  },
  {
    icon: ShieldCheck,
    title: "Tarifs transparents",
    description: "Pas de frais cachés : le prix annoncé est le prix facturé, quelle que soit la formule choisie.",
  },
]

export default function DevisPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "#0072DB" }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-5">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5">
            Devis gratuit
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Obtenez votre devis de nettoyage en 2 minutes
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md">
            Remplissez le formulaire ci-dessous et notre équipe vous recontacte rapidement avec un tarif adapté à votre besoin.
          </p>
        </div>
      </section>

      {/* Form + benefits */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">

            {/* Benefits */}
            <div className="flex flex-col gap-8 lg:pt-4 order-2 lg:order-1">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1e1e1e] mb-1">{title}</h3>
                    <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}

              <ul className="flex flex-col gap-3 border-t border-[#DDE3E8] pt-8">
                {["Agents formés, vérifiés et assurés", "Produits écologiques inclus", "Formules ponctuelles ou récurrentes"].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-[#1e1e1e]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <Suspense fallback={null}>
                <DevisForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      <CTA
        title="Une question avant de vous décider ?"
        subtitle="Notre équipe est disponible pour vous répondre du lundi au samedi, de 8h à 19h."
        primaryLabel="Voir nos services"
        primaryHref="/services"
      />

    </main>
  )
}
