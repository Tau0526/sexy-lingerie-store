"use client";

import { OPEN_COOKIE_EVENT } from "./CookieConsent";

const CookiePreferencesButton = ({ className }: { className?: string }) => {
  const handleOpenPreferences = () => {
    window.dispatchEvent(new Event(OPEN_COOKIE_EVENT));
  };

  return (
    <button
      type="button"
      onClick={handleOpenPreferences}
      className={className}
      aria-label="Open cookie preferences"
    >
      Cookie Preferences
    </button>
  );
};

export default CookiePreferencesButton;
