import Link from "next/link"
import Image from "next/image"
import { Star, Shield, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NetworkOperatorCardProps {
  name: string
  location: string
  background: string
  image: string
  trailerCount: number
  rating: number
  specialties: string[]
  motto: string
}

export function NetworkOperatorCard({
  name,
  location,
  background,
  image,
  trailerCount,
  rating,
  specialties,
  motto,
}: NetworkOperatorCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-[#4F5D75] hover:border-[#C41E3A] transition-all hover:shadow-lg bg-white">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-[#1C1C1C]/80 text-white px-2 py-1 rounded text-sm font-bold">
          {trailerCount} TRAILERS
        </div>
        <div className="absolute top-2 left-2 bg-[#C41E3A] text-white px-2 py-1 rounded text-xs font-bold">VETTED</div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <Shield className="h-5 w-5 text-[#C41E3A] mr-2" />
          <h3 className="text-xl font-bold font-['Oswald',_sans-serif]">{name}</h3>
        </div>
        <div className="flex items-center text-[#4F5D75] mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="font-['Roboto_Condensed',_sans-serif]">{location}</span>
        </div>
        <p className="text-sm text-[#4F5D75] mb-3 font-['Roboto_Condensed',_sans-serif]">{background}</p>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-[#B7941D] text-[#B7941D]" />
            <span className="ml-1 text-sm font-bold">{rating}</span>
          </div>
          <span className="text-xs text-[#4F5D75] ml-2 font-['Roboto_Condensed',_sans-serif]">BROTHERHOOD RATING</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="text-xs border-[#4F5D75] text-[#4F5D75]">
              {specialty}
            </Badge>
          ))}
        </div>

        <blockquote className="text-sm italic text-[#4F5D75] mb-4 border-l-2 border-[#C41E3A] pl-3 font-['Roboto_Condensed',_sans-serif]">
          "{motto}"
        </blockquote>

        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-xs">
            <Link href={`/operators/${name.toLowerCase().replace(/\s+/g, "-")}`}>VIEW TRAILERS</Link>
          </Button>
          <Button asChild className="flex-1 bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-xs">
            <Link href={`/operators/${name.toLowerCase().replace(/\s+/g, "-")}/contact`}>CONTACT</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
