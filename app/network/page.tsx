import Link from "next/link"
import Image from "next/image"
import { Shield, Users, MapPin, Award, Zap, Target, Flag, Truck } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NetworkPage() {
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
              alt="Patriot Hauls Network"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block rounded-md bg-[#C41E3A] px-6 py-3 text-lg text-white font-bold mb-8 font-['Bebas_Neue',_sans-serif] tracking-wider">
                THE PATRIOT HAULS NETWORK
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white font-['Bebas_Neue',_sans-serif] leading-none mb-6">
                BUILD YOUR NETWORK
              </h1>
              <p className="text-xl md:text-2xl text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-8 leading-relaxed">
                Join America's fastest-growing brotherhood of working-class operators. Connect with vetted patriots,
                veterans, and local business champions who share your values and have your back.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators" className="text-white hover:text-white">
                    FIND YOUR LOCAL OPERATOR
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators" className="text-white hover:text-white">
                    MEET THE BROTHERHOOD
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/join" className="text-white hover:text-white">
                    JOIN THE FIGHT
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section className="py-16 bg-white border-b-2 border-[#C41E3A]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                JOIN THE BROTHERHOOD TODAY
              </h2>
              <p className="text-lg text-[#4F5D75] mb-8 font-['Roboto_Condensed',_sans-serif]">
                Ready to connect with vetted patriots and local business champions? Start building your network now.
              </p>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-[#E5E5E5]">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-bold text-[#1C1C1C] font-['Oswald',_sans-serif]"
                      >
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-md focus:border-[#C41E3A] focus:outline-none font-['Roboto_Condensed',_sans-serif]"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-bold text-[#1C1C1C] font-['Oswald',_sans-serif]"
                      >
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-md focus:border-[#C41E3A] focus:outline-none font-['Roboto_Condensed',_sans-serif]"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#1C1C1C] font-['Oswald',_sans-serif]">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-md focus:border-[#C41E3A] focus:outline-none font-['Roboto_Condensed',_sans-serif]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-bold text-[#1C1C1C] font-['Oswald',_sans-serif]">
                      YOUR LOCATION
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-md focus:border-[#C41E3A] focus:outline-none font-['Roboto_Condensed',_sans-serif]"
                      placeholder="City, State"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold text-[#1C1C1C] font-['Oswald',_sans-serif]">
                      I'M INTERESTED IN
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-md focus:border-[#C41E3A] focus:outline-none font-['Roboto_Condensed',_sans-serif]"
                    >
                      <option value="">Select your interest</option>
                      <option value="renting">Renting trailers</option>
                      <option value="becoming-operator">Becoming an operator</option>
                      <option value="both">Both renting and operating</option>
                      <option value="networking">Networking with operators</option>
                    </select>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="veteran"
                      className="mt-1 h-4 w-4 text-[#C41E3A] border-2 border-[#E5E5E5] rounded focus:ring-[#C41E3A]"
                    />
                    <label htmlFor="veteran" className="text-sm text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                      I am a military veteran
                    </label>
                  </div>

                  <Button className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white font-bold text-lg py-4">
                    JOIN THE NETWORK
                  </Button>
                </form>

                <p className="text-xs text-[#4F5D75] mt-4 font-['Roboto_Condensed',_sans-serif]">
                  By joining, you agree to our network standards and brotherhood values.
                  <Link href="/terms" className="text-[#C41E3A] hover:underline">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Stats */}
        <section className="py-16 bg-[#002868]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
                THE NETWORK THAT'S CHANGING AMERICA
              </h2>
              <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Real numbers from real working-class Americans building something better together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">500+</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Network operators</strong>
                  <br />
                  across 23 states
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">73%</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Veteran-owned</strong>
                  <br />
                  businesses in network
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">$2.3M</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Kept in working hands</strong>
                  <br />
                  instead of corporate pockets
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif] mb-2">4.9</div>
                <p className="text-white font-['Roboto_Condensed',_sans-serif]">
                  <strong>Average rating</strong>
                  <br />
                  brotherhood accountability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Map */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                COAST TO COAST COVERAGE
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                From sea to shining sea, the Patriot Hauls Network is building a brotherhood of working-class Americans.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#F5F5F5] rounded-lg p-12 text-center mb-12">
              <MapPin className="h-16 w-16 text-[#C41E3A] mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-['Oswald',_sans-serif] mb-4">INTERACTIVE NETWORK MAP</h3>
              <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-6">
                Coming soon: Real-time map showing all network operators, available equipment, and hub locations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C41E3A]">Texas</div>
                  <div className="text-sm text-[#4F5D75]">127 Operators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C41E3A]">Florida</div>
                  <div className="text-sm text-[#4F5D75]">89 Operators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C41E3A]">Georgia</div>
                  <div className="text-sm text-[#4F5D75]">76 Operators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C41E3A]">Tennessee</div>
                  <div className="text-sm text-[#4F5D75]">54 Operators</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Benefits */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                WHY JOIN THE NETWORK?
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                This isn't just a business network - it's a brotherhood that protects, supports, and empowers
                working-class Americans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">BROTHERHOOD PROTECTION</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    Network-wide support when you need it most. Attack one of us, deal with all of us.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">VETTED OPERATORS</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    Every operator is background-checked, insured, and accountable to the brotherhood.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">QUALITY EQUIPMENT</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    Battle-tested trailers maintained by people who use them themselves.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">LOCAL CHAMPIONS</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    Support local businesses and keep money in working-class hands.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">SHARED VALUES</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    Connect with operators who share your work ethic and American values.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E5E5E5] hover:border-[#C41E3A] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">ANTI-CORPORATE</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                    No shareholders, no corporate BS - just working people helping working people.
                  </p>
                </CardContent>
              </Card>
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
                <span className="font-['Oswald',_sans-serif]">JOIN THE REVOLUTION</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                READY TO BUILD SOMETHING BETTER?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                Stop funding corporate America. Start supporting your neighbors. Join the network that's putting
                working-class Americans first.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1C1C1C] hover:bg-[#1C1C1C]/80 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/operators" className="text-white hover:text-white">
                    FIND LOCAL OPERATORS
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#C41E3A] border-2 border-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/join" className="text-[#C41E3A] hover:text-[#C41E3A]">
                    BECOME AN OPERATOR
                  </Link>
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
                <p className="text-[#C0C0C0] font-bold">"BUILD YOUR NETWORK"</p>
                <p className="text-[#C0C0C0]">"Workers United. America Strong."</p>
                <p className="text-[#C0C0C0]">"Brotherhood Before Profit"</p>
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
