"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const services = [
  {
    title: "Nettoyage de Bureau",
    description: "Maintenez votre espace de travail propre et sain pour une productivité optimale.",
    image: "/office_cleaning.webp",
  },
  {
    title: "Nettoyage en Profondeur",
    description: "Un nettoyage intensif des cuisines, salles de bains et zones difficiles d'accès.",
    image: "/deep cleaning.webp",
  },
  {
    title: "Nettoyage après Travaux",
    description: "Elimination complète des poussières et résidus après rénovation ou construction.",
    image: "/Post-renovation cleaning.webp",
  },
  {
    title: "Nettoyage de Vitres",
    description: "Des vitres cristallines à l'intérieur comme à l'extérieur, en toute sécurité.",
    image: "/glass cleaning.webp",
  },
]

export default function Services() {
  const [api, setApi] = useState<CarouselApi>()
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback((api: CarouselApi) => {
    if (!api) return
    setProgress(api.scrollProgress())
  }, [])

  useEffect(() => {
    if (!api) return
    onScroll(api)
    api.on("scroll", onScroll)
    api.on("reInit", onScroll)
    return () => { api.off("scroll", onScroll) }
  }, [api, onScroll])

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            La Fraîcheur Commence avec Roka Clean
          </h2>
          <p className="text-sm md:text-base text-[#1e1e1e]/70 max-w-md mx-auto">
            Du nettoyage hebdomadaire au grand ménage, nos experts apportent
            propreté et soin à chaque espace.
          </p>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-10 md:hidden">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col">
              <div className="relative rounded-2xl overflow-hidden h-[280px] bg-[#DDE3E8]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-bold text-[#1e1e1e] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="hidden md:block w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group flex flex-col">

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden h-[320px] bg-[#DDE3E8]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover CTA overlay */}
                    <div className="absolute inset-0 bg-[#1e1e1e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="default" className="rounded-full cursor-pointer gap-2 font-bold">
                        Réserver <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pt-5">
                    <h3 className="font-bold text-[#1e1e1e] text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-[#1e1e1e]/70 leading-relaxed">{service.description}</p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Progress bar + arrows */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex-1 h-[3px] rounded-full bg-[#DDE3E8] overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-150 ease-out"
                style={{ width: `${Math.min(progress * 100, 100)}%` }}
              />
            </div>
            <div className="flex gap-2 shrink-0">
              <CarouselPrevious className="static translate-y-0 border-[#DDE3E8] text-[#1e1e1e] hover:bg-[#216bee] hover:text-white hover:border-[#216bee]" />
              <CarouselNext className="static translate-y-0 border-[#DDE3E8] text-[#1e1e1e] hover:bg-[#216bee] hover:text-white hover:border-[#216bee]" />
            </div>
          </div>

        </Carousel>
      </div>
    </section>
  )
}
