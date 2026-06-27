import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import HowItWorks from "@/components/HowItWorks"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <FAQ />
      <Newsletter />
    </main>
  )
}
