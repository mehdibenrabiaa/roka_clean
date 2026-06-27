"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[480px]">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Rejoignez la Communauté Roka Clean.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Card — full width on mobile, constrained on desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 flex justify-start">
        <div className="w-full md:max-w-[480px] bg-white rounded-2xl p-6 md:p-10 shadow-xl">

          <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e] leading-tight mb-3">
            Rejoignez la Communauté Roka Clean
          </h2>

          <p className="text-sm text-[#1e1e1e]/60 mb-6">
            Recevez nos offres exclusives et actualités directement dans votre boîte mail.
          </p>

          {/* Input + button — stacked on mobile, inline on sm+ */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              required
              className="flex-1 border border-[#DDE3E8] rounded-full px-4 py-2.5 text-sm text-[#1e1e1e] bg-white placeholder:text-[#1e1e1e]/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button type="submit" className="rounded-full px-6 font-bold w-full sm:w-auto">
              S'abonner
            </Button>
          </form>

          <p className="mt-4 text-xs text-[#1e1e1e]/50">
            En vous abonnant, vous acceptez notre{" "}
            <Link href="/privacy" className="underline hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            .
          </p>

        </div>
      </div>

    </section>
  )
}
