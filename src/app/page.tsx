import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <About />
      <Services />
    </main>
  )
}
