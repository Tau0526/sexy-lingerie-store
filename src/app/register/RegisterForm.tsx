"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RegisterForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    if (!response.ok) {
      const data = (await response.json()) as { message?: string };
      setError(data.message ?? "Registration failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    router.push("/login?registered=1");
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
            Create Account
          </h1>
          <p className="max-w-md text-sm leading-7 text-[#3D2E26]/64 md:text-base">
            Create a Moonlite profile to keep your details ready for private
            enquiries and future member features.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-y border-[#9C7548]/18 bg-[#E8DECD]/52 p-5 shadow-[0_18px_50px_rgba(61,46,38,0.05)] sm:p-8"
        >
          <div className="grid gap-4">
            <Field label="Name" value={name} onChange={setName} />
            <Field label="Email" type="email" value={email} onChange={setEmail} />
            <Field
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <Field
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          </div>

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
            {isSubmitting ? "Creating..." : "Register"}
          </button>

          <p className="mt-5 text-center text-sm text-[#3D2E26]/62">
            Already have an account?{" "}
            <Link href="/login" className="moonlite-link text-[#3D2E26]">
              Log in
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
  const id = `register-${label.toLowerCase().replace(/\s+/g, "-")}`;

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

export default RegisterForm;
