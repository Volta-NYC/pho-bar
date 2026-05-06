import Image from "next/image"
import {
  ADDRESS,
  FACEBOOK,
  HOURS,
  INSTAGRAM,
  LOGO,
  ORDER_URL,
  PHONE,
  YELP,
} from "@/lib/menuData"

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <PalmStrip height="h-8" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Image
            src={LOGO}
            alt="PhoBar"
            width={200}
            height={64}
            className="h-14 w-auto invert"
          />
          <p className="mt-6 max-w-sm font-serif text-cream/70 leading-relaxed">
            Contemporary Vietnamese cooking in Park Slope, Brooklyn.
            Crazy rich broth, every day.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.28em] uppercase text-amber-brand mb-4">
            Visit
          </h4>
          <ul className="space-y-2 font-serif text-cream/85">
            <li>{ADDRESS}</li>
            <li>{HOURS}</li>
            <li>
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="hover:text-coral">
                {PHONE}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.28em] uppercase text-amber-brand mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-[12px] tracking-[0.2em] uppercase">
            <li><a href="#menu" className="hover:text-coral">Menu</a></li>
            <li>
              <a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-coral">
                Order Online
              </a>
            </li>
            <li><a href="#contact" className="hover:text-coral">Contact</a></li>
            <li><a href="#press" className="hover:text-coral">Press</a></li>
          </ul>

          <div className="mt-6 flex gap-4 text-[11px] tracking-[0.22em] uppercase">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-coral">
              IG
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-coral">
              FB
            </a>
            <a href={YELP} target="_blank" rel="noreferrer" className="hover:text-coral">
              Yelp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-cream/55">
          <span>© {new Date().getFullYear()} PhoBar. All rights reserved.</span>
          <a
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-coral"
          >
            Site by @VoltaNYC
          </a>
        </div>
      </div>
    </footer>
  )
}
