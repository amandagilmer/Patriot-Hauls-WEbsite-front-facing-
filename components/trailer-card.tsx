import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TrailerCardProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  rating: number
  reviews: number
}

export function TrailerCard({ id, title, description, price, image, rating, reviews }: TrailerCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-[#E5E5E5] transition-all hover:border-[#C41E3A]/20 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-[#1C1C1C] text-white px-2 py-1 rounded text-sm font-bold">
          ${price}/day
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold font-['Oswald',_sans-serif]">{title}</h3>
        <p className="text-[#4F5D75] mt-1 font-['Roboto_Condensed',_sans-serif]">{description}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-[#B7941D] text-[#B7941D]" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-[#4F5D75] ml-1">({reviews} reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild className="flex-1 bg-[#4F5D75] hover:bg-[#4F5D75]/90">
          <Link href={`/trailers/${id}`}>View Details</Link>
        </Button>
        <Button asChild className="flex-1 bg-[#C41E3A] hover:bg-[#C41E3A]/90">
          <Link href={`/trailers/${id}/rent`}>Rent Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
