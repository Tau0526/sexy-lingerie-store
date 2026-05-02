import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Check } from "lucide-react";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="bg-[#F2EADC] pb-20 text-[#3D2E26]">
      <section className="mx-auto flex min-h-[68vh] max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#9C7548]/40 text-[#9C7548]">
          <Check className="h-7 w-7" />
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#9C7548]">
          Moonlite Studio
        </p>
        <h1
          className={cn(
            integralCF.className,
            "mb-4 text-3xl font-normal uppercase text-[#3D2E26] md:text-5xl"
          )}
        >
          Thank you for your order
        </h1>
        <p className="mb-6 text-base leading-7 text-[#3D2E26]/68">
          Your Moonlite Studio demo order has been received.
        </p>
        <div className="mb-7 w-full border-y border-[#9C7548]/22 py-5 text-sm leading-7 text-[#3D2E26]/70">
          <p className="font-medium text-[#3D2E26]">
            Order number: UK-MOON-1001
          </p>
          <p>This is a demo order. No real payment has been taken.</p>
          <p>
            A real payment and confirmation flow can be added in a later
            version.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            className="h-12 rounded-sm bg-[#2A1820] px-7 text-[#F2EADC] hover:bg-[#3D2E26]"
          >
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-sm border-[#9C7548]/40 bg-transparent px-7 text-[#3D2E26] hover:bg-[#E8DECD]"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
