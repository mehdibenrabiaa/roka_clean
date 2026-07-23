"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

function HeartIcon() {
  return (
    <svg
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547 3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79-.78-1.654-2.39-2.79-4.25-2.79" />
    </svg>
  )
}

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<"success" | "duplicate" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)
    try {
      const res = await fetch(`${API_URL}/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.status === 409) {
        setResult("duplicate")
      } else if (!res.ok) {
        throw new Error()
      } else {
        setResult("success")
        setEmail("")
      }
    } catch {
      setResult("error")
    } finally {
      setSubmitting(false)
    }
  }

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

          {result === "success" ? (
            <div className="page-transition text-center py-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <HeartIcon />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#1e1e1e] leading-tight mb-2">
                Merci pour votre confiance !
              </h2>
              <p className="text-sm text-[#1e1e1e]/75">
                Vous êtes inscrit à la communauté Roka Clean. Nos offres exclusives et actualités arriveront bientôt dans votre boîte mail.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e] leading-tight mb-3">
                Rejoignez la Communauté Roka Clean
              </h2>

              <p className="text-sm text-[#1e1e1e]/75 mb-6">
                Recevez nos offres exclusives et actualités directement dans votre boîte mail.
              </p>

              {/* Input + button — stacked on mobile, inline on sm+ */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  required
                  className="flex-1 border border-[#DDE3E8] rounded-full px-4 py-2.5 text-sm text-[#1e1e1e] bg-white placeholder:text-[#1e1e1e]/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button type="submit" disabled={submitting} className="rounded-full px-6 font-bold w-full sm:w-auto">
                  {submitting ? "…" : "S'abonner"}
                </Button>
              </form>

              {result === "duplicate" && (
                <p className="mt-4 text-sm text-[#1e1e1e]/75 font-medium">
                  Cet e-mail est déjà inscrit — merci de votre fidélité !
                </p>
              )}
              {result === "error" && (
                <p className="mt-4 text-sm text-red-600 font-medium">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <p className="mt-4 text-xs text-[#1e1e1e]/75">
                En vous abonnant, vous acceptez notre{" "}
                <Link href="/confidentialite" className="underline hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </>
          )}

        </div>
      </div>

    </section>
  )
}
