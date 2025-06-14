import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { TrailerCard } from "@/components/trailer-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function TrailersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#C41E3A] bg-[#1C1C1C] text-white">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-white font-['Oswald',_sans-serif]"
            >
              Login
            </Link>
            <Button asChild className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#1C1C1C] py-12">
          <div className="container">
            <h1 className="text-3xl font-bold text-white font-['Bebas_Neue',_sans-serif]">
              BROWSE OUR TRAILER INVENTORY
            </h1>
            <p className="text-[#C0C0C0] mt-2 font-['Roboto_Condensed',_sans-serif]">
              Find the perfect trailer for your next project or move
            </p>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input placeholder="Search trailers..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Trailer Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="utility">Utility</SelectItem>
                    <SelectItem value="car-hauler">Car Hauler</SelectItem>
                    <SelectItem value="dump">Dump Trailer</SelectItem>
                    <SelectItem value="enclosed">Enclosed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range (per day)</label>
                <div className="pt-4">
                  <Slider defaultValue={[50]} max={200} step={5} />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$200</span>
                </div>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90">Apply Filters</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TrailerCard
                id="1"
                title="Utility Trailer"
                description="Perfect for hauling equipment, furniture, and more"
                price={45}
                image="/placeholder.svg?height=300&width=400"
                rating={4.8}
                reviews={124}
              />
              <TrailerCard
                id="2"
                title="Car Hauler"
                description="Designed for safely transporting vehicles"
                price={75}
                image="/placeholder.svg?height=300&width=400"
                rating={4.9}
                reviews={86}
              />
              <TrailerCard
                id="3"
                title="Dump Trailer"
                description="Ideal for construction debris and landscaping"
                price={95}
                image="/placeholder.svg?height=300&width=400"
                rating={4.7}
                reviews={92}
              />
              <TrailerCard
                id="4"
                title="Enclosed Trailer"
                description="Weather-protected storage for valuable items"
                price={85}
                image="/placeholder.svg?height=300&width=400"
                rating={4.6}
                reviews={78}
              />
              <TrailerCard
                id="5"
                title="Flatbed Trailer"
                description="Versatile hauling for oversized items"
                price={65}
                image="/placeholder.svg?height=300&width=400"
                rating={4.5}
                reviews={64}
              />
              <TrailerCard
                id="6"
                title="Equipment Trailer"
                description="Heavy-duty design for machinery transport"
                price={110}
                image="/placeholder.svg?height=300&width=400"
                rating={4.8}
                reviews={52}
              />
              <TrailerCard
                id="7"
                title="Landscape Trailer"
                description="Perfect for lawn care and landscaping businesses"
                price={55}
                image="/placeholder.svg?height=300&width=400"
                rating={4.7}
                reviews={43}
              />
              <TrailerCard
                id="8"
                title="ATV Trailer"
                description="Transport your recreational vehicles safely"
                price={60}
                image="/placeholder.svg?height=300&width=400"
                rating={4.6}
                reviews={38}
              />
              <TrailerCard
                id="9"
                title="Motorcycle Trailer"
                description="Specialized for motorcycle transport"
                price={50}
                image="/placeholder.svg?height=300&width=400"
                rating={4.5}
                reviews={29}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1C1C1C] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Bebas_Neue',_sans-serif]">PATRIOT HAULS</h3>
              <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                Empowering independence and opportunity through reliable transportation solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Quick Links</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/trailers" className="text-[#C0C0C0] hover:text-white">
                    Browse Trailers
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-[#C0C0C0] hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-[#C0C0C0] hover:text-white">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#C0C0C0] hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Contact Us</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li className="text-[#C0C0C0]">1234 Freedom Road</li>
                <li className="text-[#C0C0C0]">Liberty, USA 12345</li>
                <li className="text-[#C0C0C0]">(555) 123-4567</li>
                <li className="text-[#C0C0C0]">info@patriothauls.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Newsletter</h3>
              <p className="text-[#C0C0C0] mb-4 font-['Roboto_Condensed',_sans-serif]">
                Subscribe for updates and special offers
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-md bg-[#333] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#C41E3A]"
                />
                <Button className="bg-[#C41E3A] hover:bg-[#C41E3A]/90">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
            <p>&copy; {new Date().getFullYear()} Patriot Hauls. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
