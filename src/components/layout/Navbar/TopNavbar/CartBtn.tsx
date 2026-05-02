"use client";

import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link
      href="/cart"
      className="relative mr-[14px] p-1 text-[#3D2E26]"
      aria-label="Open your bag"
    >
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt=""
        className="max-w-[22px] max-h-[22px] opacity-75"
      />
      {cart && cart.totalQuantities > 0 && (
        <span className="border border-[#9C7548]/20 bg-[#2A1820] text-[#F2EADC] rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
