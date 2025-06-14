"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Truck, Award, AlertTriangle, Star, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetworkOperatorCard } from "@/components/network-operator-card"
import { BrotherhoodGuarantee } from "@/components/brotherhood-guarantee"
import { MainNav } from "@/components/main-nav"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [rentalType, setRentalType] = useState<"round-trip" | "one-way">("round-trip")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#C41E3A] bg-[#1C1C1C] text-white">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link
              href="/operators"
              className="text-sm font-bold text-[#FF6B35] transition-colors hover:text-white font-['Oswald',_sans-serif]"
            >
              JOIN THE NETWORK
            </Link>
            <Button asChild className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold">
              <Link href="/find-operator">FIND LOCAL OPERATOR</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Search */}
        <section className="relative bg-[#1C1C1C] py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Patriot Hauls trailer and truck"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="container relative z-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block rounded-md bg-[#C41E3A] px-4 py-2 text-lg text-white font-bold mb-6 font-['Bebas_Neue',_sans-serif] tracking-wider">
                WE ARE PATRIOT HAULS NETWORK
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-[0.1em] text-white font-['Bebas_Neue',_sans-serif] leading-none mb-4">
                H A U L &nbsp;&nbsp; F R E E D O M
              </h1>
              <h2 className="text-xl md:text-3xl font-bold text-[#FF6B35] font-['Oswald',_sans-serif] mb-6">
                AMERICA'S TRAILER RENTAL NETWORK
              </h2>
              <p className="text-lg md:text-xl text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-8 max-w-4xl mx-auto leading-relaxed">
                A brotherhood of vetted patriots, veterans, and local business owners providing reliable trailer rentals
                across America.{" "}
                <span className="text-[#C41E3A] font-bold">Round-trip or one-way between major hubs.</span>
              </p>

              {/* Seamless Search Experience - Trailer Focused */}
              <div className="bg-gradient-to-r from-[#1C1C1C]/80 to-[#4F5D75]/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-[#C41E3A]/30">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Oswald',_sans-serif]">FIND YOUR TRAILER</h3>

                {/* Rental Type Selection */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#1C1C1C]/60 rounded-lg p-1 flex">
                    <button
                      onClick={() => setRentalType("round-trip")}
                      className={`px-6 py-2 rounded-md font-bold font-['Oswald',_sans-serif] transition-all ${
                        rentalType === "round-trip" ? "bg-[#C41E3A] text-white" : "text-[#C0C0C0] hover:text-white"
                      }`}
                    >
                      ROUND TRIP
                    </button>
                    <button
                      onClick={() => setRentalType("one-way")}
                      className={`px-6 py-2 rounded-md font-bold font-['Oswald',_sans-serif] transition-all ${
                        rentalType === "one-way" ? "bg-[#C41E3A] text-white" : "text-[#C0C0C0] hover:text-white"
                      }`}
                    >
                      ONE WAY
                    </button>
                  </div>
                </div>

                <div
                  className={`grid gap-6 mb-6 ${
                    rentalType === "round-trip" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-4"
                  }`}
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="pickup-location"
                      className="text-sm font-bold text-[#FF6B35] font-['Oswald',_sans-serif]"
                    >
                      {rentalType === "round-trip" ? "RENTAL LOCATION" : "PICKUP LOCATION"}
                    </Label>
                    <Input
                      id="pickup-location"
                      placeholder={rentalType === "round-trip" ? "Enter your city or area" : "Enter pickup city or hub"}
                      className="border-2 border-[#4F5D75] focus:border-[#C41E3A] bg-white/90 text-[#1C1C1C] font-bold"
                    />
                  </div>

                  {rentalType === "one-way" && (
                    <div className="space-y-2">
                      <Label
                        htmlFor="dropoff-location"
                        className="text-sm font-bold text-[#FF6B35] font-['Oswald',_sans-serif]"
                      >
                        DROP-OFF LOCATION
                      </Label>
                      <Input
                        id="dropoff-location"
                        placeholder="Enter drop-off city or hub"
                        className="border-2 border-[#4F5D75] focus:border-[#C41E3A] bg-white/90 text-[#1C1C1C] font-bold"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label
                      htmlFor="pickup-date"
                      className="text-sm font-bold text-[#FF6B35] font-['Oswald',_sans-serif]"
                    >
                      PICKUP DATE
                    </Label>
                    <Input
                      id="pickup-date"
                      type="date"
                      className="border-2 border-[#4F5D75] focus:border-[#C41E3A] bg-white/90 text-[#1C1C1C] font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="return-date"
                      className="text-sm font-bold text-[#FF6B35] font-['Oswald',_sans-serif]"
                    >
                      RETURN DATE
                    </Label>
                    <Input
                      id="return-date"
                      type="date"
                      className="border-2 border-[#4F5D75] focus:border-[#C41E3A] bg-white/90 text-[#1C1C1C] font-bold"
                    />
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-black font-bold text-xl px-12 py-4 rounded-xl"
                >
                  FIND TRAILERS NOW
                </Button>

                {/* One-Way Hub Network Info - only show when one-way is selected */}
                {rentalType === "one-way" && (
                  <div className="mt-4 text-center">
                    <p className="text-[#B7941D] text-sm font-bold font-['Oswald',_sans-serif]">
                      ONE-WAY RENTALS AVAILABLE BETWEEN MAJOR HUBS
                    </p>
                    <p className="text-[#C0C0C0] text-xs font-['Roboto_Condensed',_sans-serif]">
                      Dallas • Houston • Atlanta • Nashville • Phoenix • Birmingham • Tampa • Charlotte
                    </p>
                  </div>
                )}
              </div>

              {/* Network Stats - Updated for Trailer Focus */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif]">500+</div>
                  <div className="text-sm text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                    <strong>Network operators</strong>
                    <br />
                    across America
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif]">2,000+</div>
                  <div className="text-sm text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                    <strong>Trailers available</strong>
                    <br />
                    ready to haul
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif]">25+</div>
                  <div className="text-sm text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                    <strong>Major city hubs</strong>
                    <br />
                    for one-way rentals
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#B7941D] font-['Bebas_Neue',_sans-serif]">100%</div>
                  <div className="text-sm text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                    <strong>Brotherhood backed</strong>
                    <br />
                    network guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                TRAILER RENTALS
              </h2>
              <p className="text-xl text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                From utility hauling to heavy equipment transport - we've got the trailer for your job
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Utility Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Utility Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Perfect for everyday hauling, moving, and general transport needs
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $35/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Enclosed Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Enclosed Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Weather-protected hauling for valuable cargo and sensitive equipment
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $55/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Car Hauler Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Car Haulers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Safe transport for vehicles, ATVs, motorcycles, and recreational equipment
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $65/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Dump Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Dump Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Heavy-duty hauling for construction debris, landscaping, and bulk materials
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $75/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Flatbed Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Flatbed Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Open deck hauling for oversized loads, lumber, and construction materials
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $45/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Equipment Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Equipment Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Heavy-duty trailers for machinery, excavators, and commercial equipment
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $95/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Gooseneck Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Gooseneck Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Maximum capacity hauling for livestock, heavy equipment, and commercial loads
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">STARTING AT $85/DAY</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>

              <div className="bg-[#F5F5F5] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-2 hover:border-[#C41E3A]">
                <div className="relative h-32 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Horse & Livestock Trailers"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Oswald',_sans-serif]">Horse & Livestock Trailers</h3>
                <p className="text-sm text-[#4F5D75] mb-4 font-['Roboto_Condensed',_sans-serif]">
                  Safe transport for horses, cattle, and livestock with specialized ventilation
                </p>
                <div className="text-xs text-[#B7941D] font-bold mb-3">CALL FOR PRICING</div>
                <Button className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 text-white font-bold">Browse All</Button>
              </div>
            </div>

            {/* One-Way Rental Highlight */}
            <div className="bg-gradient-to-r from-[#C41E3A] to-[#8B0000] rounded-xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Bebas_Neue',_sans-serif]">
                NEW: ONE-WAY TRAILER RENTALS
              </h3>
              <p className="text-white/90 mb-4 font-['Roboto_Condensed',_sans-serif] text-lg">
                Pick up in one city, drop off in another! Available between all major network hubs.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4 text-sm">
                {[
                  "Dallas",
                  "Houston",
                  "Atlanta",
                  "Nashville",
                  "Phoenix",
                  "Birmingham",
                  "Tampa",
                  "Charlotte",
                  "Memphis",
                  "Jacksonville",
                ].map((city) => (
                  <span key={city} className="bg-white/20 px-3 py-1 rounded-full text-white font-bold">
                    {city}
                  </span>
                ))}
              </div>
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-black font-bold">
                EXPLORE ONE-WAY RENTALS
              </Button>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold text-lg">
                <Link href="/trailers">VIEW ALL TRAILER CATEGORIES</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Network */}
        <section className="py-16 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
                WHY CHOOSE THE NETWORK?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                While big corporations focus on shareholders, we focus on neighbors. While they offer faceless service,
                we offer brotherhood.
                <span className="block mt-2 font-bold text-[#FF6B35]">
                  This is what happens when workers build something better together.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-[#1C1C1C]/60 p-6 rounded-lg border-2 border-[#FF6B35]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF6B35] p-2 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Oswald',_sans-serif]">CORPORATE vs NETWORK</h3>
                </div>
                <div className="space-y-3 text-white font-['Roboto_Condensed',_sans-serif]">
                  <div className="flex justify-between">
                    <span className="text-red-300">Corporate profits</span>
                    <span className="text-[#B7941D] font-bold">Community investment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-300">Distant shareholders</span>
                    <span className="text-[#B7941D] font-bold">Local neighbors</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-300">Faceless service</span>
                    <span className="text-[#B7941D] font-bold">Personal accountability</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-300">Mass-produced equipment</span>
                    <span className="text-[#B7941D] font-bold">Battle-tested quality</span>
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
                    <span>Brotherhood protection - we've got your back</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl md:text-3xl font-bold text-white font-['Bebas_Neue',_sans-serif] mb-4">
                "BUILT BY BLUE-COLLAR. OWNED BY BLUE-COLLAR."
              </p>
              <p className="text-lg text-[#FF6B35] font-bold font-['Oswald',_sans-serif]">
                Experience the difference of renting from people who actually care.
              </p>
            </div>
          </div>
        </section>

        {/* Network Operators */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                MEET YOUR LOCAL OPERATORS
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Real faces. Real stories. Real accountability. These aren't corporate employees - they're your
                neighbors, fellow veterans, and local business champions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NetworkOperatorCard
                name="Mike 'Tank' Rodriguez"
                location="Dallas, TX"
                background="Army Veteran • 15 Years Construction"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={12}
                rating={4.9}
                specialties={["Heavy Equipment", "Construction", "Military Moves"]}
                motto="Built tough for tough jobs"
              />
              <NetworkOperatorCard
                name="Sarah 'Diesel' Johnson"
                location="Nashville, TN"
                background="Navy Veteran • Small Business Owner"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={8}
                rating={5.0}
                specialties={["Livestock", "Farm Equipment", "Family Moves"]}
                motto="Southern hospitality meets working-class fury"
              />
              <NetworkOperatorCard
                name="Big Jim Thompson"
                location="Phoenix, AZ"
                background="Marine Veteran • Local Business Champion"
                image="/placeholder.svg?height=300&width=300"
                trailerCount={15}
                rating={4.8}
                specialties={["Commercial", "Industrial", "Emergency Response"]}
                motto="Semper Fi to the working class"
              />
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#4F5D75] hover:bg-[#4F5D75]/90 font-bold">
                <Link href="/operators">VIEW ALL NETWORK OPERATORS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Brotherhood Guarantee */}
        <BrotherhoodGuarantee />

        {/* Network Strength */}
        <section className="py-16 bg-[#002868]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-4">
                THE NETWORK ADVANTAGE
              </h2>
              <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                This is what happens when America's working class stops taking corporate BS and starts building
                something better together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#1C1C1C]/60 p-6 rounded-lg text-center border-2 border-[#C41E3A]/30">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Oswald',_sans-serif]">HIGHLY VETTED</h3>
                <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                  Background checks, references, community standing. No fly-by-night BS allowed.
                </p>
              </div>
              <div className="bg-[#1C1C1C]/60 p-6 rounded-lg text-center border-2 border-[#C41E3A]/30">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Oswald',_sans-serif]">BROTHERHOOD PROTECTED</h3>
                <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                  Mess with one of us, deal with ALL of us. We protect our own.
                </p>
              </div>
              <div className="bg-[#1C1C1C]/60 p-6 rounded-lg text-center border-2 border-[#C41E3A]/30">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Oswald',_sans-serif]">BATTLE-TESTED QUALITY</h3>
                <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                  Heavy-duty trailers built for real work by people who do real work.
                </p>
              </div>
              <div className="bg-[#1C1C1C]/60 p-6 rounded-lg text-center border-2 border-[#C41E3A]/30">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#C41E3A] rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Oswald',_sans-serif]">LOCAL CHAMPIONS</h3>
                <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif]">
                  Every dollar stays in working-class hands, supporting local communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Working Class Testimonials */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-[#1C1C1C] mb-4">
                REAL WORKERS. REAL STORIES.
              </h2>
              <p className="text-xl text-[#4F5D75] max-w-3xl mx-auto font-['Roboto_Condensed',_sans-serif]">
                Hear from the working-class heroes who've joined the movement and never looked back.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5F5F5] p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B7941D] text-[#B7941D]" />
                  ))}
                </div>
                <p className="text-[#4F5D75] mb-6 font-['Roboto_Condensed',_sans-serif] text-lg">
                  "Finally found a rental company that gets it. Tank hooked me up with a trailer that could handle my
                  construction equipment, and when some punk tried to mess with it, the whole network had my back. This
                  is what brotherhood looks like."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold font-['Oswald',_sans-serif]">Carlos Martinez</h4>
                    <p className="text-sm text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                      Union Electrician, Dallas
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B7941D] text-[#B7941D]" />
                  ))}
                </div>
                <p className="text-[#4F5D75] mb-6 font-['Roboto_Condensed',_sans-serif] text-lg">
                  "Sarah treated me like family from day one. Her trailer was built like a tank, and when I needed help
                  loading my farm equipment, she rolled up her sleeves and got dirty. That's Southern hospitality right
                  there."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold font-['Oswald',_sans-serif]">Bobby Lee Jackson</h4>
                    <p className="text-sm text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                      Farmer & Veteran, Tennessee
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg border-l-4 border-[#C41E3A]">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#B7941D] text-[#B7941D]" />
                  ))}
                </div>
                <p className="text-[#4F5D75] mb-6 font-['Roboto_Condensed',_sans-serif] text-lg">
                  "Big Jim saved my ass when U-Haul left me hanging. His trailer was ready when he said it would be,
                  built for the job, and priced fair. This is how business should be done - worker to worker."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold font-['Oswald',_sans-serif]">Maria Gonzalez</h4>
                    <p className="text-sm text-[#4F5D75] font-['Roboto_Condensed',_sans-serif]">
                      Small Business Owner, Arizona
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement CTA */}
        <section className="py-20 relative overflow-hidden bg-[#C41E3A]">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-['Bebas_Neue',_sans-serif] text-white mb-6">
                READY TO JOIN THE REVOLUTION?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-['Roboto_Condensed',_sans-serif] leading-relaxed">
                Stop funding corporate America. Start supporting your neighbors. Every rental keeps money in
                working-class hands and builds stronger communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-[#1C1C1C] hover:bg-[#1C1C1C]/80 text-white font-bold text-xl px-10 py-6"
                >
                  FIND LOCAL OPERATOR
                </Button>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#C41E3A] border-2 border-white font-bold text-xl px-10 py-6"
                >
                  BECOME AN OPERATOR
                </Button>
              </div>
              <div className="text-center">
                <p className="text-white/80 font-['Oswald',_sans-serif] text-lg font-bold">
                  "BUILT BY BLUE-COLLAR. OWNED BY BLUE-COLLAR."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white py-12 border-t-4 border-[#C41E3A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Bebas_Neue',_sans-serif] text-[#C41E3A]">
                PATRIOT HAULS NETWORK
              </h3>
              <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-4">
                America's working class united under one flag. Brotherhood before profit.
              </p>
              <div className="flex items-center text-[#B7941D] font-bold">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="font-['Oswald',_sans-serif]">STEAL FROM US? ANSWER TO ALL OF US.</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">The Network</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/operators" className="text-[#C0C0C0] hover:text-white">
                    Find Local Operators
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-[#C0C0C0] hover:text-white">
                    Join the Brotherhood
                  </Link>
                </li>
                <li>
                  <Link href="/standards" className="text-[#C0C0C0] hover:text-white">
                    Network Standards
                  </Link>
                </li>
                <li>
                  <Link href="/protection" className="text-[#C0C0C0] hover:text-white">
                    Brotherhood Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Our Mission</h3>
              <ul className="space-y-2 font-['Roboto_Condensed',_sans-serif]">
                <li>
                  <Link href="/mission" className="text-[#C0C0C0] hover:text-white">
                    Workers United
                  </Link>
                </li>
                <li>
                  <Link href="/veterans" className="text-[#C0C0C0] hover:text-white">
                    Veteran Strong
                  </Link>
                </li>
                <li>
                  <Link href="/local-business" className="text-[#C0C0C0] hover:text-white">
                    Local Business Champions
                  </Link>
                </li>
                <li>
                  <Link href="/anti-corporate" className="text-[#C0C0C0] hover:text-white">
                    Anti-Corporate Values
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Oswald',_sans-serif] text-[#FF6B35]">Battle Cry</h3>
              <div className="space-y-3 font-['Roboto_Condensed',_sans-serif]">
                <p className="text-[#C0C0C0] font-bold">"HAUL FREEDOM"</p>
                <p className="text-[#C0C0C0]">"Workers United. America Strong."</p>
                <p className="text-[#C0C0C0]">"U-Haul's Worst Nightmare"</p>
                <p className="text-[#C0C0C0]">"The Network That Has Your Back"</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center">
            <p className="text-[#C0C0C0] font-['Roboto_Condensed',_sans-serif] mb-2">
              &copy; {new Date().getFullYear()} Patriot Hauls Network. Built by the working class, for the working
              class.
            </p>
            <p className="text-[#B7941D] font-bold font-['Oswald',_sans-serif]">
              "WE'RE NOT CORPORATE AMERICA - WE ARE AMERICA"
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
