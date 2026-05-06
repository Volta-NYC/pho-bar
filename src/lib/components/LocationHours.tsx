"use client"

import { motion } from "framer-motion"
import { ADDRESS, HOURS, PHONE, ORDER_URL } from "@/lib/menuData"

export default function LocationHours() {
  return (
    <section id="locations" className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-[11px] tracking-[0.32em] uppercase text-tropical mb-5">
            Visit Us
          </p>
          <h2 className="display text-6xl md:text-7xl uppercase leading-[0.9] text-ink">
            Locations
            <br />
            <span className="text-coral">+ Hours.</span>
          </h2>

          <dl className="mt-10 space-y-6 font-serif">
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Address
              </dt>
              <dd className="mt-1 text-xl">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Hours
              </dt>
              <dd className="mt-1 text-xl">{HOURS}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Phone
              </dt>
              <dd className="mt-1 text-xl">
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="hover:text-coral">
                  {PHONE}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex gap-3">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-tropical text-cream tracking-[0.22em] uppercase text-xs hover:bg-tropical-deep transition-colors"
            >
              Order Online
            </a>
            <a
              href="https://maps.google.com/?q=80+6th+Avenue+Brooklyn+NY+11217"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-ink tracking-[0.22em] uppercase text-xs hover:bg-ink hover:text-cream transition-colors"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-auto md:min-h-[480px] overflow-hidden border border-ink/10"
        >
          <iframe
            title="PhoBar location map"
            src="https://www.google.com/maps?q=80%206th%20Avenue%2C%20Brooklyn%2C%20NY%2011217&output=embed"
            className="absolute inset-0 w-full h-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
