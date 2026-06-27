"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center">

      {/* Mobile background image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/hero-bg-mobile.webp"
          alt=""
          fill
          className="object-cover object-right"
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

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex justify-start">

        {/* Left card */}
        <div className="w-full max-w-[480px] rounded-2xl p-8 md:p-10 bg-white">
          <h1 className="text-2xl md:text-[28px] font-bold text-[#1E3A5F] leading-snug mb-4">
            Le Nettoyage le Plus Abordable du Marché — Vérifiez si Nous Sommes Dans Votre Région !
          </h1>

          <p className="text-sm text-[#1E3A5F]/70 mb-6">
            Sélectionnez votre région pour voir s&apos;il reste encore des nettoyages à prix réduit dans votre zone
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Entrez votre ville ou code postal"
              className="flex-1 border border-[#DDE3E8] rounded-full px-4 py-2 text-sm text-[#1E3A5F] bg-white placeholder:text-[#1E3A5F]/40 focus:outline-none focus:ring-2 focus:ring-[#4A82B8] focus:border-transparent"
            />
            <Button className="rounded-full px-6 cursor-pointer">
              Voir
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
