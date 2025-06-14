import { AlertTriangle, Shield, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrotherhoodGuarantee() {
  return (
    <section className="py-16 bg-[#1C1C1C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#FF6B35] text-black px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-['Oswald',_sans-serif]">ZERO TOLERANCE POLICY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
            STEAL FROM ONE OF US?
            <br />
            <span className="text-[#C41E3A]">ANSWER TO ALL OF US.</span>
          </h2>
          <p className="text-xl text-[#C0C0C0] max-w-4xl mx-auto font-['Roboto_Condensed',_sans-serif] leading-relaxed">
            This isn't just a rental network - it's a brotherhood. When you mess with our equipment, our operators, or
            our customers, you're not facing one angry business owner. You're facing the entire working-class family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#C41E3A]/20 p-6 rounded-lg border-2 border-[#C41E3A] text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-['Oswald',_sans-serif]">NETWORK PROTECTION</h3>
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
              Every operator is backed by the full network. Damage, theft, or fraud gets reported across all locations
              immediately.
            </p>
          </div>
          <div className="bg-[#C41E3A]/20 p-6 rounded-lg border-2 border-[#C41E3A] text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-['Oswald',_sans-serif]">BROTHERHOOD RESPONSE</h3>
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
              Our operators look out for each other. Cross one of us, and you'll find yourself blacklisted from the
              entire network.
            </p>
          </div>
          <div className="bg-[#C41E3A]/20 p-6 rounded-lg border-2 border-[#C41E3A] text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-['Oswald',_sans-serif]">SWIFT JUSTICE</h3>
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
              We don't mess around. Legal action, law enforcement, and community accountability - whatever it takes.
            </p>
          </div>
        </div>

        <div className="bg-[#FF6B35]/20 border-2 border-[#FF6B35] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-['Oswald',_sans-serif]">THE PATRIOT HAULS PROMISE</h3>
          <p className="text-lg text-[#C0C0C0] mb-6 font-['Roboto_Condensed',_sans-serif] max-w-3xl mx-auto">
            When you rent from our network, you're not just getting a trailer - you're getting the protection and
            backing of hundreds of working-class Americans who've got your back. That's the power of brotherhood.
          </p>
          <Button size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold text-lg">
            JOIN THE PROTECTED NETWORK
          </Button>
        </div>
      </div>
    </section>
  )
}
