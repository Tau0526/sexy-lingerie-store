"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Thank you. This demo form does not send messages yet.");
  };

  return (
    <main className="bg-[#F2EADC] pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Contact
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            For order questions, sizing help or collaboration enquiries.
          </p>
        </section>

        <section className="grid gap-10 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="mb-2 text-lg font-medium">Email</h2>
              <Link
                href="mailto:Kayee7601@gmail.com"
                className="text-[#3D2E26]/68 transition-colors hover:text-[#9C7548]"
              >
                Kayee7601@gmail.com
              </Link>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-medium">Instagram</h2>
              <Link
                href="https://instagram.com/Moonlite.studio_"
                className="text-[#3D2E26]/68 transition-colors hover:text-[#9C7548]"
              >
                Moonlite.studio_
              </Link>
            </div>
            <div className="border-l border-[#9C7548]/45 bg-[#E8DECD] px-5 py-5">
              <h2 className="mb-2 text-lg font-medium">Response Time</h2>
              <p className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
                We aim to respond as soon as possible during working days.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-y border-[#9C7548]/18 py-6"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  className="h-12 w-full rounded-sm border border-[#9C7548]/22 bg-[#E8DECD]/60 px-4 text-[#3D2E26] outline-none transition-colors focus:border-[#9C7548]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  className="h-12 w-full rounded-sm border border-[#9C7548]/22 bg-[#E8DECD]/60 px-4 text-[#3D2E26] outline-none transition-colors focus:border-[#9C7548]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-sm border border-[#9C7548]/22 bg-[#E8DECD]/60 px-4 py-3 text-[#3D2E26] outline-none transition-colors focus:border-[#9C7548]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 h-12 rounded-sm bg-[#2A1820] px-7 text-sm font-medium text-[#F2EADC] transition-colors hover:bg-[#3D2E26]"
            >
              Send message
            </button>
            {message && (
              <p className="mt-4 text-sm leading-6 text-[#3D2E26]/66">
                {message}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
