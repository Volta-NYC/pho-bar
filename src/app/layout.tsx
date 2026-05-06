import "./globals.css"
import { Bebas_Neue, Lora } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const serif = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata = {
  title: "PhoBar — Contemporary Vietnamese in Brooklyn",
  description:
    "PhoBar is a contemporary Vietnamese restaurant in Park Slope, Brooklyn, serving phở, bánh mì, and rice bowls with bold, refined flavors.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
