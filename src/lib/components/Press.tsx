"use client"

import { motion } from "framer-motion"
import { INSTAGRAM } from "@/lib/menuData"

const QUOTES = [
  {
    quote:
      "A contemporary phở house with broth that earns every minute of its long simmer.",
    source: "Brooklyn Eats",
  },
  {
    quote: "The bánh mì might be the best in Park Slope — period.",
    source: "Time Out NY",
  },
  {
    quote: "Crazy rich broth lives up to the name. Order the Saigon.",
    source: "Eater Brooklyn",
  },
  {
    quote: "Bright, bold, and unapologetically Vietnamese.",
    source: "Resy Hit List",
  },
]

export default function Press() {
  return (
    <section id="press" className="bg-tropical-deep text-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-[11px] tracking-[0.32em] uppercase text-amber-brand mb-4">
          Press
        </p>
        <h2 className="display text-5xl md:text-6xl uppercase leading-[0.95]">
          What people are saying.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.source}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-t border-cream/15 pt-6"
            >
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-cream/95">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-4 text-[11px] tracking-[0.28em] uppercase text-amber-brand">
                — {q.source}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-cream/15 pt-10">
          <p className="display text-3xl uppercase tracking-wide">
            Follow on Instagram <span className="text-amber-brand">@phobarnyc</span>
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="self-start px-5 py-3 border border-cream tracking-[0.22em] uppercase text-xs hover:bg-cream hover:text-tropical-deep transition-colors"
          >
            Follow Us ↗
          </a>
        </div>
      </div>
    </section>
  )
}
