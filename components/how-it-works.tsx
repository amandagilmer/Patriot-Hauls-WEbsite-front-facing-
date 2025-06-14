import { Search, Calendar, Truck, CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
          <Search className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">1. Browse Trailers</h3>
        <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
          Search our extensive inventory of trailers to find the perfect one for your needs
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">2. Book Online</h3>
        <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
          Select your rental dates and complete the reservation process in minutes
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
          <Truck className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">3. Pick Up</h3>
        <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
          Visit our convenient location to pick up your trailer with a quick inspection
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">4. Return</h3>
        <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
          Return the trailer at the scheduled time and be on your way - it's that simple
        </p>
      </div>
    </div>
  )
}
