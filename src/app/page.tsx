import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {  LaptopMinimalCheck, ShieldCheck, Sprout } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Access",
    Icon: LaptopMinimalCheck,
    description: "Receive your assets instantly via email and download them without delay."
  },
  {
    name: "Verified Excellence",
    Icon: ShieldCheck,
    description: "Our team reviews every asset to uphold top quality. Unsatisfied? Enjoy a 30-day refund guarantee."
  },
  {
    name: "Sustaining Nature",
    Icon: Sprout,
    description: "We commit 1% of all sales to protecting and restoring the natural environment."
  },
  
]
export default function Home() {
  return( 
  <>
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your marketplace for premium digital assets{' '}<span className="text-orange-500">with exceptional quality.</span></h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigiPanda. Our team carefully verifies every asset to maintain top-quality standards.</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link href='/products' className={`${buttonVariants({variant:"outline",})} bg-orange-600 text-2xl  text-white hover:bg-orange-600/90  hover:text-white`}  >Browse Latest Product</Link>
      <Button variant={"ghost"} className="hover:bg-orange-200 cursor-pointer">Our quality guarantee &rarr;</Button>
      </div>
    </div>
    {/*todo list */}
  </MaxWidthWrapper>
  <section className="border-t border-gray-200 bg-gray-50"></section>
  <MaxWidthWrapper className="py-20">
    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
      {perks.map((perk) => (
        <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-200 text-black">
              {<perk.Icon className="w-2/4 h-2/4" />}

            </div>
          </div>

          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-bold  text-gray-900">{perk.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground font-medium">{perk.description}</p>
          </div>
        </div>
      ))}

    </div>

  </MaxWidthWrapper>
  </>
  )
}
