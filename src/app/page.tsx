import Hero from "@/components/Hero"
import QuoteForm from "@/components/QuoteForm"
import About from "@/components/About"
import Services from "@/components/Services"
import Bricolage from "@/components/Bricolage"
import HowItWorks from "@/components/HowItWorks"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <QuoteForm />
      <About />
      <Services />
      <Bricolage />
      <HowItWorks />
      <FAQ />
      <Newsletter />
    </main>
  )
}
