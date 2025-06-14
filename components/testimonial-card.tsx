import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-[#E5E5E5]">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-[#B7941D] text-[#B7941D]" : "fill-muted text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-[#4F5D75] mb-6 font-['Roboto_Condensed',_sans-serif]">"{content}"</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="ml-4">
            <h4 className="font-bold font-['Oswald',_sans-serif]">{name}</h4>
            <p className="text-sm text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
