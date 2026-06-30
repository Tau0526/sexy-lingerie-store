"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="silk-shimmer h-12 w-full rounded-sm border border-[#2A1820] bg-[#2A1820] px-7 text-sm font-medium uppercase tracking-[0.12em] text-[#F2EADC] transition-all duration-300 hover:border-[#9C7548]/65 hover:bg-[#3D2E26] sm:w-auto"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
