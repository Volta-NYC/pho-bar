"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { HERO_IMAGES, ORDER_URL } from "@/lib/menuData"
import PalmStrip from "./PalmStrip"

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative bg-cream">
      <PalmStrip height="h-10 md:h-14" className="mt-20" />

      <div className="bg-tropical text-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] md:text-sm tracking-[0.18em] uppercase">
            Free Delivery <span className="opacity-80 normal-case tracking-normal">— up to 5 miles, on orders above $30</span>
          </p>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.22em] uppercase border border-cream/80 px-4 py-2 rounded-full hover:bg-cream hover:text-tropical-deep transition-colors"
          >
            Order Online ↗
          </a>
        </div>
      </div>

      <div className="relative h-[78vh] md:h-[88vh] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[i].src}
              alt={HERO_IMAGES[i].alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-end pb-16 md:pb-24">
          <div className="text-cream max-w-2xl">
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase opacity-90 mb-4">
              Brooklyn · Park Slope
            </p>
            <h1 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase">
              Crazy Rich
              <br />
              <span className="text-amber-brand neon-glow animate-neon-flicker">Broth.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-md font-serif text-cream/95">
              Contemporary Vietnamese cooking — phở, bánh mì, and rice bowls
              built on slow-simmered broth and bold, bright flavor.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#menu"
                className="px-5 py-3 bg-coral text-cream tracking-[0.2em] uppercase text-xs hover:bg-coral/90 transition-colors"
              >
                See the Menu
              </a>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-cream/80 tracking-[0.2em] uppercase text-xs hover:bg-cream hover:text-ink transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 md:right-8 flex gap-2 z-10">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show photo ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-cream" : "w-4 bg-cream/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
