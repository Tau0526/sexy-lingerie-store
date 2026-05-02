"use client";

import ProductCard from "@/components/cart-page/ProductCard";
import { Button } from "@/components/ui/button";
import {
  FREE_DELIVERY_THRESHOLD,
  formatPrice,
  getCartSubtotal,
  getCartTotal,
  getUkDelivery,
} from "@/lib/cart-pricing";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartPage() {
  const { cart } = useAppSelector((state: RootState) => state.carts);
  const items = cart?.items || [];
  const subtotal = getCartSubtotal(items);
  const shipping = getUkDelivery(subtotal, items.length);
  const total = getCartTotal(subtotal, shipping);
  const amountUntilFreeDelivery = Math.max(
    FREE_DELIVERY_THRESHOLD - subtotal,
    0
  );

  return (
    <main className="bg-[#F2EADC] pb-20 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 py-8 xl:px-0">
        {items.length > 0 ? (
          <>
            <div className="mb-8 border-b border-[#9C7548]/20 pb-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#9C7548]">
                Moonlite Studio
              </p>
              <h1
                className={cn(
                  integralCF.className,
                  "text-[32px] font-normal uppercase md:text-[40px]"
                )}
              >
                Your Bag
              </h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
              <section className="bg-[#E8DECD] p-4 md:p-6">
                <div className="flex flex-col gap-5">
                  {items.map((product, idx) => (
                    <React.Fragment
                      key={`${product.id}-${product.attributes.join("-")}`}
                    >
                      <ProductCard data={product} />
                      {items.length - 1 !== idx && (
                        <hr className="border-t border-[#9C7548]/22" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </section>

              <aside className="bg-[#E8DECD] p-5 md:p-6 lg:sticky lg:top-24">
                <h2 className="mb-5 text-xl font-medium">Order Summary</h2>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex items-center justify-between">
                    <span className="text-[#3D2E26]/62">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3D2E26]/62">UK Delivery</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <hr className="border-t border-[#9C7548]/22" />
                  <div className="flex items-center justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <p className="mt-5 border-l border-[#9C7548]/45 pl-3 text-sm leading-6 text-[#3D2E26]/64">
                  Free UK delivery over {formatPrice(FREE_DELIVERY_THRESHOLD)}
                  {amountUntilFreeDelivery > 0
                    ? `, add ${formatPrice(amountUntilFreeDelivery)} more to qualify.`
                    : "."}
                </p>

                <Button
                  asChild
                  className="mt-6 h-12 w-full rounded-sm bg-[#2A1820] text-[#F2EADC] hover:bg-[#3D2E26]"
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </aside>
            </div>
          </>
        ) : (
          <section className="mx-auto flex min-h-[52vh] max-w-xl flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#9C7548]/35 text-[#9C7548]">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h1
              className={cn(
                integralCF.className,
                "mb-4 text-3xl font-normal uppercase text-[#3D2E26] md:text-4xl"
              )}
            >
              Your bag is currently empty.
            </h1>
            <p className="mb-7 text-sm leading-7 text-[#3D2E26]/64 md:text-base">
              Discover Moonlite Studio pieces designed for quiet confidence and
              refined allure.
            </p>
            <Button
              asChild
              className="h-12 rounded-sm bg-[#2A1820] px-7 text-[#F2EADC] hover:bg-[#3D2E26]"
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </section>
        )}
      </div>
    </main>
  );
}
