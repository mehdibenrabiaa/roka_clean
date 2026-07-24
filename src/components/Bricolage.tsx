import Link from "next/link"
import { Wrench, Sofa, Droplet, PlugZap, PaintRoller, Drill } from "lucide-react"
import { Button } from "@/components/ui/button"

const tasks = [
  {
    icon: Sofa,
    title: "Montage de Meubles",
    description: "Montage rapide et soigné de vos meubles en kit, prêts à l'emploi.",
  },
  {
    icon: Droplet,
    title: "Petite Plomberie",
    description: "Réparation de fuites, changement de joints, installation de robinetterie.",
  },
  {
    icon: PlugZap,
    title: "Petite Électricité",
    description: "Pose de luminaires, remplacement de prises et interrupteurs.",
  },
  {
    icon: PaintRoller,
    title: "Peinture & Finitions",
    description: "Retouches et peinture de murs, plafonds et boiseries.",
  },
  {
    icon: Drill,
    title: "Fixation & Pose",
    description: "Étagères, tableaux, rideaux et stores fixés en toute sécurité.",
  },
  {
    icon: Wrench,
    title: "Petites Réparations",
    description: "Portes, poignées, charnières et autres petits travaux du quotidien.",
  },
]

export default function Bricolage() {
  return (
    <section className="bg-section-alt py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-primary mb-3">
            Au-delà du nettoyage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            Nos Services de Bricolage
          </h2>
          <p className="text-sm md:text-base text-[#1e1e1e]/70 max-w-md mx-auto">
            En plus du nettoyage, notre équipe polyvalente prend en charge les
            petits travaux les plus demandés par les foyers en France.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div key={task.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center mb-4">
                <task.icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-[#1e1e1e] text-lg mb-2">{task.title}</h3>
              <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{task.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild className="rounded-full px-8 cursor-pointer" size="lg">
            <Link href="/devis">Demander un devis</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
