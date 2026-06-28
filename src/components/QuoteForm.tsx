"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
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

const serviceOptions = [
  "Nettoyage de Bureau",
  "Nettoyage en Profondeur",
  "Nettoyage après Travaux",
  "Nettoyage de Vitres",
]

const whenOptions = [
  "Dès que possible",
  "Cette semaine",
  "La semaine prochaine",
  "Ce mois-ci",
  "Date flexible",
]

const PHONE = "+33100000000"

export default function QuoteForm() {
  const [service, setService] = useState("")
  const [when, setWhen] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const isValid = service && when && name && phone

  const handleCall = () => {
    if (!isValid) return
    window.location.href = `tel:${PHONE}`
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
              <Select onValueChange={setService}>
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
              <Select onValueChange={setWhen}>
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
                onClick={handleCall}
                disabled={!isValid}
                className="h-11 rounded-xl whitespace-nowrap font-bold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed px-6"
              >
                <Phone size={14} />
                Devis gratuit
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
