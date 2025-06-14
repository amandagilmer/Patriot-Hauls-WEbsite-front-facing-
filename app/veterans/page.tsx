import Link from "next/link"
import Image from "next/image"
import { Shield, Star, Flag, Award, Users, Zap, Heart, Target } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { NetworkOperatorCard } from "@/components/network-operator-card"

export default function VeteransPage() {
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
              alt="American veterans united"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-[#C41E3A] px-6 py-3 rounded-full text-white font-bold mb-8">
                <Flag className="h-5 w-5 mr-2" />
                <span className="font-['Bebas_Neue',_sans-serif] tracking-wider">VETERAN STRONG</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white font-['Bebas_Neue',_sans-serif] leading-none mb-6">
                SERVED OUR COUNTRY.
                <br />
                <span className="text-[#FF6B35]">SERVING OUR COMMUNITIES.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-8 leading-relaxed">
                They answered the call to defend America. Now they're answering the call to rebuild it - one trailer,
                one community, one brotherhood at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-black font-bold text-xl px-10 py-6"
                >
                  <Link href="#veteran-operators">MEET OUR VETERANS</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold text-xl px-10 py-6"
                >
                  <Link href="/join">VETERAN? JOIN US</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Veterans Lead */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                WHY VETERANS LEAD OUR NETWORK
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Military service builds more than character - it builds the exact qualities that make great business
                operators and community leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">PROVEN DISCIPLINE</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Military training instills the discipline needed to maintain equipment, serve customers, and build
                  lasting businesses.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">BROTHERHOOD MINDSET</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  "Leave no one behind" isn't just a motto - it's how our veteran operators treat every customer and
                  fellow operator.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">MISSION FOCUSED</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  Veterans understand that the mission comes first. Customer service isn't just business - it's duty.
                </p>
              </div>

              <div className="text-center p-6 bg-[#F5F5F5] rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">SERVICE BEFORE SELF</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                  A lifetime of putting others first translates into business operators who genuinely care about their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Veteran Statistics */}
        <section className="py-16 bg-gradient-to-r from-[#002868] to-[#1C1C1C]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
                VETERANS BY THE NUMBERS
              </h2>
              <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Our veteran operators aren't just part of the network - they ARE the network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">73%</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Of our operators</strong>
                  <br />
                  are military veterans
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">147</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Veteran-owned businesses</strong>
                  <br />
                  in our network
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">4.9</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Average rating</strong>
                  <br />
                  for veteran operators
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">$1.8M</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Earned by veterans</strong>
                  <br />
                  through our network
                </p>
              </div>
            </div>

            <div className="bg-[#1C1C1C]/60 p-8 rounded-lg text-center border-2 border-[#C41E3A]">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Oswald',_sans-serif]">
                MORE THAN BUSINESS - IT'S BROTHERHOOD
              </h3>
              <p className="text-[#C0C0C0] mb-6 font-['Roboto_Condensed',_sans-serif] text-lg max-w-3xl mx-auto">
                When you rent from a veteran operator, you're not just getting a trailer - you're supporting someone who
                served our country and is now serving our communities. That's the Patriot Hauls difference.
              </p>
            </div>
          </div>
        </section>

        {/* Veteran Operators */}
        <section id="veteran-operators" className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                MEET OUR VETERAN OPERATORS
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                From Marines to Army Rangers, Navy SEALs to Air Force mechanics - our veteran operators bring military
                precision to civilian service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <NetworkOperatorCard
                name="Mike 'Tank' Rodriguez"
                location="Dallas, TX"
                background="Army Veteran • 15 Years Construction • Purple Heart"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={12}
                rating={4.9}
                specialties={["Heavy Equipment", "Construction", "Military Moves"]}
                motto="Built tough for tough jobs - Hooah!"
              />
              <NetworkOperatorCard
                name="Sarah 'Diesel' Johnson"
                location="Nashville, TN"
                background="Navy Veteran • Small Business Owner • 10 Years Service"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={8}
                rating={5.0}
                specialties={["Livestock", "Farm Equipment", "Family Moves"]}
                motto="Anchors Aweigh to corporate greed"
              />
              <NetworkOperatorCard
                name="Big Jim Thompson"
                location="Phoenix, AZ"
                background="Marine Veteran • Local Business Champion • Semper Fi"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={15}
                rating={4.8}
                specialties={["Commercial", "Industrial", "Emergency Response"]}
                motto="Semper Fi to the working class"
              />
              <NetworkOperatorCard
                name="Bobby 'Wrench' Williams"
                location="Atlanta, GA"
                background="Air Force Veteran • Mechanic Shop Owner • 12 Years Service"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={10}
                rating={4.9}
                specialties={["Auto Transport", "Motorcycle", "Racing Equipment"]}
                motto="Precision service, military discipline"
              />
              <NetworkOperatorCard
                name="Maria 'Steel' Gonzalez"
                location="Houston, TX"
                background="Army Veteran • Welding Business Owner • Combat Engineer"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={14}
                rating={4.8}
                specialties={["Industrial", "Steel Transport", "Heavy Machinery"]}
                motto="Forged in service, built for work"
              />
              <NetworkOperatorCard
                name="Chief Danny 'Anchor' Murphy"
                location="Jacksonville, FL"
                background="Navy Chief • 20 Years Service • Retired Master Chief"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={11}
                rating={5.0}
                specialties={["Marine Equipment", "Boat Transport", "Coastal Moves"]}
                motto="20 years Navy, lifetime brotherhood"
              />
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold text-lg">
                <Link href="/operators">VIEW ALL VETERAN OPERATORS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Veteran Support */}
        <section className="py-16 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                HOW WE SUPPORT OUR VETERANS
              </h2>
              <p className="text-xl text-white/90 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                Saying "thank you for your service" isn't enough. We put our money where our mouth is.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#1C1C1C]/80 p-8 rounded-lg border-2 border-[#FF6B35]">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Oswald',_sans-serif]">VETERAN ADVANTAGES</h3>
                <ul className="space-y-4 text-white font-['Roboto_Condensed',_sans-serif]">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Reduced Network Fees:</strong> Veterans pay 50% less to join our network
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Priority Support:</strong> Veterans get first priority for network assistance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Equipment Financing:</strong> Special financing options for trailer purchases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Marketing Support:</strong> Free promotional materials highlighting veteran status
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1C1C1C]/80 p-8 rounded-lg border-2 border-[#B7941D]">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Oswald',_sans-serif]">BROTHERHOOD BENEFITS</h3>
                <ul className="space-y-4 text-white font-['Roboto_Condensed',_sans-serif]">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Veteran Network:</strong> Connect with fellow veterans across the country
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Mentorship Program:</strong> Experienced operators guide new veteran businesses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Emergency Support:</strong> Network rallies when a veteran operator needs help
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-[#B7941D] mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Referral Priority:</strong> Veterans get first referrals in their service areas
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-white font-['Bebas_Neue',_sans-serif] mb-4">
                "WE SERVED TOGETHER. NOW WE SUCCEED TOGETHER."
              </blockquote>
              <p className="text-lg text-[#FF6B35] font-bold font-['Oswald',_sans-serif]">
                - The Patriot Hauls Veteran Network
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#1C1C1C] relative overflow-hidden">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-[#FF6B35] text-black px-6 py-3 rounded-full font-bold mb-6">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">VETERAN OPPORTUNITY</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                READY TO SERVE AGAIN?
              </h2>
              <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                Your service to country prepared you for service to community. Join the veteran-led network that's
                rebuilding American business from the ground up. Your brothers and sisters are waiting.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#C41E3A]/80 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/join">JOIN AS VETERAN OPERATOR</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators">FIND VETERAN OPERATORS</Link>
                </Button>
              </div>
              <div className="text-center">
                <p className="text-[#B7941D] font-['Oswald',_sans-serif] text-lg font-bold mb-2">
                  "ONCE A WARRIOR, ALWAYS A WARRIOR"
                </p>
                <p className="text-[#FF6B35] font-['Bebas_Neue',_sans-serif] text-xl">
                  SERVED OUR COUNTRY. SERVING OUR COMMUNITIES.
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
                Veteran-led. Brotherhood-backed. America-strong.
              </p>
              <div className="flex items-center text-[#B7941D] font-bold">
                <Flag className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">SERVED TOGETHER. SUCCEED TOGETHER.</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Veteran Support</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/veterans" className="text-[#C0C0C0] hover:text-white">
                    Veteran Operators
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-[#C0C0C0] hover:text-white">
                    Join as Veteran
                  </Link>
                </li>
                <li>
                  <Link href="/veteran-benefits" className="text-[#C0C0C0] hover:text-white">
                    Veteran Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship" className="text-[#C0C0C0] hover:text-white">
                    Mentorship Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Military Branches</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li className="text-[#C0C0C0]">Army Strong</li>
                <li className="text-[#C0C0C0]">Navy Pride</li>
                <li className="text-[#C0C0C0]">Marine Corps</li>
                <li className="text-[#C0C0C0]">Air Force</li>
                <li className="text-[#C0C0C0]">Coast Guard</li>
                <li className="text-[#C0C0C0]">Space Force</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Battle Cry</h3>
              <div className="space-y-3 font-['Roboto_Condensed',_sans-serif]">
                <p className="text-[#C0C0C0] font-bold">"SERVED TOGETHER"</p>
                <p className="text-[#C0C0C0]">"SUCCEED TOGETHER"</p>
                <p className="text-[#C0C0C0]">"ONCE A WARRIOR"</p>
                <p className="text-[#C0C0C0]">"ALWAYS A WARRIOR"</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center">
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-2">
              &copy; {new Date().getFullYear()} Patriot Hauls Network. Honoring those who served by supporting those who
              serve.
            </p>
            <p className="text-[#B7941D] font-bold font-['Oswald',_sans-serif]">
              "FREEDOM ISN'T FREE - BUT BROTHERHOOD IS PRICELESS"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
