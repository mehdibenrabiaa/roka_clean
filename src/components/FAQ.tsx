"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer:
      "Nous intervenons dans toute la région et ses environs. Entrez votre code postal sur notre page d'accueil pour vérifier la disponibilité dans votre secteur.",
  },
  {
    question: "Dois-je être présent lors du nettoyage ?",
    answer:
      "Non, votre présence n'est pas obligatoire. Beaucoup de nos clients nous confient une clé ou un code d'accès. Nos équipes sont fiables et assurées.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Nous utilisons exclusivement des produits écologiques, sans danger pour votre famille, vos animaux et l'environnement, sans compromis sur l'efficacité.",
  },
  {
    question: "Comment puis-je modifier ou annuler ma réservation ?",
    answer:
      "Vous pouvez modifier ou annuler gratuitement jusqu'à 24 h avant l'intervention. Contactez-nous par téléphone ou via le formulaire en ligne.",
  },
  {
    question: "Proposez-vous des forfaits récurrents ?",
    answer:
      "Oui ! Nous proposons des formules hebdomadaires, bimensuelles et mensuelles avec des tarifs préférentiels. Plus c'est régulier, plus vous économisez.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "Votre satisfaction est notre priorité. Si vous n'êtes pas pleinement satisfait, nous revenons gratuitement dans les 48 h pour corriger le problème.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-sm md:text-base text-[#1e1e1e]/70 max-w-md mx-auto">
            Tout ce que vous devez savoir avant de réserver votre nettoyage.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
