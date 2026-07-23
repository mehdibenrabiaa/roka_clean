import type { Metadata } from "next"
import Image from "next/image"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Roka Clean",
  description: "Découvrez comment Roka Clean collecte, utilise et protège vos données personnelles conformément au RGPD.",
}

const sections = [
  {
    title: "1. Introduction",
    content: `Roka Clean (ci-après « nous », « notre » ou « la Société ») s'engage à protéger la vie privée de ses utilisateurs. La présente Politique de Confidentialité décrit la manière dont nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos services.

En accédant à notre site ou en utilisant nos services, vous acceptez les pratiques décrites dans cette politique.`,
  },
  {
    title: "2. Données collectées",
    content: `Nous pouvons collecter les catégories de données suivantes :

• Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone.
• Données de contact : adresse postale, ville, code postal.
• Données de navigation : adresse IP, type de navigateur, pages visitées, durée de la visite (via cookies).
• Données de transaction : informations relatives aux réservations et aux paiements.

Ces données sont collectées lorsque vous remplissez un formulaire, créez un compte, effectuez une réservation ou nous contactez directement.`,
  },
  {
    title: "3. Utilisation des données",
    content: `Vos données personnelles sont utilisées aux fins suivantes :

• Traiter et gérer vos réservations de services de nettoyage.
• Vous contacter pour confirmer vos rendez-vous ou répondre à vos demandes.
• Vous envoyer des communications commerciales si vous y avez consenti.
• Améliorer notre site web et la qualité de nos services.
• Respecter nos obligations légales et réglementaires.`,
  },
  {
    title: "4. Base légale du traitement",
    content: `Le traitement de vos données repose sur les bases légales suivantes :

• Exécution d'un contrat : traitement nécessaire à la réalisation de vos réservations.
• Consentement : pour l'envoi de communications marketing et l'utilisation de cookies non essentiels.
• Intérêt légitime : amélioration de nos services et prévention de la fraude.
• Obligation légale : conservation des données comptables et fiscales.`,
  },
  {
    title: "5. Cookies",
    content: `Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.

Nous utilisons :
• Cookies essentiels : nécessaires au bon fonctionnement du site (ne nécessitent pas de consentement).
• Cookies analytiques : pour analyser le trafic et améliorer nos pages (Google Analytics).
• Cookies marketing : pour personnaliser les publicités (uniquement avec votre consentement).

Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.`,
  },
  {
    title: "6. Partage des données",
    content: `Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons les partager avec :

• Nos prestataires de services (hébergement, paiement, e-mail) dans le cadre strict de l'exécution de nos prestations.
• Les autorités compétentes lorsque la loi l'exige.

Tout sous-traitant est soumis à des obligations de confidentialité strictes et ne peut utiliser vos données qu'aux fins pour lesquelles elles ont été partagées.`,
  },
  {
    title: "7. Durée de conservation",
    content: `Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :

• Données clients : 3 ans à compter de la dernière interaction.
• Données de transaction : 10 ans (obligation légale comptable).
• Données marketing : jusqu'au retrait de votre consentement ou 3 ans d'inactivité.
• Données de navigation (cookies) : 13 mois maximum.`,
  },
  {
    title: "8. Vos droits (RGPD)",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :

• Droit d'accès : obtenir une copie de vos données personnelles.
• Droit de rectification : corriger des données inexactes ou incomplètes.
• Droit à l'effacement : demander la suppression de vos données.
• Droit d'opposition : vous opposer au traitement de vos données à des fins marketing.
• Droit à la portabilité : recevoir vos données dans un format structuré.
• Droit à la limitation : restreindre temporairement le traitement de vos données.

Pour exercer ces droits, contactez-nous à : contact@rokaclean.fr`,
  },
  {
    title: "9. Sécurité des données",
    content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération. Cela inclut le chiffrement des données sensibles, des accès restreints et des audits réguliers de sécurité.`,
  },
  {
    title: "10. Modifications de la politique",
    content: `Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.

Dernière mise à jour : juin 2026`,
  },
  {
    title: "11. Contact",
    content: `Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez nous contacter :

• E-mail : contact@rokaclean.fr
• Téléphone : +33 6 76 34 44 68
• Adresse : 17 Rue Léon Blum, 94350 Villiers-sur-Marne

Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr`,
  },
]

export default function ConfidentialitePage() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Chez Roka Clean, la protection de vos données personnelles est une priorité absolue.
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
        title="Une question sur vos données ?"
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions relatives à la confidentialité, du lundi au samedi de 8h à 19h."
        primaryLabel="Nous écrire"
        primaryHref="mailto:contact@rokaclean.fr"
      />

    </main>
  )
}
