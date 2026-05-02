"use client";

import { useEffect, useState } from "react";

const AGE_GATE_KEY = "moonlite-age-confirmed";

const AgeGate = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLeftMessage, setHasLeftMessage] = useState(false);

  useEffect(() => {
    const isConfirmed = window.localStorage.getItem(AGE_GATE_KEY) === "true";

    setIsVisible(!isConfirmed);
    setIsChecking(false);
  }, []);

  const handleConfirm = () => {
    window.localStorage.setItem(AGE_GATE_KEY, "true");
    setIsVisible(false);
  };

  const handleLeave = () => {
    setHasLeftMessage(true);
    window.location.href = "https://www.google.com";
  };

  if (isChecking || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2A1820]/78 px-4 py-8 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        className="w-full max-w-[460px] border border-[#9C7548]/35 bg-[#F2EADC] px-6 py-7 text-center text-[#3D2E26] shadow-[0_24px_80px_rgba(42,24,32,0.28)] sm:px-9 sm:py-9"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
          Moonlite Studio
        </p>
        <h2
          id="age-gate-title"
          className="mb-4 text-3xl font-medium leading-tight sm:text-[38px]"
        >
          Are you 18 or over?
        </h2>
        <p className="mx-auto mb-7 max-w-[340px] text-sm leading-7 text-[#3D2E26]/68 sm:text-base">
          Moonlite Studio is an intimate apparel boutique. Please confirm that
          you are 18 or over to continue.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleConfirm}
            className="min-h-12 rounded-sm bg-[#2A1820] px-6 text-sm font-medium text-[#F2EADC] transition-colors hover:bg-[#3D2E26]"
          >
            I am 18 or over
          </button>
          <button
            type="button"
            onClick={handleLeave}
            className="min-h-12 rounded-sm border border-[#9C7548]/45 px-6 text-sm font-medium text-[#3D2E26] transition-colors hover:border-[#9C7548] hover:text-[#9C7548]"
          >
            Leave site
          </button>
        </div>
        {hasLeftMessage && (
          <p className="mt-4 text-sm text-[#3D2E26]/62">
            You must be 18 or over to enter this site.
          </p>
        )}
      </section>
    </div>
  );
};

export default AgeGate;
