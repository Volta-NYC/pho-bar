"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { LOGO, ORDER_URL } from "@/lib/menuData"

const LEFT = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
]
const RIGHT = [
  { label: "Locations + Hours", href: "#locations" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 grid grid-cols-3 items-center">
        <ul className="hidden md:flex gap-7 text-[11px] tracking-[0.22em] uppercase text-ink/80 items-center">
          {LEFT.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-coral transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-tropical text-cream hover:bg-tropical-deep transition-colors"
            >
              Order Online
            </a>
          </li>
        </ul>

        <div className="col-start-2 flex justify-center">
          <Link href="#top" className="block">
            <Image
              src={LOGO}
              alt="PhoBar"
              width={180}
              height={56}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>

        <ul className="hidden md:flex gap-7 text-[11px] tracking-[0.22em] uppercase text-ink/80 justify-end">
          {RIGHT.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-coral transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden col-start-3 justify-self-end p-2"
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-tropical-deep text-cream md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-cream text-4xl leading-none"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col items-center gap-6 mt-8 display text-4xl">
              {[...LEFT, ...RIGHT].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="tracking-[0.18em] uppercase hover:text-coral"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-[0.18em] uppercase text-amber-brand"
                >
                  Order Online ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
