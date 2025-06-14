import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Flag, Hammer, Heart, Zap, Target, Award } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#C41E3A] bg-[#1C1C1C] text-white">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/operators"
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
        {/* Hero Section */}
        <section className="relative bg-[#1C1C1C] py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="American workers united"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block rounded-md bg-[#C41E3A] px-6 py-3 text-lg text-white font-bold mb-8 font-['Bebas_Neue',_sans-serif] tracking-wider">
                OUR MISSION
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white font-['Bebas_Neue',_sans-serif] leading-none mb-6">
                WORKERS UNITED.
                <br />
                <span className="text-[#FF6B35]">AMERICA STRONG.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-8 leading-relaxed">
                We're not just a trailer rental network - we're a movement. A brotherhood of working-class Americans who
                refuse to let corporate greed destroy our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-black font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators">MEET THE BROTHERHOOD</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold text-xl px-10 py-6"
                >
                  <Link href="/join">JOIN THE FIGHT</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                WHAT WE STAND FOR
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                These aren't just words on a website - they're the principles that guide every decision, every
                partnership, and every rental in our network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">WORKING-CLASS FIRST</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Every dollar earned stays in working hands. We build wealth for workers, not Wall Street.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">VETERAN STRONG</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Those who served our country deserve more than corporate handouts. We provide real opportunities.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">COMMUNITY OVER PROFIT</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Strong communities beat corporate profits every time. We invest in neighborhoods, not shareholders.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">BROTHERHOOD PROTECTION</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  We've got each other's backs. Attack one of us, you deal with all of us. That's brotherhood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-gradient-to-r from-[#8B0000] to-[#C41E3A] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                THE PROBLEM WE'RE FIGHTING
              </h2>
              <p className="text-xl text-white/90 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                For too long, corporate America has gotten rich off the backs of working people while giving nothing
                back to the communities that built this country.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#1C1C1C]/80 p-8 rounded-lg border-2 border-[#FF6B35]">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Oswald',_sans-serif]">CORPORATE GREED</h3>
                <ul className="space-y-3 text-white font-['Roboto_Condensed',_sans-serif]">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Profits shipped to distant shareholders while local communities struggle</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Faceless customer service that treats people like numbers</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Cheap equipment that breaks down when you need it most</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Zero accountability when things go wrong</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1C1C1C]/80 p-8 rounded-lg border-2 border-[#B7941D]">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Oswald',_sans-serif]">OUR SOLUTION</h3>
                <ul className="space-y-3 text-white font-['Roboto_Condensed',_sans-serif]">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>Every dollar stays in working-class hands and local communities</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>Personal service from people who know your name and your story</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>Battle-tested equipment maintained by people who use it themselves</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>Network-wide accountability - we protect our own</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                  HOW WE STARTED
                </h2>
                <p className="text-xl text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Born from frustration, built on brotherhood
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-[#C41E3A] mb-8">
                <p className="text-lg text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] leading-relaxed mb-6">
                  It started with a simple question: <strong>"Why are we making rich people richer?"</strong>
                </p>
                <p className="text-lg text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] leading-relaxed mb-6">
                  Every time a working person rented from the big corporations, their hard-earned money disappeared into
                  the pockets of distant shareholders who'd never worked a day of honest labor in their lives.
                  Meanwhile, local businesses - run by veterans, small business owners, and working-class heroes -
                  struggled to compete.
                </p>
                <p className="text-lg text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] leading-relaxed mb-6">
                  That's when we said: <strong>"Enough."</strong>
                </p>
                <p className="text-lg text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                  Patriot Hauls Network was born from the simple idea that working people deserve better. We deserve
                  equipment that works, service that cares, and a network that has our backs. Most importantly, we
                  deserve to keep our money in our own communities.
                </p>
              </div>

              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-[#C41E3A] font-['Bebas_Neue',_sans-serif] mb-4">
                  "WE'RE NOT ANTI-BUSINESS. WE'RE ANTI-BULLSHIT."
                </blockquote>
                <p className="text-lg text-[#4F5D75] font-['Oswald',_sans-serif] font-bold">
                  - The Patriot Hauls Network Founders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-[#002868]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
                THE IMPACT WE'RE MAKING
              </h2>
              <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Every rental is a vote for working-class America. Here's what we're building together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">$2.3M+</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Kept in working-class hands</strong>
                  <br />
                  instead of corporate coffers
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">147</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Veteran-owned businesses</strong>
                  <br />
                  supported and thriving
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">23</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>States united</strong>
                  <br />
                  in the brotherhood
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">0</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Corporate shareholders</strong>
                  <br />
                  getting rich off our work
                </p>
              </div>
            </div>

            <div className="bg-[#1C1C1C]/60 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Oswald',_sans-serif]">
                EVERY RENTAL MAKES A DIFFERENCE
              </h3>
              <p className="text-[#C0C0C0] mb-6 font-['Roboto_Condensed',_sans-serif] text-lg max-w-3xl mx-auto">
                When you choose Patriot Hauls Network, you're not just renting a trailer - you're investing in your
                community, supporting a veteran, and building a stronger working-class America.
              </p>
              <Button asChild size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold text-lg">
                <Link href="/operators">FIND YOUR LOCAL OPERATOR</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-[#FF6B35] text-black px-6 py-3 rounded-full font-bold mb-6">
                <Flag className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">JOIN THE MOVEMENT</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                READY TO FIGHT BACK?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                The corporate machine wants to keep us divided and dependent. But when working people unite, we're
                unstoppable. Join the brotherhood that's taking back American business, one trailer at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1C1C1C] hover:bg-[#1C1C1C]/80 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators">FIND LOCAL OPERATORS</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#C41E3A] border-2 border-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/join">BECOME AN OPERATOR</Link>
                </Button>
              </div>
              <div className="text-center">
                <p className="text-white/80 font-['Oswald',_sans-serif] text-lg font-bold mb-2">
                  "WORKERS UNITED. AMERICA STRONG."
                </p>
                <p className="text-[#FF6B35] font-['Bebas_Neue',_sans-serif] text-xl">
                  BUILT BY BLUE-COLLAR. OWNED BY BLUE-COLLAR.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white py-12 border-t-4 border-[#C41E3A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Bebas_Neue',_sans-serif] text-[#C41E3A]">
                PATRIOT HAULS NETWORK
              </h3>
              <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-4">
                America's working class united under one flag. Brotherhood before profit.
              </p>
              <div className="flex items-center text-[#B7941D] font-bold">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">WORKERS UNITED. AMERICA STRONG.</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">The Network</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/operators" className="text-[#C0C0C0] hover:text-white">
                    Find Local Operators
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-[#C0C0C0] hover:text-white">
                    Join the Brotherhood
                  </Link>
                </li>
                <li>
                  <Link href="/standards" className="text-[#C0C0C0] hover:text-white">
                    Network Standards
                  </Link>
                </li>
                <li>
                  <Link href="/protection" className="text-[#C0C0C0] hover:text-white">
                    Brotherhood Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Our Mission</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/mission" className="text-[#C0C0C0] hover:text-white">
                    Workers United
                  </Link>
                </li>
                <li>
                  <Link href="/veterans" className="text-[#C0C0C0] hover:text-white">
                    Veteran Strong
                  </Link>
                </li>
                <li>
                  <Link href="/local-business" className="text-[#C0C0C0] hover:text-white">
                    Local Business Champions
                  </Link>
                </li>
                <li>
                  <Link href="/anti-corporate" className="text-[#C0C0C0] hover:text-white">
                    Anti-Corporate Values
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Battle Cry</h3>
              <div className="space-y-3 font-['Roboto_Condensed',_sans-serif]">
                <p className="text-[#C0C0C0] font-bold">"HAUL FREEDOM"</p>
                <p className="text-[#C0C0C0]">"Workers United. America Strong."</p>
                <p className="text-[#C0C0C0]">"U-Haul's Worst Nightmare"</p>
                <p className="text-[#C0C0C0]">"The Network That Has Your Back"</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center">
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-2">
              &copy; {new Date().getFullYear()} Patriot Hauls Network. Built by the working class, for the working
              class.
            </p>
            <p className="text-[#B7941D] font-bold font-['Oswald',_sans-serif]">
              "WE'RE NOT CORPORATE AMERICA - WE ARE AMERICA"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
