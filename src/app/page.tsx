import Hero from "@/lib/components/Hero"
import About from "@/lib/components/About"
import FeaturedDishes from "@/lib/components/FeaturedDishes"
import Menu from "@/lib/components/Menu"
import LocationHours from "@/lib/components/LocationHours"
import Press from "@/lib/components/Press"
import Contact from "@/lib/components/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDishes />
      <Menu />
      <LocationHours />
      <Press />
      <Contact />
    </>
  )
}
