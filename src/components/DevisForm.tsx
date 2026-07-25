"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
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

const jobTypeOptions = ["Nettoyage", "Bricolage"]

const categoryOptionsByType: Record<string, string[]> = {
  Nettoyage: [
    "Nettoyage de Bureau",
    "Nettoyage en Profondeur",
    "Nettoyage après Travaux",
    "Nettoyage de Vitres et Facades",
    "Nettoyage de Contenaires",
    "Bio Nettoyage",
    "Bio Nettoyage Médical",
  ],
  Bricolage: [
    "Montage de Meubles",
    "Petite Plomberie",
    "Petite Électricité",
    "Peinture & Finitions",
    "Fixation & Pose",
    "Petites Réparations",
  ],
}

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

const API_URL = process.env.NEXT_PUBLIC_API_URL

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

export default function DevisForm() {
  const searchParams = useSearchParams()
  const paramType = searchParams.get("type") || ""
  const initialJobType = jobTypeOptions.includes(paramType) ? paramType : ""
  const paramCategory = searchParams.get("category") || ""
  const initialCategory = categoryOptionsByType[initialJobType]?.includes(paramCategory) ? paramCategory : ""

  const [jobType, setJobType] = useState(initialJobType)
  const [category, setCategory] = useState(initialCategory)
  const [service, setService] = useState("")
  const [when, setWhen] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [error, setError] = useState(false)

  const isValid = jobType && category && service && when && name && phone

  function handleJobTypeChange(value: string) {
    setJobType(value)
    setCategory("")
  }

  const handleSubmit = async () => {
    if (!isValid) return
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch(`${API_URL}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: jobType, category, service, timing: when, first_name: name, phone }),
      })
      if (!res.ok) throw new Error()
      setShowThanks(true)
      setJobType("")
      setCategory("")
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
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full">
      <p className="text-xs font-bold uppercase tracking-widest text-[#1e1e1e]/70 mb-6">
        Vos coordonnées — Réponse sous 24h
      </p>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-[#1e1e1e]/70">Type de prestation</Label>
            <Select value={jobType} onValueChange={handleJobTypeChange}>
              <SelectTrigger aria-label="Type de prestation" className="w-full">
                <SelectValue placeholder="Choisir…" />
              </SelectTrigger>
              <SelectContent>
                {jobTypeOptions.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className="text-[#1e1e1e]/70">Catégorie</Label>
            <Select value={category} onValueChange={setCategory} disabled={!jobType}>
              <SelectTrigger aria-label="Catégorie" className="w-full">
                <SelectValue placeholder={jobType ? "Choisir…" : "Choisissez d'abord un type"} />
              </SelectTrigger>
              <SelectContent>
                {(categoryOptionsByType[jobType] || []).map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-[#1e1e1e]/70">Service</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger aria-label="Service" className="w-full">
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
            <Label className="text-[#1e1e1e]/70">Quand&nbsp;?</Label>
            <Select value={when} onValueChange={setWhen}>
              <SelectTrigger aria-label="Quand" className="w-full">
                <SelectValue placeholder="Choisir…" />
              </SelectTrigger>
              <SelectContent>
                {whenOptions.map((w) => (
                  <SelectItem key={w} value={w}>{w}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-[#1e1e1e]/70">Prénom</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre prénom"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className="text-[#1e1e1e]/70">Téléphone</Label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Votre numéro"
            />
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!isValid || submitting}
          className="h-12 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
        >
          {submitting ? "Envoi…" : "Recevoir mon devis gratuit"}
          <ChevronRight size={16} />
        </Button>

        {error && (
          <p className="text-sm text-red-600 font-medium">
            Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
          </p>
        )}

        <p className="text-xs text-[#1e1e1e]/50 text-center">
          Sans engagement — vos informations ne sont utilisées que pour vous recontacter.
        </p>
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
