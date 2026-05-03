"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const COOKIE_CONSENT_KEY = "moonlite-cookie-consent";
const AGE_GATE_KEY = "moonlite-age-confirmed";
const OPEN_COOKIE_EVENT = "moonlite-open-cookie-preferences";

type ConsentStatus = "accepted" | "declined" | "custom";

type CookieConsentState = {
  status: ConsentStatus;
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

type Preferences = Pick<
  CookieConsentState,
  "functional" | "analytics" | "marketing"
>;

const defaultPreferences: Preferences = {
  functional: false,
  analytics: false,
  marketing: false,
};

const saveConsent = (status: ConsentStatus, preferences: Preferences) => {
  const payload: CookieConsentState = {
    status,
    necessary: true,
    ...preferences,
    savedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));
};

const readSavedPreferences = (): Preferences => {
  const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);

  if (!saved) return defaultPreferences;

  try {
    const parsed = JSON.parse(saved) as CookieConsentState;

    return {
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return defaultPreferences;
  }
};

const Toggle = ({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) => (
  <div className="flex items-start justify-between gap-4 border-t border-[#9C7548]/18 py-4">
    <div>
      <h3 className="text-sm font-medium text-[#3D2E26]">{label}</h3>
      <p className="mt-1 text-sm leading-6 text-[#3D2E26]/62">
        {description}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#9C7548]">
        {disabled ? "Always on" : "Optional"}
      </p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn([
        "mt-1 flex h-7 w-12 shrink-0 items-center rounded-full border p-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EADC]",
        checked
          ? "border-[#2A1820] bg-[#2A1820]"
          : "border-[#9C7548]/35 bg-[#F2EADC]",
        disabled && "cursor-not-allowed opacity-75",
      ])}
    >
      <span
        className={cn([
          "h-4 w-4 rounded-full bg-[#F2EADC] transition-transform duration-300",
          checked ? "translate-x-5" : "translate-x-0 bg-[#9C7548]/70",
        ])}
      />
      <span className="sr-only">{label}</span>
    </button>
  </div>
);

const CookieConsent = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<Preferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);

    const syncVisibility = () => {
      const hasConsent = Boolean(window.localStorage.getItem(COOKIE_CONSENT_KEY));
      const hasConfirmedAge =
        window.localStorage.getItem(AGE_GATE_KEY) === "true";

      if (hasConsent) {
        setPreferences(readSavedPreferences());
      }

      setIsVisible(!hasConsent && hasConfirmedAge);
    };

    const openPreferences = () => {
      setPreferences(readSavedPreferences());
      setIsVisible(true);
      setIsPanelOpen(true);
    };

    syncVisibility();
    const timer = window.setInterval(syncVisibility, 800);
    window.addEventListener(OPEN_COOKIE_EVENT, openPreferences);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener(OPEN_COOKIE_EVENT, openPreferences);
    };
  }, []);

  const closeWithConsent = (status: ConsentStatus, next: Preferences) => {
    saveConsent(status, next);
    setPreferences(next);
    setIsPanelOpen(false);
    setIsVisible(false);
  };

  const acceptAll = () =>
    closeWithConsent("accepted", {
      functional: true,
      analytics: true,
      marketing: true,
    });

  const declineAll = () => closeWithConsent("declined", defaultPreferences);

  const savePreferences = () => closeWithConsent("custom", preferences);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <>
      <section
        role="region"
        aria-label="Cookie preferences"
        className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-5xl border border-[#9C7548]/28 bg-[#F2EADC] p-4 text-[#3D2E26] shadow-[0_18px_70px_rgba(42,24,32,0.18)] moonlite-reveal sm:p-5"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-lg font-medium">Cookie preferences</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#3D2E26]/66">
              We use cookies to help keep Moonlite Studio working smoothly,
              remember your preferences and, in future versions, understand how
              visitors use the site. You can accept all cookies, decline
              non-essential cookies, or choose which types you allow.
            </p>
            <p className="mt-2 text-xs leading-5 text-[#3D2E26]/52">
              This demo site does not currently use live advertising or
              analytics cookies.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="moonlite-link">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="moonlite-link">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <button
              type="button"
              onClick={declineAll}
              className="min-h-11 border border-[#9C7548]/45 px-4 text-sm font-medium transition-all duration-300 hover:border-[#9C7548] hover:bg-[#E8DECD]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
            >
              Decline all
            </button>
            <button
              type="button"
              onClick={() => setIsPanelOpen(true)}
              className="min-h-11 border border-[#9C7548]/45 px-4 text-sm font-medium transition-all duration-300 hover:border-[#9C7548] hover:bg-[#E8DECD]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
            >
              Let me choose
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="silk-shimmer min-h-11 border border-[#2A1820] bg-[#2A1820] px-5 text-sm font-medium text-[#F2EADC] transition-all duration-300 hover:border-[#9C7548]/65 hover:bg-[#3D2E26] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
            >
              Accept all
            </button>
          </div>
        </div>
      </section>

      {isPanelOpen && (
        <div className="fixed inset-0 z-[95] flex items-end justify-center bg-[#2A1820]/45 px-4 py-4 backdrop-blur-sm sm:items-center">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-[#9C7548]/28 bg-[#F2EADC] p-5 text-[#3D2E26] shadow-[0_24px_90px_rgba(42,24,32,0.25)] sm:p-7"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#9C7548]">
              Moonlite Studio
            </p>
            <h2
              id="cookie-preferences-title"
              className="text-2xl font-medium"
            >
              Manage cookie preferences
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#3D2E26]/64">
              You can choose which non-essential cookies Moonlite Studio may
              use. Strictly necessary cookies are always on because they support
              basic site functionality.
            </p>

            <div className="mt-5">
              <Toggle
                label="Strictly necessary"
                description="Required for core site features such as page navigation, security and remembering your cookie choice."
                checked
                disabled
              />
              <Toggle
                label="Functional"
                description="Helps remember preferences and improve your browsing experience."
                checked={preferences.functional}
                onChange={(checked) =>
                  setPreferences((current) => ({
                    ...current,
                    functional: checked,
                  }))
                }
              />
              <Toggle
                label="Analytics"
                description="Helps us understand how visitors use the website so we can improve it."
                checked={preferences.analytics}
                onChange={(checked) =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: checked,
                  }))
                }
              />
              <Toggle
                label="Marketing"
                description="May help personalise content or advertising in future versions."
                checked={preferences.marketing}
                onChange={(checked) =>
                  setPreferences((current) => ({
                    ...current,
                    marketing: checked,
                  }))
                }
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={declineAll}
                className="min-h-11 border border-[#9C7548]/45 px-4 text-sm font-medium transition-all duration-300 hover:border-[#9C7548] hover:bg-[#E8DECD]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
              >
                Decline all
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-11 border border-[#9C7548]/45 px-4 text-sm font-medium transition-all duration-300 hover:border-[#9C7548] hover:bg-[#E8DECD]/65 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="silk-shimmer min-h-11 border border-[#2A1820] bg-[#2A1820] px-5 text-sm font-medium text-[#F2EADC] transition-all duration-300 hover:border-[#9C7548]/65 hover:bg-[#3D2E26] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
              >
                Save preferences
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export { COOKIE_CONSENT_KEY, OPEN_COOKIE_EVENT };
export default CookieConsent;
