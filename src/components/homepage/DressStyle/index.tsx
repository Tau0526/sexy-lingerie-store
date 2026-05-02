import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto border border-white/10 bg-[#11101a] px-6 pb-6 pt-10 md:p-[70px] rounded-[28px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            integralCF.className,
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize text-white",
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
            url="/shop#lingerie-sets"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[linear-gradient(90deg,rgba(8,8,13,0.72),rgba(8,8,13,0.18)),url('/images/dress-style-1.png')]"
          />
          <DressStyleCard
            title="Sleepwear"
            url="/shop#sleepwear"
            className="md:max-w-[684px] h-[190px] bg-[linear-gradient(90deg,rgba(8,8,13,0.72),rgba(8,8,13,0.18)),url('/images/dress-style-2.png')]"
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
            url="/shop#slips-chemises"
            className="md:max-w-[684px] h-[190px] bg-[linear-gradient(90deg,rgba(8,8,13,0.72),rgba(8,8,13,0.18)),url('/images/dress-style-3.png')]"
          />
          <DressStyleCard
            title="Accessories"
            url="/shop#accessories"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[linear-gradient(90deg,rgba(8,8,13,0.72),rgba(8,8,13,0.18)),url('/images/dress-style-4.png')]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
