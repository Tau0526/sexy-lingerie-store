import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-[#F2EADC] text-[#3D2E26]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#9C7548]/22" />
      <div className="absolute right-0 top-0 hidden h-[62%] w-[28%] bg-[#E8DECD]/42 md:block" />

      <div className="relative max-w-frame mx-auto grid min-h-[700px] grid-cols-1 items-center gap-12 px-4 py-16 md:min-h-[760px] md:grid-cols-[1.05fr_0.95fr] md:py-24 xl:px-0">
        <section className="max-w-[670px]">
          <motion.p
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 border-b border-[#9C7548]/40 pb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#3D2E26]/62"
          >
            UK intimate apparel boutique
          </motion.p>
          <motion.h1
            initial={{ y: "60px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className={cn([
              integralCF.className,
              "mb-6 max-w-[650px] text-[38px] font-normal leading-[46px] text-[#3D2E26] sm:text-6xl md:text-[64px] md:leading-[76px]",
            ])}
          >
            Silk-soft intimates for moonlite confidence
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-9 max-w-[520px] text-sm leading-7 text-[#3D2E26]/66 sm:text-base"
          >
            Designed for quiet confidence, softness and allure.
          </motion.p>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#2A1820] px-7 text-sm font-medium text-[#F2EADC] transition-colors hover:bg-[#3D2E26]"
            >
              Shop New Collection
            </Link>
            <Link
              href="/shop?category=Lingerie+Sets"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-[#9C7548]/45 bg-transparent px-7 text-sm font-medium text-[#3D2E26] transition-colors hover:border-[#9C7548] hover:text-[#9C7548]"
            >
              Explore Lingerie Sets
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-y-5 text-[#3D2E26]/58 sm:flex-nowrap sm:gap-x-6"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-[#3D2E26] md:text-3xl">
                <AnimatedCounter from={0} to={5} />+
              </span>
              <span className="text-xs uppercase tracking-[0.18em]">
                Boutique categories
              </span>
            </div>
            <Separator className="hidden h-12 bg-[#9C7548]/22 sm:block" orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-[#3D2E26] md:text-3xl">
                UK
              </span>
              <span className="text-xs uppercase tracking-[0.18em]">
                Market focused
              </span>
            </div>
            <Separator className="hidden h-12 bg-[#9C7548]/22 sm:block" orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-[#3D2E26] md:text-3xl">
                18+
              </span>
              <span className="text-xs uppercase tracking-[0.18em]">
                Tasteful intimacy
              </span>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="relative mt-2 min-h-[340px] md:mt-0 md:min-h-[560px]"
        >
          <div className="absolute right-0 top-8 h-[78%] w-[72%] bg-[#2A1820]" />
          <div className="absolute left-2 top-20 h-[70%] w-[74%] bg-[#E8DECD]" />
          <div className="absolute left-8 top-1/2 h-px w-[44%] bg-[#9C7548]/55" />
          <div className="absolute bottom-12 right-8 h-px w-[34%] bg-[#9C7548]/35" />
          <div className="absolute left-1/2 top-1/2 flex h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]">
            <Image
              priority
              src="/brand/main-logo.png"
              height={420}
              width={420}
              alt="Moonlite Studio logo"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="absolute bottom-5 left-6 max-w-[210px] text-xs uppercase tracking-[0.24em] text-[#3D2E26]/56 md:bottom-10">
            Mayfair nights, silk-soft mornings
          </p>
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
