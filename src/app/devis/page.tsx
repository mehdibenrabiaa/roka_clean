import type { Metadata } from "next"
import { Suspense } from "react"
import DevisForm from "@/components/DevisForm"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Devis Gratuit | Roka Clean",
  description: "Obtenez votre devis de nettoyage gratuit et sans engagement en quelques minutes. Réponse sous 24h.",
}

export default function DevisPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "#0072DB" }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center flex flex-col items-center gap-5">
          <span className="inline-block text-xs font-semibold text-primary bg-white rounded-full px-4 py-1.5">
            Devis gratuit
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Obtenez votre devis de nettoyage en 2 minutes
          </h1>
          <p className="text-sm md:text-base text-white max-w-md">
            Remplissez le formulaire ci-dessous et notre équipe vous recontacte rapidement avec un tarif adapté à votre besoin.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Suspense fallback={null}>
            <DevisForm />
          </Suspense>
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
