import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-moonlite-ivory text-moonlite-espresso">
      <div className="relative min-h-[460px] overflow-hidden sm:min-h-[500px] md:min-h-[430px] lg:min-h-[450px]">
        <div className="absolute inset-0">
          <Image
            priority
            src="/images/moonlite/hero.jpg"
            alt="Black lace intimate apparel with white roses"
            fill
            sizes="100vw"
            className="object-cover object-[64%_center] opacity-95 sm:object-[60%_center] md:object-[58%_center] md:opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,239,0.82)_0%,rgba(251,247,239,0.64)_34%,rgba(245,235,221,0.22)_62%,rgba(237,224,206,0.04)_100%)] md:bg-[linear-gradient(90deg,rgba(251,247,239,0.78)_0%,rgba(251,247,239,0.56)_30%,rgba(245,235,221,0.16)_56%,rgba(237,224,206,0.02)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,251,245,0.04)_0%,rgba(155,113,67,0.05)_100%)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-moonlite-border/70" />

        <div className="relative mx-auto flex min-h-[460px] max-w-frame items-center px-4 py-14 sm:min-h-[500px] sm:py-16 md:min-h-[430px] md:py-14 lg:min-h-[450px] xl:px-0">
          <section className="max-w-[390px] md:max-w-[430px]">
            <motion.h1
              initial={{ y: "60px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-5 text-[30px] font-normal uppercase leading-[1.18] tracking-[0.16em] text-moonlite-espresso sm:text-[40px] md:text-[38px] lg:text-[42px]"
            >
              CONFIDENCE
              <span className="block">IN EVERY DETAIL</span>
            </motion.h1>
            <motion.p
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mb-7 max-w-[300px] text-sm leading-7 text-moonlite-taupe sm:text-base"
            >
              Luxury intimates designed to empower and enchant.
            </motion.p>
            <motion.div
              initial={{ y: "45px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.6 }}
            >
              <Button
                asChild
                size="sm"
                className="h-10 rounded-sm px-7 text-[11px] uppercase tracking-[0.14em]"
              >
                <Link href="/shop">SHOP NEW IN</Link>
              </Button>
            </motion.div>
          </section>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-moonlite-bronze" />
          <span className="h-1.5 w-1.5 rounded-full border border-moonlite-bronze/60 bg-moonlite-ivory/70" />
          <span className="h-1.5 w-1.5 rounded-full border border-moonlite-bronze/60 bg-moonlite-ivory/70" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 hidden w-full items-center justify-between px-8 text-2xl text-moonlite-espresso/70 lg:flex">
          <span aria-hidden="true">&lt;</span>
          <span aria-hidden="true">&gt;</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
