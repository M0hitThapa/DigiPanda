"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"


const Cart = () => {

  const itemCount = 1

  const fee = 2
  return <Sheet>
    <SheetTrigger className="group -m-2 flex items-center p-2">
      <ShoppingCart aria-hidden='true' className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer" />
    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
      0
      </span></SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 pl-6 sm:max-w-lg bg-orange-50 ">
        <SheetHeader className="space-y-2.5 pr-6 flex items-center justify-center text-xl ">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
          <div className="flex w-full flex-col pr-6 font-bold">
            cart items
            </div>
            <div className="space-y-4 pr-6 ">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link href='/cart' className={`${buttonVariants({variant:"outline",})} bg-orange-600 text-2xl  text-white hover:bg-orange-600/90  hover:text-white`} >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
              </div></>
        ): (<div className="flex h-full flex-col items-center justify-center space-y-1">
          <div aria-hidden='true' className="relative mb-4 h-60 w-60 text-muted-foreground">
            <Image src="/cute-panda.png" fill alt="panda cart" />

          </div>
          <div className="text-xl font-semibold">Your cart is Empty</div>
          <SheetTrigger asChild>
            <Link href='/products' className={buttonVariants({variant: 'link',
              size:"sm",
              className:'text-sm text-muted-foreground'
            })}>Add itmes to your cart to checkout</Link>
          </SheetTrigger>
        </div>)}
      </SheetContent>
  </Sheet>
}

export default Cart