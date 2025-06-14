import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { NetworkOperatorCard } from "@/components/network-operator-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Shield } from "lucide-react"

export default function OperatorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#C41E3A] bg-[#1C1C1C] text-white">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/join"
              className="text-sm font-bold text-[#FF6B35] transition-colors hover:text-white font-['Oswald',_sans-serif]"
            >
              JOIN THE NETWORK
            </Link>
            <Button asChild className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#1C1C1C] py-16">
          <div className="container">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white font-['Bebas_Neue',_sans-serif] mb-4">
                MEET THE BROTHERHOOD
              </h1>
              <p className="text-xl text-[#C0C0C0] max-w-4xl mx-auto font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                These aren't corporate employees - they're your neighbors, fellow veterans, and local business
                champions. Every operator is vetted, insured, and accountable to the network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#C41E3A]/20 p-4 rounded-lg border border-[#C41E3A] text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-[#C41E3A] mr-2" />
                  <span className="text-white font-bold font-['Oswald',_sans-serif]">HIGHLY VETTED</span>
                </div>
                <p className="text-[#C0C0C0] text-sm font-['Roboto_Condensed',_sans-serif]">
                  Background checks & references
                </p>
              </div>
              <div className="bg-[#C41E3A]/20 p-4 rounded-lg border border-[#C41E3A] text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-[#C41E3A] mr-2" />
                  <span className="text-white font-bold font-['Oswald',_sans-serif]">BROTHERHOOD PROTECTED</span>
                </div>
                <p className="text-[#C0C0C0] text-sm font-['Roboto_Condensed',_sans-serif]">Network accountability</p>
              </div>
              <div className="bg-[#C41E3A]/20 p-4 rounded-lg border border-[#C41E3A] text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-[#C41E3A] mr-2" />
                  <span className="text-white font-bold font-['Oswald',_sans-serif]">LOCAL CHAMPIONS</span>
                </div>
                <p className="text-[#C0C0C0] text-sm font-['Roboto_Condensed',_sans-serif]">Community invested</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-[#F5F5F5]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold font-['Oswald',_sans-serif]">FIND YOUR AREA</label>
                <Input placeholder="City, State or ZIP" className="border-2 border-[#4F5D75]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold font-['Oswald',_sans-serif]">OPERATOR TYPE</label>
                <Select defaultValue="all">
                  <SelectTrigger className="border-2 border-[#4F5D75]">
                    <SelectValue placeholder="All Operators" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Operators</SelectItem>
                    <SelectItem value="veteran">Veterans</SelectItem>
                    <SelectItem value="local-business">Local Business</SelectItem>
                    <SelectItem value="construction">Construction Specialist</SelectItem>
                    <SelectItem value="farm">Farm & Ranch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold font-['Oswald',_sans-serif]">SPECIALTY</label>
                <Select defaultValue="all">
                  <SelectTrigger className="border-2 border-[#4F5D75]">
                    <SelectValue placeholder="All Specialties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="heavy-equipment">Heavy Equipment</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="livestock">Livestock</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">FIND OPERATORS</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold font-['Bebas_Neue',_sans-serif]">NETWORK OPERATORS</h2>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Real people. Real accountability. Real service.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-[#C41E3A] text-[#C41E3A]">
                  47 Active Operators
                </Badge>
                <Badge variant="outline" className="border-[#4F5D75] text-[#4F5D75]">
                  23 States
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NetworkOperatorCard
                name="Mike 'Tank' Rodriguez"
                location="Dallas, TX"
                background="Army Veteran • 15 Years Construction"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={12}
                rating={4.9}
                specialties={["Heavy Equipment", "Construction", "Military Moves"]}
                motto="Built tough for tough jobs"
              />
              <NetworkOperatorCard
                name="Sarah 'Diesel' Johnson"
                location="Nashville, TN"
                background="Navy Veteran • Small Business Owner"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={8}
                rating={5.0}
                specialties={["Livestock", "Farm Equipment", "Family Moves"]}
                motto="Southern hospitality meets working-class fury"
              />
              <NetworkOperatorCard
                name="Big Jim Thompson"
                location="Phoenix, AZ"
                background="Marine Veteran • Local Business Champion"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={15}
                rating={4.8}
                specialties={["Commercial", "Industrial", "Emergency Response"]}
                motto="Semper Fi to the working class"
              />
              <NetworkOperatorCard
                name="Bobby 'Wrench' Williams"
                location="Atlanta, GA"
                background="Air Force Veteran • Mechanic Shop Owner"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={10}
                rating={4.9}
                specialties={["Auto Transport", "Motorcycle", "Racing Equipment"]}
                motto="Precision service, military discipline"
              />
              <NetworkOperatorCard
                name="Maria 'Steel' Gonzalez"
                location="Houston, TX"
                background="Army Veteran • Welding Business Owner"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={14}
                rating={4.8}
                specialties={["Industrial", "Steel Transport", "Heavy Machinery"]}
                motto="Forged in service, built for work"
              />
              <NetworkOperatorCard
                name="Johnny 'Rebel' Davis"
                location="Birmingham, AL"
                background="Marine Veteran • Local Business Supporter"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={9}
                rating={5.0}
                specialties={["Construction", "Landscaping", "Home Improvement"]}
                motto="Southern pride, working-class strong"
              />
            </div>

            <div className="text-center mt-12">
              <p className="text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                Don't see an operator in your area? We're always growing the network.
              </p>
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 font-bold">
                <Link href="/join">BECOME AN OPERATOR</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1C1C] text-white py-12 border-t-4 border-[#C41E3A]">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-['Bebas_Neue',_sans-serif] text-[#C41E3A]">
              READY TO JOIN THE BROTHERHOOD?
            </h3>
            <p className="text-[#C0C0C0] mb-6 font-['Roboto_Condensed',_sans-serif] max-w-2xl mx-auto">
              Tired of corporate BS? Ready to build something real with fellow working-class Americans? The Patriot
              Hauls Network is looking for vetted, insured operators who believe in brotherhood before profit.
            </p>
            <Button asChild size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
              <Link href="/join">START YOUR APPLICATION</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
