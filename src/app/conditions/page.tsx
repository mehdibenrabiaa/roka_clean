import type { Metadata } from "next"
import Image from "next/image"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Conditions d'Utilisation — Roka Clean",
  description: "Consultez les conditions générales d'utilisation des services Roka Clean.",
}

const sections = [
  {
    title: "1. Objet",
    content: `Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du site web de Roka Clean ainsi que les services de nettoyage proposés par la Société.

En accédant au site ou en réservant une prestation, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.`,
  },
  {
    title: "2. Présentation de la Société",
    content: `Roka Clean est une société spécialisée dans les services de nettoyage professionnels à destination des particuliers et des entreprises.

• Siège social : 17 Rue Léon Blum, 94350 Villiers-sur-Marne
• E-mail : contact@rokaclean.fr
• Téléphone : +33 6 76 34 44 68
• Horaires : Lundi – Samedi, 9h00 à 19h30`,
  },
  {
    title: "3. Accès au site",
    content: `Le site est accessible gratuitement à tout utilisateur disposant d'une connexion internet. Roka Clean se réserve le droit de suspendre, modifier ou interrompre l'accès au site à tout moment, sans préavis, notamment pour des raisons de maintenance ou de mise à jour.

Roka Clean ne saurait être tenu responsable de toute interruption du service ou de toute perte de données consécutive.`,
  },
  {
    title: "4. Réservation et commande",
    content: `Toute réservation effectuée sur notre site constitue un contrat de prestation de services entre Roka Clean et le client. Pour réserver :

• Sélectionnez le type de prestation souhaité.
• Choisissez une date et un créneau horaire disponible.
• Renseignez vos coordonnées et validez votre commande.

La confirmation de réservation vous est envoyée par e-mail dans les meilleurs délais. Roka Clean se réserve le droit de refuser ou d'annuler toute commande en cas d'indisponibilité ou de motif légitime.`,
  },
  {
    title: "5. Tarifs et paiement",
    content: `Roka Clean ne publie pas de tarifs fixes sur son site. Chaque prestation est estimée individuellement en fonction des besoins du client (surface, type de nettoyage, fréquence, etc.). Un devis personnalisé vous est communiqué par téléphone après échange avec notre équipe.

Le paiement peut être effectué par :
• Carte bancaire (Visa, Mastercard)
• Virement bancaire
• Chèque emploi-service universel (CESU)

Aucun paiement en espèces n'est accepté sur place.`,
  },
  {
    title: "6. Annulation et modification",
    content: `• Annulation gratuite : jusqu'à 24 heures avant l'intervention prévue.
• Annulation tardive : en cas d'annulation moins de 24 heures avant la prestation, des frais pouvant aller jusqu'à 50 % du montant de la prestation pourront être facturés.
• Modification : toute demande de modification doit être adressée par téléphone ou e-mail au moins 24 heures à l'avance.

En cas de force majeure (intempéries, grève, etc.), aucune pénalité ne sera appliquée.`,
  },
  {
    title: "7. Obligations du client",
    content: `Le client s'engage à :

• Fournir un accès libre et sécurisé aux locaux à nettoyer.
• Informer Roka Clean de toute condition particulière (animaux domestiques, matériaux fragiles, zones sensibles).
• S'assurer que les locaux sont accessibles aux horaires convenus.
• Ne pas demander aux intervenants d'effectuer des tâches non prévues dans la prestation réservée.`,
  },
  {
    title: "8. Responsabilité de Roka Clean",
    content: `Roka Clean s'engage à réaliser les prestations avec le soin et le professionnalisme attendus. En cas de dommage causé par nos intervenants lors d'une prestation, notre responsabilité est engagée dans les limites prévues par notre assurance professionnelle.

Toute réclamation doit être signalée dans les 48 heures suivant la prestation, par e-mail à contact@rokaclean.fr avec photos à l'appui.

Roka Clean ne saurait être tenu responsable des dommages indirects, pertes d'exploitation ou préjudices immatériels.`,
  },
  {
    title: "9. Propriété intellectuelle",
    content: `L'ensemble des contenus présents sur le site de Roka Clean (textes, images, logos, graphismes, etc.) est protégé par le droit de la propriété intellectuelle et reste la propriété exclusive de Roka Clean.

Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite de Roka Clean est strictement interdite.`,
  },
  {
    title: "10. Données personnelles",
    content: `La collecte et le traitement de vos données personnelles sont régis par notre Politique de Confidentialité, disponible à l'adresse suivante : /confidentialite

Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.`,
  },
  {
    title: "11. Droit applicable et litiges",
    content: `Les présentes CGU sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire.

À défaut d'accord amiable, tout litige sera soumis à la compétence exclusive des tribunaux français. Le consommateur peut également recourir à un médiateur agréé conformément à la réglementation en vigueur.`,
  },
  {
    title: "12. Modifications des CGU",
    content: `Roka Clean se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il appartient à l'utilisateur de consulter régulièrement cette page.

Dernière mise à jour : juin 2026`,
  },
]

export default function ConditionsPage() {
  return (
    <main>

      {/* Header */}
      <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/confidentialite.webp" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block text-xs font-semibold text-white bg-white/20 rounded-full px-4 py-1.5 mb-4">
            Juridique
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Conditions d&apos;Utilisation
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Veuillez lire attentivement les présentes conditions avant d&apos;utiliser nos services.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg md:text-xl font-bold text-[#1e1e1e] mb-3">{s.title}</h2>
                <p className="text-sm md:text-base text-[#1e1e1e]/70 leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA
        title="Une question sur nos conditions ?"
        subtitle="Notre équipe est disponible du lundi au samedi de 8h à 19h pour répondre à toutes vos questions."
        primaryLabel="Nous écrire"
        primaryHref="mailto:contact@rokaclean.fr"
      />

    </main>
  )
}
