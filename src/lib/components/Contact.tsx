"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { INSTAGRAM, PHONE } from "@/lib/menuData"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <p className="text-[11px] tracking-[0.32em] uppercase text-tropical mb-4">
            Say Hello
          </p>
          <h2 className="display text-6xl md:text-7xl uppercase leading-[0.9]">
            Stay in
            <br />
            <span className="text-coral">touch.</span>
          </h2>
          <p className="mt-6 text-lg font-serif italic text-ink/75 max-w-md">
            We&apos;d love to hear from you! Feedback from our customers is
            <em> pho-nomenal</em> (we couldn&apos;t help ourselves).
          </p>

          <dl className="mt-10 space-y-4 font-serif">
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Phone
              </dt>
              <dd className="text-lg">
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="hover:text-coral">
                  {PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Instagram
              </dt>
              <dd className="text-lg">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-coral">
                  @phobarnyc
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.28em] uppercase text-ink/55">
                Press
              </dt>
              <dd className="text-lg">
                <a href="mailto:phobarnyc@gmail.com" className="hover:text-coral">
                  phobarnyc@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="md:col-span-7 bg-cream-soft p-8 md:p-10 border border-ink/10"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] tracking-[0.28em] uppercase text-ink/60 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-ink/30 py-3 text-lg focus:outline-none focus:border-tropical"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.28em] uppercase text-ink/60 mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border-b border-ink/30 py-3 text-lg focus:outline-none focus:border-tropical resize-none"
                placeholder="Tell us anything…"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-4 bg-tropical text-cream tracking-[0.28em] uppercase text-xs hover:bg-tropical-deep transition-colors"
            >
              {sent ? "Sent — cảm ơn!" : "Submit"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
