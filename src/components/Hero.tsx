"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center pb-16 md:pb-32">

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
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 md:py-16 flex justify-start">

        {/* Left card */}
        <div className="w-full max-w-[720px]">
          <h1 className="text-[34px] md:text-[60px] font-bold text-[#1e1e1e] leading-tight">
            <span className="bg-white px-2 py-0.5 box-decoration-clone">
              Un Espace Propre.<br className="md:hidden" /> Un Esprit Serein.<br className="md:hidden" /> Réservez en 2 Minutes.
            </span>
          </h1>
        </div>

      </div>
    </section>
  )
}
