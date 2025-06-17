import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function NetworkPage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/network_hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">BUILD YOUR NETWORK</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 px-4 md:px-12 lg:px-24">
            Find local operators and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 font-bold text-xl px-10 py-6">
              <Link href="/operators" className="text-white hover:text-white">
                FIND YOUR LOCAL OPERATOR
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 font-bold text-xl px-10 py-6">
              <Link href="/operators" className="text-white hover:text-white">
                MEET THE BROTHERHOOD
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 font-bold text-xl px-10 py-6">
              <Link href="/join" className="text-white hover:text-white">
                JOIN THE FIGHT
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Network Benefits Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Unlock the Power of Networking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Expand Your Reach</CardTitle>
                <CardDescription>Connect with operators and individuals across the globe.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Build relationships that can help you grow your business and achieve your goals.
                </p>
              </CardContent>
            </Card>

            {/* Benefit Card 2 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Share Knowledge</CardTitle>
                <CardDescription>Learn from the experiences of others in the network.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Access valuable insights and best practices to improve your operations.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 3 */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Find Opportunities</CardTitle>
                <CardDescription>Discover new partnerships, collaborations, and business ventures.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Explore a wide range of opportunities to expand your horizons and achieve success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Network Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Join Our Growing Network Today!</h2>
          <div className="max-w-md mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">Sign Up</CardTitle>
                <CardDescription className="text-center">Create your account and start connecting.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Your email" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Your password" />
                  </div>
                  <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold">Create Account</Button>
                </form>
              </CardContent>
              <CardFooter className="text-center">
                <Link href="/login" className="text-blue-500">
                  Already have an account? Login
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
