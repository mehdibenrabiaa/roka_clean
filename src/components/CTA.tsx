import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

type CTAProps = {
  title: string
  subtitle: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTA({
  title,
  subtitle,
  primaryLabel = "Réserver maintenant",
  primaryHref = "/",
  secondaryLabel = "Nous appeler",
  secondaryHref = "tel:+33676344468",
}: CTAProps) {
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-3">
          {title}
        </h2>
        <p className="text-sm text-[#1e1e1e]/75 max-w-sm mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full font-bold">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full font-bold gap-2">
            <Link href={secondaryHref}>
              <Phone size={16} /> {secondaryLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
