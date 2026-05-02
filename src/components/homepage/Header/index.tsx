import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-[#08080d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(122,92,255,0.42),transparent_28%),radial-gradient(circle_at_65%_58%,rgba(107,226,255,0.2),transparent_25%),linear-gradient(135deg,#08080d_0%,#11101b_48%,#050507_100%)]" />
      <div className="absolute right-[8%] top-16 hidden h-48 w-48 rounded-full border border-[#c8b6ff]/20 md:block" />
      <div className="absolute right-[11%] top-20 hidden h-40 w-40 rounded-full bg-[#d8d0ff]/10 blur-3xl md:block" />
      <div className="absolute bottom-[-80px] left-[-40px] h-52 w-52 rounded-full bg-[#d5b89c]/10 blur-3xl" />

      <div className="relative max-w-frame mx-auto grid min-h-[720px] grid-cols-1 items-center px-4 py-16 md:min-h-[760px] md:grid-cols-[1.08fr_0.92fr] md:py-24 xl:px-0">
        <section className="max-w-[680px]">
          <motion.p
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#9bdfff]"
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
              "mb-6 text-[42px] leading-[46px] sm:text-6xl md:text-[72px] md:leading-[76px]",
            ])}
          >
            Moonlit Intimates for Confident Nights
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 max-w-[590px] text-sm leading-7 text-white/68 sm:text-base"
          >
            Elegant intimate apparel and sensual sleepwear, designed for
            confidence, comfort, and quiet allure.
          </motion.p>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/shop#new-arrivals"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:bg-[#d7c7ff]"
            >
              Shop New Collection
            </Link>
            <Link
              href="/shop#lingerie-sets"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-medium text-white transition-all hover:border-[#9bdfff] hover:text-[#9bdfff]"
            >
              Explore Lingerie Sets
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: "45px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-y-5 text-white/70 sm:flex-nowrap sm:gap-x-6"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white md:text-3xl">
                <AnimatedCounter from={0} to={5} />+
              </span>
              <span className="text-xs uppercase tracking-[0.18em]">
                Boutique categories
              </span>
            </div>
            <Separator className="hidden h-12 bg-white/15 sm:block" orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white md:text-3xl">
                UK
              </span>
              <span className="text-xs uppercase tracking-[0.18em]">
                Market focused
              </span>
            </div>
            <Separator className="hidden h-12 bg-white/15 sm:block" orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white md:text-3xl">
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
          className="relative mt-14 min-h-[360px] md:mt-0 md:min-h-[520px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,185,255,0.28),rgba(107,226,255,0.08)_46%,transparent_68%)] blur-sm sm:h-[420px] sm:w-[420px]" />
          <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />
          <div className="absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3eadf] shadow-[0_0_90px_rgba(206,219,255,0.45)] sm:h-[220px] sm:w-[220px]" />
          <div className="absolute left-[49%] top-1/2 h-[165px] w-[165px] -translate-y-1/2 rounded-full bg-[#08080d] sm:h-[235px] sm:w-[235px]" />
          <div className="absolute bottom-[28%] left-[18%] h-12 w-20 rotate-[-18deg] rounded-[90%_10%_90%_10%] border border-[#9bdfff]/50 bg-[#9bdfff]/10 blur-[0.2px]" />
          <div className="absolute bottom-[33%] right-[18%] h-12 w-20 rotate-[18deg] rounded-[10%_90%_10%_90%] border border-[#c8b6ff]/50 bg-[#c8b6ff]/10 blur-[0.2px]" />
          <div className="absolute bottom-[21%] left-1/2 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#9bdfff]/70 to-transparent" />
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
