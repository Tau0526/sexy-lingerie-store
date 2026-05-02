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
      className="group relative flex h-10 w-10 items-center justify-center rounded-sm text-[#3D2E26] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8DECD]/60 hover:text-[#9C7548]"
      aria-label="Open your bag"
    >
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt=""
        className="max-h-[21px] max-w-[21px] opacity-75 transition-opacity duration-300 group-hover:opacity-100"
      />
      {cart && cart.totalQuantities > 0 && (
        <span className="absolute -right-1 -top-1 min-w-5 rounded-full border border-[#9C7548]/25 bg-[#2A1820] px-1 text-center text-xs leading-5 text-[#F2EADC]">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
