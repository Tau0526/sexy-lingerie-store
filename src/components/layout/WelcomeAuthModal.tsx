"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const AUTH_MODAL_DISMISSED_KEY = "moonlite-auth-modal-dismissed";
const AGE_GATE_KEY = "moonlite-age-confirmed";
const COOKIE_CONSENT_KEY = "moonlite-cookie-consent";

const WelcomeAuthModal = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const dismissModal = () => {
    window.localStorage.setItem(AUTH_MODAL_DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  useEffect(() => {
    if (status === "loading") return;

    const isAuthRoute = pathname === "/login" || pathname === "/register";

    if (status === "authenticated" || isAuthRoute) {
      setIsVisible(false);
      setIsReady(true);
      return;
    }

    const syncVisibility = () => {
      const isDismissed =
        window.localStorage.getItem(AUTH_MODAL_DISMISSED_KEY) === "true";
      const hasConfirmedAge =
        window.localStorage.getItem(AGE_GATE_KEY) === "true";
      const hasCookieChoice = Boolean(
        window.localStorage.getItem(COOKIE_CONSENT_KEY)
      );

      setIsVisible(!isDismissed && hasConfirmedAge && hasCookieChoice);
      setIsReady(true);
    };

    syncVisibility();
    const timer = window.setInterval(syncVisibility, 800);

    return () => window.clearInterval(timer);
  }, [pathname, status]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismissModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2A1820]/48 px-4 py-8 backdrop-blur-sm moonlite-reveal">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-auth-title"
        className="relative w-full max-w-[500px] border border-moonlite-bronze/30 bg-[linear-gradient(145deg,#FBF7EF,#F2EADC)] px-5 py-7 text-center text-moonlite-espresso shadow-[0_24px_90px_rgba(42,24,32,0.22)] sm:px-9 sm:py-9"
      >
        <button
          type="button"
          onClick={dismissModal}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-moonlite-taupe transition-colors hover:bg-moonlite-cream hover:text-moonlite-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
          aria-label="Close welcome prompt"
        >
          <X size={17} strokeWidth={1.6} />
        </button>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-moonlite-bronze">
          Moonlite Studio
        </p>
        <h2
          id="welcome-auth-title"
          className="mb-4 font-serif text-3xl font-medium leading-tight sm:text-[40px]"
        >
          Welcome to Moonlite
        </h2>
        <p className="mx-auto mb-7 max-w-[370px] text-sm leading-7 text-moonlite-espresso/68 sm:text-base">
          Create an account to save your favourite pieces, revisit your
          wishlist, and make private enquiries with ease.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/login"
            onClick={dismissModal}
            className="silk-shimmer flex min-h-12 items-center justify-center rounded-sm border border-moonlite-espresso bg-moonlite-espresso px-5 text-sm font-medium uppercase tracking-[0.12em] text-moonlite-ivory transition-all duration-300 hover:border-moonlite-bronze hover:bg-moonlite-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
          >
            Log in
          </Link>
          <Link
            href="/register"
            onClick={dismissModal}
            className="flex min-h-12 items-center justify-center rounded-sm border border-moonlite-bronze/60 px-5 text-sm font-medium uppercase tracking-[0.12em] text-moonlite-espresso transition-all duration-300 hover:border-moonlite-bronze hover:bg-moonlite-cream hover:text-moonlite-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
          >
            Create account
          </Link>
        </div>

        <button
          type="button"
          onClick={dismissModal}
          className="moonlite-link mx-auto mt-5 block text-sm font-medium text-moonlite-taupe transition-colors hover:text-moonlite-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moonlite-gold focus-visible:ring-offset-2 focus-visible:ring-offset-moonlite-ivory"
        >
          Continue browsing
        </button>
        <p className="mt-4 text-xs leading-5 text-moonlite-taupe">
          You can browse the collection without signing in.
        </p>
      </section>
    </div>
  );
};

export { AUTH_MODAL_DISMISSED_KEY };
export default WelcomeAuthModal;
