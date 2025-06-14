import Link from "next/link"
import { Shield, Users } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-3 mr-8">
        <div className="relative">
          <Shield className="h-8 w-8 text-[#C41E3A]" />
          <Users className="h-4 w-4 text-[#FF6B35] absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="font-bold text-xl font-['Bebas_Neue',_sans-serif] text-[#C41E3A]">PATRIOT HAULS</span>
          <div className="text-xs font-bold text-[#FF6B35] font-['Oswald',_sans-serif] -mt-1">NETWORK</div>
        </div>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-bold font-['Oswald',_sans-serif]">
        <Link href="/operators" className="transition-colors hover:text-[#C41E3A] text-white">
          LOCAL OPERATORS
        </Link>
        <Link href="/network" className="transition-colors hover:text-[#C41E3A] text-white">
          THE NETWORK
        </Link>
        <Link href="/mission" className="transition-colors hover:text-[#C41E3A] text-white">
          OUR MISSION
        </Link>
        <Link href="/veterans" className="transition-colors hover:text-[#C41E3A] text-white">
          VETERANS
        </Link>
        <Link href="/protection" className="transition-colors hover:text-[#C41E3A] text-white">
          PROTECTION
        </Link>
      </nav>
    </div>
  )
}
