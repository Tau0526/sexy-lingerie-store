import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto border-y border-[#9C7548]/18 px-0 pb-2 pt-10 text-center md:pt-16">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            integralCF.className,
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize font-normal text-[#3D2E26]",
          ])}
        >
          Shop By Category
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5"
        >
          <DressStyleCard
            title="Lingerie Sets"
            url="/shop?category=Lingerie+Sets"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.58),rgba(42,24,32,0.08)),url('/images/dress-style-1.png')]"
          />
          <DressStyleCard
            title="Sleepwear"
            url="/shop?category=Sleepwear"
            className="md:max-w-[684px] h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.58),rgba(42,24,32,0.08)),url('/images/dress-style-2.png')]"
          />
        </motion.div>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5"
        >
          <DressStyleCard
            title="Slips & Chemises"
            url="/shop?category=Slips+%26+Chemises"
            className="md:max-w-[684px] h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.58),rgba(42,24,32,0.08)),url('/images/dress-style-3.png')]"
          />
          <DressStyleCard
            title="Accessories"
            url="/shop?category=Accessories"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[linear-gradient(90deg,rgba(42,24,32,0.58),rgba(42,24,32,0.08)),url('/images/dress-style-4.png')]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
