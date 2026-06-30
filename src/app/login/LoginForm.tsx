"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    if (!remember) {
      sessionStorage.setItem("moonlite-session-note", "session-only");
    }

    router.push("/account");
    router.refresh();
  };

  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <section className="mx-auto grid min-h-[72vh] max-w-frame items-center gap-10 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] xl:px-0">
        <div className="moonlite-reveal">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1
            className={cn(
              integralCF.className,
              "mb-5 text-4xl font-normal uppercase leading-tight md:text-5xl"
            )}
          >
            Log In
          </h1>
          <p className="max-w-md text-sm leading-7 text-[#3D2E26]/64 md:text-base">
            Access your Moonlite profile for enquiries and account details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-y border-[#9C7548]/18 bg-[#E8DECD]/52 p-5 shadow-[0_18px_50px_rgba(61,46,38,0.05)] sm:p-8"
        >
          {registered && (
            <p className="mb-5 border-l border-[#9C7548]/45 bg-[#F2EADC]/60 px-3 py-2 text-sm text-[#3D2E26]/70">
              Your account has been created. Please log in.
            </p>
          )}

          <div className="grid gap-4">
            <Field label="Email" type="email" value={email} onChange={setEmail} />
            <Field
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
            />
          </div>

          <label className="mt-4 flex items-center gap-3 text-sm text-[#3D2E26]/64">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="h-4 w-4 accent-[#9C7548]"
            />
            Remember login state
          </label>

          {error && (
            <p className="mt-4 border-l border-[#6F2F2B]/45 bg-[#F2EADC]/60 px-3 py-2 text-sm text-[#6F2F2B]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="silk-shimmer mt-6 h-12 w-full rounded-sm border border-[#2A1820] bg-[#2A1820] text-sm font-medium uppercase tracking-[0.12em] text-[#F2EADC] transition-all duration-300 hover:border-[#9C7548]/65 hover:bg-[#3D2E26] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          <p className="mt-5 text-center text-sm text-[#3D2E26]/62">
            New to Moonlite?{" "}
            <Link href="/register" className="moonlite-link text-[#3D2E26]">
              Create an account
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const Field = ({ label, value, onChange, type = "text" }: FieldProps) => {
  const id = `login-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-[#3D2E26]/70">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
        className="moonlite-field h-12 w-full px-3 text-sm outline-none"
      />
    </div>
  );
};

export default LoginForm;
