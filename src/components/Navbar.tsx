"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Témoignages", href: "/testimonials" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 flex flex-col items-center">
      <nav className="w-full max-w-6xl bg-white rounded-full px-[6px] py-3 md:py-[5px] flex items-center justify-between shadow-md">

        {/* Logo */}
        <Link href="/" className="flex items-center ml-4">
          <Image
            src="/logo.svg"
            alt="Roka Clean"
            width={140}
            height={38}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#1E3A5F] hover:text-[#216bee] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button className="hidden md:inline-flex rounded-full" size="default">
          Contactez-nous
        </Button>

        {/* Mobile — phone CTA + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Button className="rounded-full px-5 h-9 flex items-center gap-2" size="sm">
            <Phone size={14} />
            <span className="text-sm font-semibold">Appeler</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full text-[#1E3A5F] hover:text-[#216bee] transition-colors cursor-pointer"
                aria-label="Ouvrir le menu"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-full flex flex-col pt-10">
              <SheetTitle className="sr-only">Menu</SheetTitle>

              {/* Logo inside drawer */}
              <div className="mb-8 px-2">
                <Image
                  src="/logo.svg"
                  alt="Roka Clean"
                  width={200}
                  height={55}
                  className="object-contain"
                />
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-[#1E3A5F] hover:text-[#216bee] transition-colors px-2 py-3 mr-4 rounded-none hover:bg-[#EAF0E6] border-b border-[#DDE3E8]"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="mt-auto pt-6">
                <Button className="rounded-full w-full cursor-pointer" size="default">
                  Contactez-nous
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>

    </header>
  )
}
