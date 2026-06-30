"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React from "react";

const AccountBtn = () => {
  const { status } = useSession();
  const href = status === "authenticated" ? "/account" : "/login";
  const label = status === "authenticated" ? "View account" : "Log in";

  return (
    <Link
      href={href}
      className="hidden h-10 w-10 items-center justify-center rounded-sm text-moonlite-espresso/72 transition-colors hover:bg-moonlite-cream/70 hover:text-moonlite-bronze sm:flex"
      aria-label={label}
    >
      <Image
        priority
        src="/icons/user.svg"
        height={20}
        width={20}
        alt=""
        className="h-5 w-5 opacity-75"
      />
    </Link>
  );
};

export default AccountBtn;
