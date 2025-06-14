import Link from "next/link"
import Image from "next/image"
import { Shield, AlertTriangle, Users, Zap, Eye, Lock, Phone, Gavel } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"

export default function ProtectionPage() {
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
              alt="Brotherhood protection"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-[#C41E3A] px-6 py-3 rounded-full text-white font-bold mb-8">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="font-['Bebas_Neue',_sans-serif] tracking-wider">ZERO TOLERANCE POLICY</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white font-['Bebas_Neue',_sans-serif] leading-none mb-6">
                MESS WITH ONE OF US?
                <br />
                <span className="text-[#FF6B35]">DEAL WITH ALL OF US.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-8 leading-relaxed">
                This isn't just a rental network - it's a brotherhood. When you attack our equipment, our operators, or
                our customers, you're not facing one angry business owner. You're facing the entire working-class
                family.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-black font-bold text-xl px-10 py-6"
                >
                  <Link href="#protection-details">HOW WE PROTECT</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold text-xl px-10 py-6"
                >
                  <Link href="/report">REPORT AN INCIDENT</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Threat */}
        <section className="py-16 bg-gradient-to-r from-[#8B0000] to-[#C41E3A] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                THE THREATS WE FACE
              </h2>
              <p className="text-xl text-white/90 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                Working-class businesses face unique challenges that corporate America doesn't understand. We do - and
                we fight back.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#1C1C1C]/80 p-6 rounded-lg border-2 border-[#FF6B35] text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-[#FF6B35] rounded-full mb-4">
                  <AlertTriangle className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-['Oswald',_sans-serif]">EQUIPMENT THEFT</h3>
                <p className="text-white/80 text-sm font-['Roboto_Condensed',_sans-serif]">
                  Criminals targeting trailers and equipment from small operators
                </p>
              </div>

              <div className="bg-[#1C1C1C]/80 p-6 rounded-lg border-2 border-[#FF6B35] text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-[#FF6B35] rounded-full mb-4">
                  <Gavel className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-['Oswald',_sans-serif]">RENTAL FRAUD</h3>
                <p className="text-white/80 text-sm font-['Roboto_Condensed',_sans-serif]">
                  Scammers using fake IDs and stolen credit cards
                </p>
              </div>

              <div className="bg-[#1C1C1C]/80 p-6 rounded-lg border-2 border-[#FF6B35] text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-[#FF6B35] rounded-full mb-4">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-['Oswald',_sans-serif]">PROPERTY DAMAGE</h3>
                <p className="text-white/80 text-sm font-['Roboto_Condensed',_sans-serif]">
                  Intentional damage to equipment and business property
                </p>
              </div>

              <div className="bg-[#1C1C1C]/80 p-6 rounded-lg border-2 border-[#FF6B35] text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-[#FF6B35] rounded-full mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-['Oswald',_sans-serif]">INTIMIDATION</h3>
                <p className="text-white/80 text-sm font-['Roboto_Condensed',_sans-serif]">
                  Threats against operators and their families
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protection System */}
        <section id="protection-details" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                THE BROTHERHOOD PROTECTION SYSTEM
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                When you mess with one of us, you activate a network of 500+ operators, law enforcement contacts, and
                legal resources across America.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">NETWORK ALERT SYSTEM</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  Incident reported to one operator? Every operator in the network gets alerted within minutes.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Instant network-wide notifications</li>
                  <li>• Photo and description sharing</li>
                  <li>• Real-time location tracking</li>
                  <li>• Cross-state coordination</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">BROTHERHOOD RESPONSE</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  Local operators mobilize to support the targeted business with manpower and resources.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Physical presence and support</li>
                  <li>• Equipment replacement assistance</li>
                  <li>• Business continuity support</li>
                  <li>• Community rallying</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">LAW ENFORCEMENT NETWORK</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  Direct connections to law enforcement officers who understand working-class businesses.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Veteran law enforcement contacts</li>
                  <li>• Priority incident reporting</li>
                  <li>• Multi-jurisdiction coordination</li>
                  <li>• Evidence sharing protocols</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Gavel className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">LEGAL SUPPORT FUND</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  Network-funded legal resources to pursue justice against those who target our operators.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Shared legal costs</li>
                  <li>• Experienced attorneys</li>
                  <li>• Civil and criminal proceedings</li>
                  <li>• Asset recovery assistance</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">BLACKLIST DATABASE</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  Shared database of problem customers, thieves, and fraudsters across the entire network.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Network-wide customer screening</li>
                  <li>• Fraud prevention alerts</li>
                  <li>• Photo identification system</li>
                  <li>• Incident history tracking</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-lg border-2 border-transparent hover:border-[#C41E3A] transition-all">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">SWIFT RETALIATION</h3>
                <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                  We don't just defend - we go on the offensive to make sure attacks on our network have consequences.
                </p>
                <ul className="text-sm text-[#4F5D75] space-y-2 font-['Roboto_Condensed',_sans-serif]">
                  <li>• Public exposure campaigns</li>
                  <li>• Community awareness alerts</li>
                  <li>• Social media coordination</li>
                  <li>• Economic pressure tactics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                PROTECTION IN ACTION
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Real stories of how the Brotherhood Protection System defended our operators and customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <h3 className="text-lg font-bold mb-3 font-['Oswald',_sans-serif]">THE ATLANTA THEFT RING</h3>
                <p className="text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif] text-sm">
                  When thieves targeted three of our Atlanta operators in one week, the network mobilized. Within 48
                  hours, we had identified the ring, recovered $45,000 in stolen equipment, and helped law enforcement
                  make arrests.
                </p>
                <div className="text-xs text-[#B7941D] font-bold">RESULT: 3 ARRESTS, FULL RECOVERY</div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <h3 className="text-lg font-bold mb-3 font-['Oswald',_sans-serif]">THE PHOENIX FRAUD SCHEME</h3>
                <p className="text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif] text-sm">
                  A sophisticated fraud operation using stolen identities was hitting operators across the Southwest.
                  Our blacklist database and alert system shut them down before they could expand beyond Arizona.
                </p>
                <div className="text-xs text-[#B7941D] font-bold">RESULT: SCHEME STOPPED, $30K SAVED</div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <h3 className="text-lg font-bold mb-3 font-['Oswald',_sans-serif]">THE NASHVILLE INTIMIDATION</h3>
                <p className="text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif] text-sm">
                  When a competitor tried to intimidate one of our veteran operators, 20 network members showed up at
                  his business the next day. The intimidation stopped immediately, and the competitor left town.
                </p>
                <div className="text-xs text-[#B7941D] font-bold">RESULT: THREAT ELIMINATED</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Warning */}
        <section className="py-16 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-[#FF6B35] text-black px-6 py-3 rounded-full font-bold mb-8">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">FAIR WARNING</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                TO THOSE WHO WOULD
                <br />
                <span className="text-[#FF6B35]">MESS WITH US:</span>
              </h2>
              <div className="bg-[#1C1C1C]/80 p-8 rounded-lg border-2 border-[#FF6B35] mb-8">
                <p className="text-xl md:text-2xl text-white font-['Roboto_Condensed',_sans-serif] leading-relaxed mb-6">
                  We are 500+ operators strong. We are veterans, small business owners, and working-class Americans who
                  have each other's backs. We have law enforcement contacts, legal resources, and the determination to
                  protect what we've built.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#FF6B35] font-['Bebas_Neue',_sans-serif] mb-4">
                  ATTACK ONE OF US, AND YOU ATTACK ALL OF US.
                </p>
                <p className="text-lg text-white/90 font-['Oswald',_sans-serif] font-bold">
                  We will find you. We will stop you. We will make sure you face consequences.
                </p>
              </div>
              <div className="text-center">
                <p className="text-white/80 font-['Roboto_Condensed',_sans-serif] text-lg mb-4">
                  This is not a threat - it's a promise. We protect our own.
                </p>
                <p className="text-[#FF6B35] font-['Bebas_Neue',_sans-serif] text-2xl">
                  BROTHERHOOD BEFORE PROFIT. PROTECTION BEFORE PEACE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#1C1C1C]">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                JOIN THE PROTECTED NETWORK
              </h2>
              <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                When you join Patriot Hauls Network, you're not just starting a business - you're joining a brotherhood
                that will have your back no matter what. That's the power of working-class unity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C41E3A] hover:bg-[#C41E3A]/80 text-white font-bold text-xl px-10 py-6"
                >
                  <Link href="/join">JOIN THE BROTHERHOOD</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black font-bold text-xl px-10 py-6"
                >
                  <Link href="/report">REPORT AN INCIDENT</Link>
                </Button>
              </div>
              <div className="text-center">
                <p className="text-[#B7941D] font-['Oswald',_sans-serif] text-lg font-bold mb-2">
                  "UNITED WE STAND. DIVIDED WE FALL."
                </p>
                <p className="text-[#FF6B35] font-['Bebas_Neue',_sans-serif] text-xl">MESS WITH ONE. DEAL WITH ALL.</p>
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
                Protected by brotherhood. Defended by unity. Backed by 500+ operators.
              </p>
              <div className="flex items-center text-[#B7941D] font-bold">
                <Shield className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">ATTACK ONE. FACE ALL.</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Protection Services</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/protection" className="text-[#C0C0C0] hover:text-white">
                    Brotherhood Protection
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="text-[#C0C0C0] hover:text-white">
                    Report Incident
                  </Link>
                </li>
                <li>
                  <Link href="/blacklist" className="text-[#C0C0C0] hover:text-white">
                    Blacklist Database
                  </Link>
                </li>
                <li>
                  <Link href="/legal-support" className="text-[#C0C0C0] hover:text-white">
                    Legal Support Fund
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Emergency Contacts</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li className="text-[#C0C0C0]">24/7 Network Alert: (555) 911-HELP</li>
                <li className="text-[#C0C0C0]">Legal Emergency: (555) LAW-HELP</li>
                <li className="text-[#C0C0C0]">Theft Hotline: (555) STOP-THEFT</li>
                <li className="text-[#C0C0C0]">Brotherhood Support: (555) BROTHERHOOD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Battle Cry</h3>
              <div className="space-y-3 font-['Roboto_Condensed',_sans-serif]">
                <p className="text-[#C0C0C0] font-bold">"ATTACK ONE"</p>
                <p className="text-[#C0C0C0]">"FACE ALL"</p>
                <p className="text-[#C0C0C0]">"BROTHERHOOD PROTECTION"</p>
                <p className="text-[#C0C0C0]">"UNITED WE DEFEND"</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center">
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-2">
              &copy; {new Date().getFullYear()} Patriot Hauls Network. Protected by brotherhood, defended by unity.
            </p>
            <p className="text-[#B7941D] font-bold font-['Oswald',_sans-serif]">
              "WE DON'T JUST RENT TRAILERS - WE PROTECT FAMILIES"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
