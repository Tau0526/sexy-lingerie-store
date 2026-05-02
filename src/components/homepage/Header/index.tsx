import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-[#F2EADC] text-[#3D2E26]">
      <div className="absolute left-[-10%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[#C9A28F]/24 blur-3xl [animation:moonlite-glow_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-[12%] right-[8%] h-[300px] w-[300px] rounded-full bg-[#9C7548]/12 blur-3xl [animation:moonlite-glow_11s_ease-in-out_infinite]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#9C7548]/22" />
      <div className="absolute right-0 top-0 hidden h-[58%] w-[26%] bg-[#E8DECD]/38 md:block" />

      <div className="relative max-w-frame mx-auto grid min-h-[620px] grid-cols-1 items-center gap-10 px-4 py-14 md:min-h-[720px] md:grid-cols-[1.05fr_0.95fr] md:py-20 xl:px-0">
        <section className="max-w-[670px]">
          <motion.p
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 border-b border-[#9C7548]/38 pb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#3D2E26]/62"
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
              "mb-6 max-w-[700px] text-[38px] font-normal leading-[46px] text-[#3D2E26] sm:text-6xl md:text-[68px] md:leading-[78px]",
            ])}
          >
            Moonlit Intimates
            <span className="block font-serif italic normal-case text-[#9C7548]">
              for Confident Nights
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 max-w-[520px] text-sm leading-7 text-[#3D2E26]/66 sm:text-base"
          >
            Intimate pieces designed with softness, discretion and quiet allure.
          </motion.p>
          <motion.p
            initial={{ y: "38px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.38, duration: 0.55 }}
            className="mb-9 flex max-w-[560px] items-center gap-4 font-serif text-lg italic leading-7 text-[#9C7548] sm:text-xl"
          >
            <span className="h-px w-10 shrink-0 bg-[#9C7548]/45" />
            Pamper Yourself, Embrace Your Desires
          </motion.p>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/shop">Shop New Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/shop?category=Lingerie+Sets">
                Explore Lingerie Sets
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-y-5 text-[#3D2E26]/58 sm:flex-nowrap sm:gap-x-6"
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
          className="relative mt-2 min-h-[330px] md:mt-0 md:min-h-[560px]"
        >
          <div className="absolute right-0 top-10 h-[74%] w-[68%] bg-[#2A1820]" />
          <div className="absolute left-2 top-20 flex h-[66%] w-[72%] items-center justify-center bg-[linear-gradient(145deg,#E8DECD,#F2EADC_58%,#C9A28F_140%)] px-8 py-10 shadow-[0_28px_80px_rgba(42,24,32,0.10)]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                priority
                src="/images/Main_logo颜色版_01.png"
                height={420}
                width={420}
                alt="Moonlite Studio logo"
                className="h-auto w-[78%] max-w-[360px] object-contain drop-shadow-[0_24px_52px_rgba(42,24,32,0.14)]"
              />
            </div>
          </div>
          <div className="absolute right-6 top-16 h-[54%] w-[58%] border border-[#9C7548]/28" />
          <div className="absolute left-8 top-1/2 h-px w-[44%] bg-[#9C7548]/55" />
          <div className="absolute bottom-12 right-8 h-px w-[34%] bg-[#9C7548]/35" />
          <div className="absolute bottom-20 right-4 hidden border border-[#9C7548]/24 bg-[#F2EADC]/76 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#3D2E26]/62 backdrop-blur sm:block">
            Silk Noir
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
