import { Zap, DollarSign, Shield } from "lucide-react"

export function AntiCorporateSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
            U-HAUL'S WORST NIGHTMARE
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-['Roboto_Condensed',_sans-serif] leading-relaxed">
            While they enrich shareholders, we enrich neighbors. While they offer faceless service, we offer
            brotherhood.
            <span className="block mt-2 font-bold text-[#FF6B35]">This is what happens when workers fight back.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#1C1C1C]/60 p-6 rounded-lg border-2 border-[#FF6B35]">
            <div className="flex items-center mb-4">
              <div className="bg-[#FF6B35] p-2 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Oswald',_sans-serif]">THEM vs US</h3>
            </div>
            <div className="space-y-3 text-white font-['Roboto_Condensed',_sans-serif]">
              <div className="flex justify-between">
                <span className="text-red-300">CORPORATE PROFITS</span>
                <span className="text-[#B7941D] font-bold">COMMUNITY INVESTMENT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-300">DISTANT SHAREHOLDERS</span>
                <span className="text-[#B7941D] font-bold">LOCAL NEIGHBORS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-300">FACELESS SERVICE</span>
                <span className="text-[#B7941D] font-bold">PERSONAL ACCOUNTABILITY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-300">CHEAP EQUIPMENT</span>
                <span className="text-[#B7941D] font-bold">BATTLE-TESTED QUALITY</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1C1C1C]/60 p-6 rounded-lg border-2 border-[#B7941D]">
            <div className="flex items-center mb-4">
              <div className="bg-[#B7941D] p-2 rounded-full mr-4">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Oswald',_sans-serif]">OUR GUARANTEE</h3>
            </div>
            <ul className="space-y-3 text-white font-['Roboto_Condensed',_sans-serif]">
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span>Every operator vetted and insured</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span>Heavy-duty trailers built for real work</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span>Southern hospitality with working-class values</span>
              </li>
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-[#FF6B35] mr-2" />
                <span>Brotherhood protection - mess with one, deal with all</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-bold text-white font-['Bebas_Neue',_sans-serif] mb-4">
            "BUILT BY BLUE-COLLAR. OWNED BY BLUE-COLLAR."
          </p>
          <p className="text-lg text-[#FF6B35] font-bold font-['Oswald',_sans-serif]">
            Try us once, and you'll never go back to corporate rental again.
          </p>
        </div>
      </div>
    </section>
  )
}
