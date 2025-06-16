"use client"

import Link from "next/link"
import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Filter, Grid, MapIcon, Search, Star } from "lucide-react"

export default function BrowsePage() {
  const [viewMode, setViewMode] = useState<"split" | "list" | "map">("split")
  const [priceRange, setPriceRange] = useState([150])

  const mockListings = [
    {
      id: "1",
      title: "Heavy Duty Utility Trailer",
      description: "Perfect for construction equipment and materials",
      price: 65,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 124,
      location: "Dallas, TX",
      operator: "Lone Star Hauling",
      distance: "2.3 miles",
      available: true,
      features: ["Ramps", "Tie-downs", "LED Lights"],
    },
    {
      id: "2",
      title: "Enclosed Car Hauler",
      description: "Weather-protected vehicle transport",
      price: 95,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 86,
      location: "Fort Worth, TX",
      operator: "Patriot Transport Co.",
      distance: "4.1 miles",
      available: true,
      features: ["Climate Control", "Winch", "Side Door"],
    },
    {
      id: "3",
      title: "Dump Trailer - Commercial",
      description: "Heavy-duty hydraulic dump for construction",
      price: 125,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 92,
      location: "Arlington, TX",
      operator: "Freedom Haulers LLC",
      distance: "6.8 miles",
      available: false,
      features: ["Hydraulic Lift", "Tarp System", "Heavy Duty"],
    },
    {
      id: "4",
      title: "Equipment Trailer",
      description: "Low-profile for heavy machinery transport",
      price: 110,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviews: 78,
      location: "Plano, TX",
      operator: "Veteran Hauling Services",
      distance: "8.2 miles",
      available: true,
      features: ["Low Deck", "Ramps", "Chain Hooks"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#C41E3A] bg-[#1C1C1C] text-white">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-white font-['Oswald',_sans-serif]"
            >
              Login
            </Link>
            <Button asChild className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1C1C1C] py-8">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Bebas_Neue',_sans-serif] mb-4">
              FREEDOM TO HAUL
            </h1>
            <p className="text-[#C0C0C0] text-lg font-['Roboto_Condensed',_sans-serif] mb-6">
              Find the perfect trailer from our network of patriot operators
            </p>

            {/* Quick Search */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-[#4F5D75]" />
                  <Input placeholder="Enter location..." className="pl-10 border-[#E5E5E5] focus:border-[#C41E3A]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="border-[#E5E5E5] focus:border-[#C41E3A]">
                    <SelectValue placeholder="Equipment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Equipment</SelectItem>
                    <SelectItem value="utility">Utility Trailers</SelectItem>
                    <SelectItem value="car-hauler">Car Haulers</SelectItem>
                    <SelectItem value="dump">Dump Trailers</SelectItem>
                    <SelectItem value="enclosed">Enclosed Trailers</SelectItem>
                    <SelectItem value="equipment">Equipment Trailers</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="any">
                  <SelectTrigger className="border-[#E5E5E5] focus:border-[#C41E3A]">
                    <SelectValue placeholder="Date Needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Date</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="weekend">This Weekend</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Controls */}
      <section className="border-b bg-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">View:</span>
              <div className="flex rounded-lg border border-[#E5E5E5] overflow-hidden">
                <button
                  onClick={() => setViewMode("split")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === "split" ? "bg-[#C41E3A] text-white" : "bg-white text-[#4F5D75] hover:bg-gray-50"
                  }`}
                >
                  <Grid className="h-4 w-4 mr-1 inline" />
                  Split
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === "list" ? "bg-[#C41E3A] text-white" : "bg-white text-[#4F5D75] hover:bg-gray-50"
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === "map" ? "bg-[#C41E3A] text-white" : "bg-white text-[#4F5D75] hover:bg-gray-50"
                  }`}
                >
                  <MapIcon className="h-4 w-4 mr-1 inline" />
                  Map
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#4F5D75]">{mockListings.length} trailers found</span>
              <Button variant="outline" size="sm" className="border-[#E5E5E5]">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className={`container-fluid ${viewMode === "split" ? "px-0" : "container"}`}>
          <div className={`${viewMode === "split" ? "grid grid-cols-1 lg:grid-cols-2 min-h-[600px]" : ""}`}>
            {/* Listings Side */}
            {(viewMode === "split" || viewMode === "list") && (
              <div
                className={`${viewMode === "split" ? "border-r border-[#E5E5E5] overflow-y-auto max-h-[600px]" : ""} p-6`}
              >
                <div className="space-y-6">
                  {mockListings.map((listing) => (
                    <div
                      key={listing.id}
                      className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                        {/* Image */}
                        <div className="relative h-48 md:h-32">
                          <img
                            src={listing.image || "/placeholder.svg"}
                            alt={listing.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute top-2 right-2 bg-[#1C1C1C] text-white px-2 py-1 rounded text-sm font-bold">
                            ${listing.price}/day
                          </div>
                          {!listing.available && (
                            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                              <Badge variant="destructive">Unavailable</Badge>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="md:col-span-2 space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold font-['Oswald',_sans-serif]">{listing.title}</h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-[#B7941D] text-[#B7941D]" />
                              <span className="ml-1 text-sm font-medium">{listing.rating}</span>
                              <span className="text-sm text-[#4F5D75] ml-1">({listing.reviews})</span>
                            </div>
                          </div>

                          <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">{listing.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {listing.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-[#4F5D75]">
                                <MapPin className="h-4 w-4 mr-1" />
                                {listing.location} • {listing.distance}
                              </div>
                              <div className="text-sm font-medium">{listing.operator}</div>
                            </div>

                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-[#4F5D75] text-[#4F5D75] hover:bg-[#4F5D75] hover:text-white"
                              >
                                Details
                              </Button>
                              <Button
                                size="sm"
                                disabled={!listing.available}
                                className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 disabled:opacity-50"
                              >
                                {listing.available ? "Book Now" : "Unavailable"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Side */}
            {(viewMode === "split" || viewMode === "map") && (
              <div
                className={`${viewMode === "split" ? "sticky top-16" : ""} bg-gray-100 flex items-center justify-center min-h-[600px]`}
              >
                <div className="text-center p-8">
                  <MapIcon className="h-16 w-16 text-[#4F5D75] mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-['Oswald',_sans-serif] mb-2">Interactive Map</h3>
                  <p className="text-[#4F5D75] font-['Roboto_Condensed',_sans-serif] mb-4">
                    Map integration coming soon. This will show trailer locations, operator hubs, and real-time
                    availability.
                  </p>
                  <div className="space-y-2 text-sm text-[#4F5D75]">
                    <div>📍 Dallas Hub - 12 trailers available</div>
                    <div>📍 Fort Worth Hub - 8 trailers available</div>
                    <div>📍 Arlington Hub - 15 trailers available</div>
                    <div>📍 Plano Hub - 6 trailers available</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Bebas_Neue',_sans-serif]">PATRIOT HAULS</h3>
              <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                Freedom to haul. Brotherhood before profit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Browse</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/browse" className="text-[#C0C0C0] hover:text-white">
                    All Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/browse?type=utility" className="text-[#C0C0C0] hover:text-white">
                    Utility Trailers
                  </Link>
                </li>
                <li>
                  <Link href="/browse?type=car-hauler" className="text-[#C0C0C0] hover:text-white">
                    Car Haulers
                  </Link>
                </li>
                <li>
                  <Link href="/browse?type=dump" className="text-[#C0C0C0] hover:text-white">
                    Dump Trailers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Network</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/operators" className="text-[#C0C0C0] hover:text-white">
                    Find Operators
                  </Link>
                </li>
                <li>
                  <Link href="/veterans" className="text-[#C0C0C0] hover:text-white">
                    Veteran Network
                  </Link>
                </li>
                <li>
                  <Link href="/protection" className="text-[#C0C0C0] hover:text-white">
                    Brotherhood Protection
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="text-[#C0C0C0] hover:text-white">
                    Our Mission
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif]">Support</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li className="text-[#C0C0C0]">(555) PATRIOT</li>
                <li className="text-[#C0C0C0]">support@patriothauls.com</li>
                <li>
                  <Link href="/help" className="text-[#C0C0C0] hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#C0C0C0] hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
            <p>&copy; {new Date().getFullYear()} Patriot Hauls Network. Freedom to haul.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
