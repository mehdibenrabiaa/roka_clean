import Image from "next/image"
import { Clock } from "lucide-react"

const avatars = [
  "/profile_pic_1.webp",
  "/profile_pic_2.webp",
  "/profile_pic_3.webp",
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] flex items-center pb-28 md:pb-40">

      {/* Mobile background image */}
      <div className="md:hidden absolute inset-0 opacity-30">
        <Image
          src="/hero-bg-mobile.webp"
          alt=""
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Desktop background image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/hero-bg-large.webp"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-6">
        <div className="flex flex-col gap-6 max-w-lg">

        {/* Hours badge */}
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#1e1e1e]" />
          <span className="text-xs font-semibold text-[#1e1e1e] tracking-wide">
            Horaires : 9h00 à 19h30
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-[52px] font-bold text-primary leading-tight">
          Services de Nettoyage pour Professionnels et Particuliers
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#1e1e1e] max-w-md leading-relaxed">
          Des services de nettoyage fiables, conçus pour garder votre espace impeccable, frais et accueillant.
        </p>

        {/* Trust avatars */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold text-[#1e1e1e]">Approuvé par 5k+ clients</p>
            <p className="text-xs text-[#1e1e1e]">Partout en France</p>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
