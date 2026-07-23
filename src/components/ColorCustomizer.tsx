"use client"

import { useEffect, useState } from "react"
import { Palette, X, RotateCcw } from "lucide-react"

const STORAGE_KEY = "roka-color-overrides"

const swatches: { label: string; cssVar: string; hint: string; group: string }[] = [
  { label: "Primaire", cssVar: "--color-primary", hint: "Boutons, liens, accents principaux", group: "Marque" },
  { label: "Primaire (survol)", cssVar: "--color-primary-dk", hint: "États hover / actifs", group: "Marque" },
  { label: "Départ", cssVar: "--gradient-start", hint: "Dégradé — section \"Comment ça marche\"", group: "Section « Comment Roka Clean... »" },
  { label: "Arrivée", cssVar: "--gradient-end", hint: "Dégradé — section \"Comment ça marche\"", group: "Section « Comment Roka Clean... »" },
]

const groups = [...new Set(swatches.map((s) => s.group))]

export default function ColorCustomizer() {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const root = document.documentElement
    const saved = localStorage.getItem(STORAGE_KEY)
    const overrides: Record<string, string> = saved ? JSON.parse(saved) : {}

    const initial: Record<string, string> = {}
    swatches.forEach(({ cssVar }) => {
      const value =
        overrides[cssVar] ?? getComputedStyle(root).getPropertyValue(cssVar).trim()
      initial[cssVar] = value
      if (overrides[cssVar]) root.style.setProperty(cssVar, overrides[cssVar])
    })
    setValues(initial)
  }, [])

  function handleChange(cssVar: string, value: string) {
    document.documentElement.style.setProperty(cssVar, value)
    setValues((prev) => {
      const next = { ...prev, [cssVar]: value }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  function handleReset() {
    const root = document.documentElement
    swatches.forEach(({ cssVar }) => root.style.removeProperty(cssVar))
    localStorage.removeItem(STORAGE_KEY)

    const initial: Record<string, string> = {}
    swatches.forEach(({ cssVar }) => {
      initial[cssVar] = getComputedStyle(root).getPropertyValue(cssVar).trim()
    })
    setValues(initial)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-xl border border-[#DDE3E8] p-5">
          <div className="flex items-center justify-between mb-1">
            <p className="font-bold text-[#1e1e1e] text-sm">Personnaliser les couleurs</p>
            <button
              onClick={() => setOpen(false)}
              className="text-[#1e1e1e]/50 hover:text-[#1e1e1e] cursor-pointer"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-[#1e1e1e]/60 mb-4">
            Panneau temporaire — pour prévisualiser une palette avant de l&apos;appliquer dans le code.
          </p>

          <div className="flex flex-col gap-5">
            {groups.map((group) => (
              <div key={group} className="flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#1e1e1e]/40">{group}</p>
                {swatches
                  .filter((s) => s.group === group)
                  .map(({ label, cssVar, hint }) => (
                    <label key={cssVar} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="color"
                        value={values[cssVar] || "#000000"}
                        onChange={(e) => handleChange(cssVar, e.target.value)}
                        className="w-9 h-9 rounded-lg border border-[#DDE3E8] cursor-pointer shrink-0 p-0.5 bg-white"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-[#1e1e1e]">{label}</span>
                        <span className="text-[11px] text-[#1e1e1e]/50">{hint}</span>
                      </span>
                    </label>
                  ))}
              </div>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold text-[#1e1e1e]/70 hover:text-[#1e1e1e] border border-[#DDE3E8] rounded-full py-2 cursor-pointer transition-colors"
          >
            <RotateCcw size={13} /> Réinitialiser
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center cursor-pointer hover:brightness-110 transition-all"
        aria-label="Personnaliser les couleurs"
      >
        <Palette size={20} />
      </button>
    </div>
  )
}
