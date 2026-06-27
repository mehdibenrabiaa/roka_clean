"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            La Fraîcheur Commence avec Roka Clean
          </h2>
          <p className="text-sm md:text-base text-[#1E3A5F]/70 max-w-md mx-auto">
            Du nettoyage hebdomadaire au grand ménage, nos experts apportent
            propreté et soin à chaque espace.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group flex flex-col">

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden h-[220px] bg-[#DDE3E8]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover CTA overlay */}
                    <div className="absolute inset-0 bg-[#1E3A5F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="rounded-full cursor-pointer gap-1 text-xs">
                        Réserver <ArrowRight size={12} />
                      </Button>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pt-5">
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-[#1E3A5F]/70 leading-relaxed">{service.description}</p>
                    {/* Underline accent */}
                    <div className="mt-4 w-10 h-[3px] rounded-full bg-[#6FA32E]" />
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mt-10">
            <CarouselPrevious className="static translate-y-0 border-[#DDE3E8] text-[#1E3A5F] hover:bg-[#216bee] hover:text-white hover:border-[#216bee]" />
            <CarouselNext className="static translate-y-0 border-[#DDE3E8] text-[#1E3A5F] hover:bg-[#216bee] hover:text-white hover:border-[#216bee]" />
          </div>

        </Carousel>
      </div>
    </section>
  )
}
