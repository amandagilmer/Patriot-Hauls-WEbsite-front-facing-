import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, CreditCard, Shield, Truck, Info } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RentTrailerPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const trailer = {
    id: params.id,
    title: "Utility Trailer",
    description: "Perfect for hauling equipment, furniture, and more",
    price: 45,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 124,
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
          <h1 className="text-3xl font-bold mb-6 font-['Bebas_Neue',_sans-serif]">RENT A TRAILER</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Booking Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-6 font-['Oswald',_sans-serif]">Booking Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Input type="date" id="pickup-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pickup-time">Pickup Time</Label>
                    <Select defaultValue="9am">
                      <SelectTrigger id="pickup-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="12pm">12:00 PM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                        <SelectItem value="5pm">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return-date">Return Date</Label>
                    <Input type="date" id="return-date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return-time">Return Time</Label>
                    <Select defaultValue="5pm">
                      <SelectTrigger id="return-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="12pm">12:00 PM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                        <SelectItem value="5pm">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">Renter Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="drivers-license">Driver's License #</Label>
                    <Input id="drivers-license" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">Vehicle Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-make">Vehicle Make</Label>
                    <Input id="vehicle-make" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-model">Vehicle Model</Label>
                    <Input id="vehicle-model" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-year">Vehicle Year</Label>
                    <Input id="vehicle-year" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license-plate">License Plate</Label>
                    <Input id="license-plate" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">Add-ons & Insurance</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="insurance" />
                    <Label htmlFor="insurance" className="flex items-center">
                      <span>Damage Protection ($15/day)</span>
                      <Info className="h-4 w-4 text-[#4F5D75] ml-1 cursor-help" />
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="hitch" />
                    <Label htmlFor="hitch">Hitch Rental ($10 flat fee)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="straps" />
                    <Label htmlFor="straps">Tie-down Straps ($5 flat fee)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="delivery" />
                    <Label htmlFor="delivery">Trailer Delivery & Pickup ($50 flat fee)</Label>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-['Oswald',_sans-serif]">Payment Information</h3>
                <Tabs defaultValue="credit-card" className="mb-8">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>
                  <TabsContent value="credit-card" className="p-4 border rounded-md mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="XXX" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="name-on-card">Name on Card</Label>
                        <Input id="name-on-card" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="p-4 border rounded-md mt-2">
                    <p className="text-center text-[#4F5D75] mb-4">
                      You will be redirected to PayPal to complete your payment after reviewing your order.
                    </p>
                    <div className="flex justify-center">
                      <Image src="/placeholder.svg?height=60&width=200" alt="PayPal" width={200} height={60} />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex items-center space-x-2 mb-8">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#C41E3A] hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#C41E3A] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button className="w-full bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-lg">Complete Reservation</Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 font-['Oswald',_sans-serif]">Order Summary</h2>

                  <div className="flex items-center mb-6">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden">
                      <Image
                        src={trailer.image || "/placeholder.svg"}
                        alt={trailer.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">{trailer.title}</h3>
                      <p className="text-sm text-[#4F5D75]">{trailer.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-[#4F5D75] mr-2" />
                      <span className="text-sm">June 15, 2025 - June 17, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#4F5D75] mr-2" />
                      <span className="text-sm">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-[#4F5D75] mr-2" />
                      <span className="text-sm">Self Pickup</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Trailer Rental (3 days)</span>
                      <span>${trailer.price * 3}</span>
                    </div>
                    <div className="flex justify-between text-[#4F5D75]">
                      <span>Damage Protection</span>
                      <span>$45</span>
                    </div>
                    <div className="flex justify-between text-[#4F5D75]">
                      <span>Hitch Rental</span>
                      <span>$10</span>
                    </div>
                    <div className="flex justify-between text-[#4F5D75]">
                      <span>Taxes & Fees</span>
                      <span>$20</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${trailer.price * 3 + 45 + 10 + 20}</span>
                  </div>

                  <div className="mt-6 p-4 bg-[#F5F5F5] rounded-md">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Shield className="h-5 w-5 text-[#C41E3A] mr-2" />
                      Rental Protection
                    </h3>
                    <p className="text-sm text-[#4F5D75]">
                      Your rental includes basic insurance coverage. For complete peace of mind, we recommend adding our
                      Damage Protection plan.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-[#F5F5F5] rounded-md">
                    <h3 className="font-bold mb-2 flex items-center">
                      <CreditCard className="h-5 w-5 text-[#C41E3A] mr-2" />
                      Secure Payment
                    </h3>
                    <p className="text-sm text-[#4F5D75]">
                      Your payment information is encrypted and secure. We never store your full credit card details.
                    </p>
                  </div>
                </CardContent>
              </Card>
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
