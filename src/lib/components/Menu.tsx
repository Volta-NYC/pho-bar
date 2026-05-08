"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { menu, MENU_BANNER_IMAGE } from "@/lib/menuData"

export default function Menu() {
  const [active, setActive] = useState(menu[0].id)
  const tabsRef = useRef<HTMLDivElement>(null)
  const hasHydrated = useRef(false)

  // keep active tab visible in horizontal scroller on mobile
  useEffect(() => {
    if (!hasHydrated.current) {
      hasHydrated.current = true
      return
    }

    const el = tabsRef.current?.querySelector<HTMLButtonElement>(
      `button[data-id="${active}"]`,
    )
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [active])

  const cat = menu.find((c) => c.id === active) ?? menu[0]

  return (
    <section id="menu" className="bg-cream-soft">
      <div className="relative h-[34vh] md:h-[44vh] overflow-hidden">
        <Image
          src={MENU_BANNER_IMAGE}
          alt="Overhead spread of rice bowls, phở, and vegetables"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="display text-7xl md:text-[9rem] uppercase text-cream leading-none">
            Menu
          </h2>
        </div>
      </div>

      <div className="sticky top-20 z-30 bg-cream-soft/95 backdrop-blur border-b border-ink/10">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-4 md:px-8 flex gap-1 md:gap-2 overflow-x-auto hide-scrollbar"
        >
          {menu.map((c) => {
            const isActive = c.id === active
            return (
              <button
                key={c.id}
                data-id={c.id}
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 px-4 md:px-5 py-4 text-[11px] tracking-[0.22em] uppercase transition-colors ${
                  isActive ? "text-tropical-deep" : "text-ink/55 hover:text-ink"
                }`}
              >
                {c.label}
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    className="absolute left-3 right-3 -bottom-px h-[3px] bg-coral rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-10 md:mb-12">
              <h3 className="display text-5xl md:text-6xl uppercase text-tropical-deep">
                {cat.label}
              </h3>
              {cat.note && (
                <p className="mt-4 italic text-ink/70 font-serif max-w-3xl">
                  {cat.note}
                </p>
              )}
            </div>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className={`flex gap-6 pb-6 border-b ${
                    item.signature
                      ? "border-amber-brand/60"
                      : "border-ink/10"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {item.signature && (
                        <span className="text-amber-brand text-sm" aria-hidden>
                          ★
                        </span>
                      )}
                      <h4 className="display text-2xl uppercase tracking-wide text-ink">
                        {item.name}
                      </h4>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-ink/70 font-serif text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="display text-xl text-amber-brand whitespace-nowrap pt-1">
                    {item.price}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
