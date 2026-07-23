import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import CTA from "@/components/CTA"

const categories = [
  {
    category: "Réservation & Disponibilité",
    items: [
      {
        question: "Comment réserver une prestation",
        answer:
          "Entrez votre ville ou code postal sur la page d'accueil, sélectionnez votre formule et choisissez un créneau. La confirmation est immédiate par e-mail.",
      },
      {
        question: "Quelles zones géographiques couvrez-vous",
        answer:
          "Nous intervenons dans toute la région et ses environs. Vérifiez la disponibilité dans votre secteur directement depuis la page d'accueil.",
      },
      {
        question: "Puis-je réserver pour le même jour",
        answer:
          "Oui, sous réserve de disponibilité. Les réservations le jour même sont possibles jusqu'à 10h du matin pour une intervention l'après-midi.",
      },
      {
        question: "Comment puis-je modifier ou annuler ma réservation",
        answer:
          "Vous pouvez modifier ou annuler gratuitement jusqu'à 24 h avant l'intervention, par téléphone ou via votre espace client en ligne.",
      },
    ],
  },
  {
    category: "Nos Services",
    items: [
      {
        question: "Quels types de nettoyage proposez-vous",
        answer:
          "Nous proposons le nettoyage de bureaux, le nettoyage en profondeur, le nettoyage après travaux et le nettoyage de vitres. Chaque formule est adaptable à vos besoins.",
      },
      {
        question: "Combien de temps dure une intervention",
        answer:
          "La durée dépend de la taille du logement et de la formule choisie. En moyenne, comptez 2 à 4 heures pour un appartement standard.",
      },
      {
        question: "Proposez-vous des forfaits récurrents",
        answer:
          "Oui ! Nous proposons des formules hebdomadaires, bimensuelles et mensuelles avec des tarifs préférentiels. Plus c'est régulier, plus vous économisez.",
      },
      {
        question: "Intervenez-vous le week-end",
        answer:
          "Oui, nos équipes interviennent du lundi au samedi. Les créneaux du dimanche sont disponibles sur demande pour certaines formules.",
      },
    ],
  },
  {
    category: "Équipe & Confiance",
    items: [
      {
        question: "Dois-je être présent lors du nettoyage",
        answer:
          "Non, votre présence n'est pas obligatoire. Beaucoup de nos clients nous confient une clé ou un code d'accès. Nos équipes sont fiables, formées et assurées.",
      },
      {
        question: "Vos agents sont-ils vérifiés et assurés",
        answer:
          "Absolument. Chaque professionnel Roka Clean est soigneusement sélectionné, formé et couvert par notre assurance responsabilité civile.",
      },
      {
        question: "Les mêmes agents reviennent-ils à chaque fois",
        answer:
          "Nous faisons notre possible pour vous attribuer la même équipe à chaque intervention afin d'assurer un suivi personnalisé.",
      },
    ],
  },
  {
    category: "Produits & Environnement",
    items: [
      {
        question: "Quels produits utilisez-vous",
        answer:
          "Nous utilisons exclusivement des produits écologiques, sans danger pour votre famille, vos animaux et l'environnement — sans compromis sur l'efficacité.",
      },
      {
        question: "Puis-je fournir mes propres produits",
        answer:
          "Oui, si vous préférez des produits spécifiques, faites-le nous savoir lors de la réservation et notre équipe les utilisera.",
      },
    ],
  },
  {
    category: "Tarifs & Satisfaction",
    items: [
      {
        question: "Comment sont calculés les tarifs",
        answer:
          "Nos tarifs dépendent de la taille de votre espace, de la formule choisie et de la fréquence. Obtenez un devis instantané sur notre page d'accueil.",
      },
      {
        question: "Quels modes de paiement acceptez-vous",
        answer:
          "Nous acceptons les cartes bancaires, le virement et les chèques emploi service (CESU) pour les particuliers.",
      },
      {
        question: "Que se passe-t-il si je ne suis pas satisfait",
        answer:
          "Votre satisfaction est notre priorité. Si vous n'êtes pas pleinement satisfait, nous revenons gratuitement dans les 48 h pour corriger le problème.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero banner */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/faq_header_bg.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5 mb-4">
            Centre d'aide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-md mx-auto">
            Tout ce que vous devez savoir avant de réserver votre nettoyage. Vous ne trouvez pas la réponse Appelez-nous.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 flex flex-col gap-14">
          {categories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-lg font-bold text-primary mb-6 pb-3 border-b border-[#DDE3E8]">
                {cat.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {cat.items.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.category}-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Vous avez encore des questions"
        subtitle="Notre équipe est disponible pour vous répondre du lundi au samedi, de 8h à 19h."
      />

    </main>
  )
}
