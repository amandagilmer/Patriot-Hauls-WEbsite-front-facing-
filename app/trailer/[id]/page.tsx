import Link from "next/link"
import Image from "next/image"
import {
  Star,
  Calendar,
  Clock,
  Shield,
  Truck,
  Info,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  Heart,
  Share2,
  Zap,
} from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TrailerDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const trailer = {
    id: params.id,
    title: "Heavy-Duty Utility Trailer",
    description:
      "Built tough for the working man. This trailer has hauled everything from construction equipment to family moves. Reliable, dependable, and ready for your next job.",
    price: 65,
    originalPrice: 85,
    images: [
      "/placeholder.svg?height=600&width=800&text=Main+Trailer+View",
      "/placeholder.svg?height=600&width=800&text=Side+View",
      "/placeholder.svg?height=600&width=800&text=Rear+Gate",
      "/placeholder.svg?height=600&width=800&text=Interior+View",
      "/placeholder.svg?height=600&width=800&text=Hitch+Detail",
    ],
    rating: 4.9,
    reviews: 47,
    category: "Utility Trailer",
    features: [
      "Heavy-duty steel frame",
      "Treated wood deck",
      "LED lighting package",
      "Electric brakes",
      "Removable side rails",
      "Spare tire included",
      "Weatherproof wiring",
      "DOT compliant",
      "Easy-load ramp gate",
      "Tie-down points",
    ],
    specifications: {
      length: "16 feet",
      width: "8 feet",
      height: "2 feet",
      capacity: "7,000 lbs",
      hitch: "2-5/16 inch ball",
      axles: "Tandem axle",
      brakes: "Electric brakes",
      floor: "Treated lumber",
      sides: "Removable steel mesh",
      lights: "LED lighting system",
    },
    availability: "Available Now",
    location: "Liberty, TX",
    distance: "2.3 miles away",
  }

  const operator = {
    name: "Mike's Patriot Rentals",
    ownerName: "Mike Rodriguez",
    veteranOwned: true,
    yearsInBusiness: 8,
    totalRentals: 1247,
    responseTime: "Under 2 hours",
    rating: 4.8,
    reviews: 156,
    phone: "(713) 555-0123",
    email: "mike@mikespatriotrentals.com",
    address: "1234 Freedom Blvd, Liberty, TX 77575",
    bio: "Marine Corps veteran turned small business owner. I know what it means to serve, and now I serve my community with reliable equipment and honest service. Every rental helps support local jobs and veteran employment.",
    certifications: ["DOT Certified", "Veteran Owned", "BBB A+ Rating"],
    avatar: "/placeholder.svg?height=100&width=100&text=Mike",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-[#F5F5F5]">
          <div className="container py-4">
            <div className="flex items-center space-x-2 text-sm text-[#4F5D75]">
              <Link href="/browse" className="hover:text-[#C41E3A]">
                Browse Equipment
              </Link>
              <span>/</span>
              <Link href="/browse?category=utility" className="hover:text-[#C41E3A]">
                Utility Trailers
              </Link>
              <span>/</span>
              <span className="text-[#1C1C1C] font-medium">{trailer.title}</span>
            </div>
          </div>
        </div>

        <div className="container py-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-[#C41E3A] text-white">
                  {trailer.category}
                </Badge>
                {operator.veteranOwned && (
                  <Badge variant="outline" className="border-[#B7941D] text-[#B7941D]">
                    <Award className="h-3 w-3 mr-1" />
                    Veteran Owned
                  </Badge>
                )}
                <Badge variant="outline" className="border-green-600 text-green-600">
                  <Zap className="h-3 w-3 mr-1" />
                  {trailer.availability}
                </Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold font-['Bebas_Neue',_sans-serif] mb-2">{trailer.title}</h1>
              <div className="flex items-center gap-4 text-[#4F5D75]">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-[#B7941D] text-[#B7941D] mr-1" />
                  <span className="font-medium">{trailer.rating}</span>
                  <span className="ml-1">({trailer.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>
                    {trailer.location} • {trailer.distance}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:mt-0">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={trailer.images[0] || "/placeholder.svg"}
                    alt={trailer.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    1 / {trailer.images.length}
                  </div>
                  <Button variant="outline" size="sm" className="absolute bottom-4 right-4 bg-white/90 hover:bg-white">
                    View All Photos
                  </Button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {trailer.images.slice(0, 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-20 rounded-md overflow-hidden cursor-pointer hover:opacity-80"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${trailer.title} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Trailer Information Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specs</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 font-['Oswald',_sans-serif]">About This Trailer</h3>
                      <p className="text-[#4F5D75] leading-relaxed">{trailer.description}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Truck className="h-8 w-8 text-[#C41E3A] mx-auto mb-2" />
                        <div className="font-bold">{trailer.specifications.capacity}</div>
                        <div className="text-sm text-[#4F5D75]">Max Capacity</div>
                      </div>
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Info className="h-8 w-8 text-[#C41E3A] mx-auto mb-2" />
                        <div className="font-bold">{trailer.specifications.length}</div>
                        <div className="text-sm text-[#4F5D75]">Length</div>
                      </div>
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Shield className="h-8 w-8 text-[#C41E3A] mx-auto mb-2" />
                        <div className="font-bold">{trailer.specifications.brakes}</div>
                        <div className="text-sm text-[#4F5D75]">Safety</div>
                      </div>
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Clock className="h-8 w-8 text-[#C41E3A] mx-auto mb-2" />
                        <div className="font-bold">24/7</div>
                        <div className="text-sm text-[#4F5D75]">Pickup</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(trailer.specifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-[#F5F5F5] rounded-lg">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="text-[#4F5D75]">{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {trailer.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-[#F5F5F5] rounded-lg">
                        <CheckCircle className="h-5 w-5 text-[#C41E3A] mr-3 flex-shrink-0" />
                        <span className="text-[#4F5D75]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-['Oswald',_sans-serif]">Customer Reviews</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-[#B7941D] text-[#B7941D] mr-1" />
                        <span className="font-bold">{trailer.rating}</span>
                        <span className="text-[#4F5D75] ml-1">({trailer.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <Card key={review}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                                  <Image
                                    src="/placeholder.svg?height=40&width=40&text=User"
                                    alt="Reviewer"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-bold">John D.</h4>
                                  <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < 5 ? "fill-[#B7941D] text-[#B7941D]" : "fill-muted text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-xs text-[#4F5D75]">2 weeks ago</span>
                            </div>
                            <p className="text-[#4F5D75]">
                              Perfect trailer for my construction business. Mike was professional and the equipment was
                              exactly as described. Will definitely rent again!
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Operator Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center font-['Oswald',_sans-serif]">
                    <Users className="h-5 w-5 mr-2 text-[#C41E3A]" />
                    Meet Your Operator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={operator.avatar || "/placeholder.svg"}
                        alt={operator.ownerName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{operator.name}</h3>
                        {operator.veteranOwned && (
                          <Badge variant="outline" className="border-[#B7941D] text-[#B7941D]">
                            <Award className="h-3 w-3 mr-1" />
                            Veteran Owned
                          </Badge>
                        )}
                      </div>
                      <p className="text-[#4F5D75] mb-3">{operator.bio}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="font-bold text-[#C41E3A]">{operator.yearsInBusiness}</div>
                          <div className="text-xs text-[#4F5D75]">Years in Business</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-[#C41E3A]">{operator.totalRentals}</div>
                          <div className="text-xs text-[#4F5D75]">Total Rentals</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-[#C41E3A]">{operator.rating}</div>
                          <div className="text-xs text-[#4F5D75]">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-[#C41E3A]">{operator.responseTime}</div>
                          <div className="text-xs text-[#4F5D75]">Response Time</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {operator.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-[#E5E5E5]">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-[#C41E3A]">${trailer.price}</span>
                        <span className="text-lg text-[#4F5D75]">/ day</span>
                        {trailer.originalPrice && (
                          <span className="text-sm text-[#4F5D75] line-through ml-2">${trailer.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        <Zap className="h-4 w-4 inline mr-1" />
                        {trailer.availability}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-date" className="text-sm font-medium">
                            Pickup Date
                          </Label>
                          <Input type="date" id="pickup-date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="return-date" className="text-sm font-medium">
                            Return Date
                          </Label>
                          <Input type="date" id="return-date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pickup-time" className="text-sm font-medium">
                          Pickup Time
                        </Label>
                        <Select defaultValue="9am">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="12pm">12:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="6pm">6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 p-4 bg-[#F5F5F5] rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span>Rental (3 days)</span>
                        <span>${trailer.price * 3}</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#4F5D75]">
                        <span>Service fee</span>
                        <span>$25</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#4F5D75]">
                        <span>Insurance (optional)</span>
                        <span>$45</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${trailer.price * 3 + 25 + 45}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-lg py-6">
                        <Link href={`/trailer/${trailer.id}/book`}>
                          <Calendar className="h-5 w-5 mr-2" />
                          Book Now
                        </Link>
                      </Button>

                      <Button variant="outline" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call {operator.ownerName}
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium text-blue-900 mb-1">Brotherhood Protection</div>
                          <div className="text-blue-700">
                            Your rental is protected by our network guarantee and operator vetting process.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#1C1C1C] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Bebas_Neue',_sans-serif]">PATRIOT HAULS</h3>
              <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                Empowering independence and opportunity through reliable transportation solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Quick Links</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/browse" className="text-[#C0C0C0] hover:text-white">
                    Browse Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/operators" className="text-[#C0C0C0] hover:text-white">
                    Our Operators
                  </Link>
                </li>
                <li>
                  <Link href="/veterans" className="text-[#C0C0C0] hover:text-white">
                    Veterans
                  </Link>
                </li>
                <li>
                  <Link href="/protection" className="text-[#C0C0C0] hover:text-white">
                    Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Contact Us</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li className="text-[#C0C0C0]">1234 Freedom Road</li>
                <li className="text-[#C0C0C0]">Liberty, USA 12345</li>
                <li className="text-[#C0C0C0]">(555) 123-4567</li>
                <li className="text-[#C0C0C0]">info@patriothauls.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Newsletter</h3>
              <p className="text-[#C0C0C0] mb-4 font-['Roboto_Condensed',_sans-serif]">
                Subscribe for updates and special offers
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-md bg-[#333] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#C41E3A]"
                />
                <Button className="bg-[#C41E3A] hover:bg-[#C41E3A]/90">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
            <p>&copy; {new Date().getFullYear()} Patriot Hauls. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
