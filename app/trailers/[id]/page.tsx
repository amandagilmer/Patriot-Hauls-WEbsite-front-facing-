import Link from "next/link"
import Image from "next/image"
import { Star, Calendar, Clock, Shield, Truck, Info, CheckCircle } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { TrailerCard } from "@/components/trailer-card"

export default function TrailerDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const trailer = {
    id: params.id,
    title: "Utility Trailer",
    description:
      "Perfect for hauling equipment, furniture, and more. This versatile utility trailer is designed for durability and ease of use, making it ideal for both professional contractors and DIY enthusiasts.",
    price: 45,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 4.8,
    reviews: 124,
    specifications: {
      length: "10 feet",
      width: "6 feet",
      height: "2 feet",
      capacity: "2,000 lbs",
      hitch: "2-inch ball",
      axles: "Single axle",
      brakes: "Electric brakes",
      floor: "Treated wood",
      sides: "Removable steel mesh",
      lights: "LED lighting",
    },
    features: [
      "Heavy-duty steel frame construction",
      "Treated wood floor for durability",
      "Removable steel mesh sides",
      "LED lighting for safety",
      "Electric brakes for secure stopping",
      "Easy-load rear gate",
      "Weatherproof wiring harness",
      "Spare tire included",
      "Anti-theft features",
      "DOT compliant",
    ],
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
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-3/5">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={trailer.images[0] || "/placeholder.svg"}
                  alt={trailer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {trailer.images.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-md overflow-hidden">
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

            {/* Trailer Details */}
            <div className="lg:w-2/5">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <h1 className="text-3xl font-bold font-['Bebas_Neue',_sans-serif]">{trailer.title}</h1>
                <div className="flex items-center mt-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-[#B7941D] text-[#B7941D]" />
                    <span className="ml-1 font-medium">{trailer.rating}</span>
                  </div>
                  <span className="text-sm text-[#4F5D75] ml-1">({trailer.reviews} reviews)</span>
                </div>
                <div className="text-3xl font-bold text-[#C41E3A] mb-4">${trailer.price}/day</div>
                <p className="text-[#4F5D75] mb-6 font-['Roboto_Condensed',_sans-serif]">{trailer.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#4F5D75] mr-2" />
                    <span className="text-sm">Available Now</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#4F5D75] mr-2" />
                    <span className="text-sm">24/7 Pickup</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-[#4F5D75] mr-2" />
                    <span className="text-sm">Insurance Available</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-[#4F5D75] mr-2" />
                    <span className="text-sm">Delivery Options</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button asChild className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-lg">
                    <Link href={`/trailers/${trailer.id}/rent`}>Rent Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#4F5D75] text-[#4F5D75] hover:bg-[#4F5D75]/10 text-lg"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trailer Information Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="specifications">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="p-6 border rounded-md mt-2">
                <h2 className="text-2xl font-bold mb-4 font-['Oswald',_sans-serif]">Trailer Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(trailer.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <Info className="h-5 w-5 text-[#C41E3A] mr-2" />
                      <span className="font-medium capitalize">{key}:</span>
                      <span className="ml-2 text-[#4F5D75]">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-6 border rounded-md mt-2">
                <h2 className="text-2xl font-bold mb-4 font-['Oswald',_sans-serif]">Trailer Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trailer.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#C41E3A] mr-2 flex-shrink-0" />
                      <span className="text-[#4F5D75]">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-6 border rounded-md mt-2">
                <h2 className="text-2xl font-bold mb-4 font-['Oswald',_sans-serif]">Customer Reviews</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Reviewer"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold">John Doe</h4>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < 5 ? "fill-[#B7941D] text-[#B7941D]" : "fill-muted text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="text-xs text-[#4F5D75] ml-2">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-[#4F5D75]">
                          This trailer was perfect for my moving needs. It was clean, well-maintained, and easy to tow.
                          The rental process was smooth and the staff was very helpful. Would definitely rent again!
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Similar Trailers */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 font-['Bebas_Neue',_sans-serif]">SIMILAR TRAILERS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TrailerCard
                id="2"
                title="Car Hauler"
                description="Designed for safely transporting vehicles"
                price={75}
                image="/placeholder.svg?height=300&width=400"
                rating={4.9}
                reviews={86}
              />
              <TrailerCard
                id="3"
                title="Dump Trailer"
                description="Ideal for construction debris and landscaping"
                price={95}
                image="/placeholder.svg?height=300&width=400"
                rating={4.7}
                reviews={92}
              />
              <TrailerCard
                id="4"
                title="Enclosed Trailer"
                description="Weather-protected storage for valuable items"
                price={85}
                image="/placeholder.svg?height=300&width=400"
                rating={4.6}
                reviews={78}
              />
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
                  <Link href="/trailers" className="text-[#C0C0C0] hover:text-white">
                    Browse Trailers
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-[#C0C0C0] hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-[#C0C0C0] hover:text-white">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#C0C0C0] hover:text-white">
                    FAQ
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
