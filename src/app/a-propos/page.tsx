"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import CTA from "@/components/CTA"

const stats = [
  { end: 10,  suffix: "K+",  label: "Clients Ravis" },
  { end: 100, suffix: "K",   label: "Heures de Nettoyage" },
  { end: 4.9, suffix: "/5",  label: "Note Moyenne", decimal: true },
  { end: 15,  suffix: "ans", label: "Expérience" },
]

const values = [
  {
    title: "Qualité sans compromis",
    description: "Chaque intervention est réalisée avec le même soin, qu'il s'agisse d'un studio ou d'un grand bureau.",
  },
  {
    title: "Produits écologiques",
    description: "Nous utilisons exclusivement des produits respectueux de l'environnement, sûrs pour votre famille et vos animaux.",
  },
  {
    title: "Équipe de confiance",
    description: "Nos agents sont soigneusement sélectionnés, formés et assurés. Vous pouvez nous confier vos clés l'esprit tranquille.",
  },
  {
    title: "Satisfaction garantie",
    description: "Si vous n'êtes pas satisfait, nous revenons gratuitement dans les 48 h. Votre sérénité est notre priorité.",
  },
]


function StatCounter({ end, suffix, label, decimal }: typeof stats[0]) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          let step = 0
          const timer = setInterval(() => {
            step++
            const eased = 1 - Math.pow(1 - step / steps, 3)
            setCount(parseFloat((eased * end).toFixed(decimal ? 1 : 0)))
            if (step >= steps) clearInterval(timer)
          }, 1800 / steps)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, decimal])

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-[#1e1e1e]">
        {decimal ? count.toFixed(1) : Math.floor(count)}{suffix}
      </p>
      <p className="text-sm text-[#1e1e1e]/75 mt-1">{label}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero banner */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/about_header_bg.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5 mb-4">
            Notre histoire
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Là où la Qualité Rencontre le Vrai Soin
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Chez Roka Clean, nous croyons qu'une maison propre inspire un esprit clair. Découvrez qui nous sommes et ce qui nous anime.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {/* Image */}
            <div className="flex-1 relative w-full">
              <div className="relative rounded-2xl overflow-hidden h-[360px] md:h-[460px] w-full bg-[#DDE3E8]">
                <Image
                  src="/about-us-01.webp"
                  alt="Équipe Roka Clean"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] leading-tight mb-5">
                Une entreprise née d'une passion pour la propreté
              </h2>
              <p className="text-sm md:text-base text-[#1e1e1e]/70 mb-5 leading-relaxed">
                Fondée il y a plus de 15 ans, Roka Clean est née d'une conviction simple : chaque foyer et chaque espace de travail mérite un nettoyage professionnel, accessible et respectueux de l'environnement.
              </p>
              <p className="text-sm md:text-base text-[#1e1e1e]/70 mb-8 leading-relaxed">
                Depuis nos débuts, nous avons accompagné des milliers de clients avec la même exigence et la même passion. Aujourd'hui, notre équipe de professionnels formés intervient chaque jour pour que vous puissiez profiter d'un espace sain et serein.
              </p>
              <ul className="space-y-3">
                {["Plus de 15 ans d'expérience dans le secteur.", "10 000+ clients satisfaits à travers la région.", "Certifiés et assurés pour votre tranquillité d'esprit."].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-[#1e1e1e]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#DDE3E8] mt-16 pt-12">
            {stats.map((s) => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-section-alt py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e] mb-3">Nos Valeurs</h2>
            <p className="text-sm md:text-base text-[#1e1e1e]/75 max-w-md mx-auto">
              Ce qui nous guide au quotidien dans chaque intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-8 h-1 rounded-full bg-primary mb-4" />
                <h3 className="font-bold text-[#1e1e1e] text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Prêt à découvrir la différence Roka Clean ?"
        subtitle="Rejoignez nos milliers de clients satisfaits et réservez votre première intervention dès aujourd'hui."
      />

    </main>
  )
}
