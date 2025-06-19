import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "@/server/users"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getSession()
  if (session) {
    return redirect("/dashboard")
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 gap-8 md:gap-12">
        {/* Left Side - Content */}
        <div className="flex flex-col max-w-md space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simplified Authentication for Your Applications
          </h1>
          <p className="text-lg text-muted-foreground">
            Better Auth Starter offers you a complete, secure, and easy-to-integrate authentication solution for your Next.js projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="relative w-full max-w-md aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative flex items-center justify-center h-full">
            <Image
              src="/better-auth.svg"
              alt="Better Auth"
              width={280}
              height={280}
              className="drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
