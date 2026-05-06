"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ABOUT_IMAGE } from "@/lib/menuData"

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <p className="text-[11px] tracking-[0.32em] uppercase text-tropical mb-5">
            Our Story
          </p>
          <h2 className="display text-6xl md:text-7xl uppercase leading-[0.9] text-ink">
            About
            <br />
            <span className="text-coral">PhoBar.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink/80 font-serif">
            PhoBar is a Vietnamese restaurant that serves contemporary cuisine
            with a focus on phở, a rich rice noodle soup that is ubiquitous in
            Vietnam.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80 font-serif">
            Incorporating thoughtful sourcing, quality ingredients, and refined
            culinary techniques to further amplify the bold flavors of Vietnam,
            the team aims to bring further awareness to the depth and
            complexity of the country&apos;s culinary traditions.
          </p>
          <div className="mt-10 flex items-center gap-4 text-[11px] tracking-[0.28em] uppercase">
            <span className="h-px w-10 bg-tropical" />
            <span className="text-tropical">Park Slope · Brooklyn</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden">
            <Image
              src={ABOUT_IMAGE}
              alt="Overhead spread of Vietnamese dishes — spring rolls, bánh mì, egg rolls, and crawfish on a wood table"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden
            className="palm-bg hidden md:block absolute -bottom-6 -right-6 w-40 h-40 rounded"
          />
        </motion.div>
      </div>
    </section>
  )
}
