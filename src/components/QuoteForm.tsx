"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const serviceOptions = [
  "Professionnel",
  "Particulier",
]

const whenOptions = [
  "Dès que possible",
  "Cette semaine",
  "La semaine prochaine",
  "Ce mois-ci",
  "Date flexible",
]

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
      className="text-primary mx-auto"
    >
      <path d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547 3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79-.78-1.654-2.39-2.79-4.25-2.79" />
    </svg>
  )
}

export default function QuoteForm() {
  const [service, setService] = useState("")
  const [when, setWhen] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [error, setError] = useState(false)

  const isValid = service && when && name && phone

  const handleSubmit = async () => {
    if (!isValid) return
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch(`${API_URL}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, timing: when, first_name: name, phone }),
      })
      if (!res.ok) throw new Error()
      setShowThanks(true)
      setService("")
      setWhen("")
      setName("")
      setPhone("")
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative z-20 px-4 md:px-6 pb-8 md:pb-12 bg-section-alt">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden -translate-y-12 md:-translate-y-16">
        <div className="px-5 md:px-10 pt-5 md:pt-7 pb-5 md:pb-6">

          <p className="text-xs font-bold uppercase tracking-widest text-[#1e1e1e]/60 mb-6">
            Obtenez votre devis gratuit<span className="hidden md:inline"> —</span><br className="md:hidden" /> Rappel immédiat
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3 items-end">

            <div className="flex flex-col gap-1.5">
              <Label className="text-[#1e1e1e]/60">Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir…" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-[#1e1e1e]/60">Quand&nbsp;?</Label>
              <Select value={when} onValueChange={setWhen}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir…" />
                </SelectTrigger>
                <SelectContent>
                  {whenOptions.map((w) => (
                    <SelectItem key={w} value={w}>{w}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-[#1e1e1e]/60">Prénom</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre prénom"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-[#1e1e1e]/60">Téléphone</Label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Votre numéro"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-transparent select-none hidden lg:block">—</Label>
              <Button
                onClick={handleSubmit}
                disabled={!isValid || submitting}
                className="h-11 rounded-xl whitespace-nowrap font-bold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed px-6"
              >
                {submitting ? "Envoi…" : "Devis gratuit"}
                <ChevronRight size={14} />
              </Button>
            </div>

          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium mt-4">
              Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
            </p>
          )}
        </div>
      </div>

      <Dialog open={showThanks} onOpenChange={setShowThanks}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-1">
              <HeartIcon />
            </div>
            <DialogTitle>Merci pour votre confiance !</DialogTitle>
            <DialogDescription>
              Votre demande a bien été reçue. Notre équipe vous rappelle très rapidement pour organiser votre intervention.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowThanks(false)} className="rounded-full font-bold mt-2 w-full">
            Parfait !
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
