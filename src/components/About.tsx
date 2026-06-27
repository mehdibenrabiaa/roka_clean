import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const bullets = [
  "Chaque coin nettoyé avec soin et précision.",
  "Sûr pour votre maison et la planète.",
  "Une équipe qualifiée pour un service fiable et de qualité.",
]

const stats = [
  { value: "10K+",  label: "Clients Ravis" },
  { value: "100K",  label: "Heures de Nettoyage" },
  { value: "4.9/5", label: "Note Moyenne" },
  { value: "15ans", label: "Expérience" },
]

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left — text content */}
          <div className="flex-1">
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#4A82B8] hover:underline mb-5"
            >
              À propos <ArrowRight size={14} />
            </Link>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] leading-tight mb-5">
              Là où la Qualité Rencontre le Vrai Soin
            </h2>

            <p className="text-[#1E3A5F]/70 text-sm md:text-base mb-7 max-w-md">
              Chez Roka Clean, nous croyons qu&apos;une maison propre inspire un esprit clair.
              Nos professionnels formés offrent un nettoyage écologique et soigné.
            </p>

            <ul className="space-y-4 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#6FA32E] flex items-center justify-center">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#1E3A5F]">{b}</span>
                </li>
              ))}
            </ul>

            <Button className="rounded-full px-8 cursor-pointer" size="lg">
              En savoir plus
            </Button>
          </div>

          {/* Right — image + floating card */}
          <div className="flex-1 relative w-full">
            <div className="relative rounded-2xl overflow-hidden h-[380px] md:h-[460px] w-full bg-[#DDE3E8]">
              <Image
                src="/about-cleaner.jpg"
                alt="Professionnel de nettoyage Roka Clean"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating trust badge */}
            <div className="absolute bottom-5 right-5 bg-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-xs font-semibold text-[#1E3A5F] mb-3">Approuvé par nos clients</p>
              <div className="flex items-center gap-3">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-[#4A82B8]/20"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E3A5F]">1000+</p>
                  <p className="text-xs text-[#1E3A5F]/60">Clients Satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#DDE3E8] mt-16 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">{s.value}</p>
              <p className="text-sm text-[#1E3A5F]/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
