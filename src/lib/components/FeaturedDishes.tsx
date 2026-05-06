"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HERO_IMAGES, INTERIOR_IMAGE, NEON_IMAGE } from "@/lib/menuData"

const DISHES = [
  {
    name: "Saigon Phở",
    price: "$16.95",
    note: "Thinly sliced beef · beef balls · house brisket",
    image: HERO_IMAGES[3].src,
  },
  {
    name: "Spicy Short Rib Phở",
    price: "$23.95",
    note: "Slow-braised short rib in a fiery, fragrant broth",
    image: INTERIOR_IMAGE,
  },
  {
    name: "Bún Bò Huế",
    price: "$17.95",
    note: "Brisket · ham · beef shank · lemongrass heat",
    image: HERO_IMAGES[2].src,
  },
]

export default function FeaturedDishes() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] palm-bg"
        style={{ backgroundSize: "260px auto" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-amber-brand mb-4">
              Signature Dishes
            </p>
            <h2 className="display text-6xl md:text-8xl uppercase leading-[0.9]">
              Crazy <span className="text-amber-brand neon-glow">Rich</span>
              <br />
              Broth.
            </h2>
          </div>
          <div className="md:max-w-sm">
            <Image
              src={NEON_IMAGE}
              alt="Yellow Crazy neon sign"
              width={420}
              height={260}
              className="w-full h-auto object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {DISHES.map((d, idx) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="display text-3xl md:text-4xl uppercase leading-none">
                    {d.name}
                  </h3>
                  <span className="display text-2xl text-amber-brand">
                    {d.price}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-cream/75 font-serif italic">
                {d.note}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#menu"
            className="px-7 py-4 border border-amber-brand text-amber-brand tracking-[0.28em] uppercase text-xs hover:bg-amber-brand hover:text-ink transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
