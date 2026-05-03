"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const NewsletterMock = () => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Thank you. This demo form does not send emails yet.");
  };

  return (
    <section className="max-w-frame mx-auto px-4 xl:px-0">
      <div className="relative overflow-hidden border border-[#9C7548]/24 bg-[#2A1820] px-5 py-10 text-[#F2EADC] sm:px-8 md:px-12">
        <div className="pointer-events-none absolute right-[-8%] top-[-28%] h-72 w-72 rounded-full bg-[#C9A28F]/16 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-3 block text-xs uppercase tracking-[0.24em] text-[#C9A28F]">
              Private notes
            </span>
            <h2 className="text-3xl font-medium leading-tight md:text-[42px]">
              Private Notes from Moonlite
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8DECD]/72 md:text-base">
              Be the first to discover new edits, fit notes and private releases.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="moonlite-newsletter-email">
                Email address
              </label>
              <input
                id="moonlite-newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="h-[52px] min-w-0 flex-1 border border-[#F2EADC]/24 bg-[#F2EADC]/8 px-4 text-sm text-[#F2EADC] outline-none transition-all duration-300 placeholder:text-[#F2EADC]/42 focus:border-[#C9A28F]/70 focus:bg-[#F2EADC]/12"
              />
              <Button type="submit" size="lg" className="shrink-0">
                Join the List
              </Button>
            </div>
            {message && (
              <p className="mt-3 text-sm leading-6 text-[#E8DECD]/70" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterMock;
