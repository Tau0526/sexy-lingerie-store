"use client";

import { Button } from "@/components/ui/button";
import {
  FREE_DELIVERY_THRESHOLD,
  formatPrice,
  getCartSubtotal,
  getCartTotal,
  getUkDelivery,
} from "@/lib/cart-pricing";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type CheckoutForm = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  orderNote: string;
};

const initialForm: CheckoutForm = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  postcode: "",
  orderNote: "",
};

const requiredFields: Array<keyof CheckoutForm> = [
  "email",
  "firstName",
  "lastName",
  "address1",
  "city",
  "postcode",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useAppSelector((state: RootState) => state.carts);
  const items = cart?.items || [];
  const subtotal = getCartSubtotal(items);
  const shipping = getUkDelivery(subtotal, items.length);
  const total = getCartTotal(subtotal, shipping);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>(
    {}
  );

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof CheckoutForm, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (form.email && !form.email.includes("@")) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (items.length === 0) {
      return;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    localStorage.setItem(
      "moonlite-demo-order",
      JSON.stringify({
        orderNumber: "UK-MOON-1001",
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          size: item.attributes[0],
          colour: item.attributes[1],
        })),
        subtotal,
        shipping,
        total,
        delivery: {
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          city: form.city,
          postcode: form.postcode,
          country: "United Kingdom",
        },
      })
    );

    router.push("/order-success");
  };

  return (
    <main className="silk-page pb-20 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 py-8 xl:px-0">
        <div className="moonlite-reveal mb-8 border-b border-[#9C7548]/20 pb-5">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#9C7548]">
            Moonlite Studio
          </p>
          <h1
            className={cn(
              integralCF.className,
              "text-[32px] font-normal uppercase md:text-[40px]"
            )}
          >
            Checkout
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3D2E26]/64 md:text-base">
            Enter your delivery details for this demo order. No real payment
            will be taken.
          </p>
        </div>

        {items.length === 0 ? (
          <section className="border-y border-[#9C7548]/16 bg-[#E8DECD]/66 p-6 text-center">
            <p className="mb-5 text-[#3D2E26]/70">
              Your bag is empty. Add a Moonlite Studio piece before checkout.
            </p>
            <Button
              asChild
              variant="outline"
              className="px-7"
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </section>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          >
            <section className="border-y border-[#9C7548]/16 bg-[#E8DECD]/58 p-5 md:p-6">
              <h2 className="mb-5 text-xl font-medium">Delivery Details</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => updateField("email", value)}
                  type="email"
                  className="sm:col-span-2"
                />
                <Field
                  label="First name"
                  value={form.firstName}
                  error={errors.firstName}
                  onChange={(value) => updateField("firstName", value)}
                />
                <Field
                  label="Last name"
                  value={form.lastName}
                  error={errors.lastName}
                  onChange={(value) => updateField("lastName", value)}
                />
                <Field
                  label="Phone"
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                />
                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm text-[#3D2E26]/70"
                  >
                    Country
                  </label>
                  <div
                    id="country"
                    className="h-12 border border-[#9C7548]/28 bg-[#F2EADC]/78 px-3 py-3 text-sm text-[#3D2E26]/78"
                  >
                    United Kingdom
                  </div>
                </div>
                <Field
                  label="Address line 1"
                  value={form.address1}
                  error={errors.address1}
                  onChange={(value) => updateField("address1", value)}
                  className="sm:col-span-2"
                />
                <Field
                  label="Address line 2"
                  value={form.address2}
                  onChange={(value) => updateField("address2", value)}
                  className="sm:col-span-2"
                />
                <Field
                  label="City"
                  value={form.city}
                  error={errors.city}
                  onChange={(value) => updateField("city", value)}
                />
                <Field
                  label="Postcode"
                  value={form.postcode}
                  error={errors.postcode}
                  onChange={(value) => updateField("postcode", value)}
                />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="order-note"
                    className="mb-2 block text-sm text-[#3D2E26]/70"
                  >
                    Order note
                  </label>
                  <textarea
                    id="order-note"
                    value={form.orderNote}
                    onChange={(event) =>
                      updateField("orderNote", event.target.value)
                    }
                    rows={4}
                    className="w-full resize-none border border-[#9C7548]/28 bg-[#F2EADC]/78 px-3 py-3 text-sm text-[#3D2E26] outline-none transition-all duration-300 placeholder:text-[#3D2E26]/38 hover:border-[#9C7548]/50 focus:border-[#2A1820] focus:ring-1 focus:ring-[#9C7548]/45"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3 border-l border-[#9C7548]/45 bg-[#F2EADC]/68 p-4 text-sm leading-6 text-[#3D2E26]/70">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#9C7548]" />
                <p>This is a demo checkout. No real payment will be taken.</p>
              </div>
            </section>

            <aside className="border-y border-[#9C7548]/16 bg-[#E8DECD]/66 p-5 md:p-6 lg:sticky lg:top-24">
              <h2 className="mb-5 text-xl font-medium">Order Summary</h2>
              <div className="mb-5 space-y-3 border-b border-[#9C7548]/22 pb-5 text-sm">
                <p className="text-[#3D2E26]/62">
                  {cart?.totalQuantities || 0} item
                  {(cart?.totalQuantities || 0) === 1 ? "" : "s"}
                </p>
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.attributes.join("-")}`}
                    className="flex justify-between gap-4"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-[#3D2E26]/62">
                      {item.attributes[0]} / {item.attributes[1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-center justify-between">
                  <span className="text-[#3D2E26]/62">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#3D2E26]/62">UK Delivery</span>
                  <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                </div>
                <hr className="border-t border-[#9C7548]/22" />
                <div className="flex items-center justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <p className="mt-5 border-l border-[#9C7548]/45 pl-3 text-sm leading-6 text-[#3D2E26]/64">
                {subtotal >= FREE_DELIVERY_THRESHOLD
                  ? "Free delivery applied."
                  : `Free UK delivery over ${formatPrice(
                      FREE_DELIVERY_THRESHOLD
                    )}.`}
              </p>
              <Button type="submit" className="mt-6 h-12 w-full">
                Place Mock Order
              </Button>
            </aside>
          </form>
        )}
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
};

const Field = ({
  label,
  value,
  onChange,
  error,
  type = "text",
  className,
}: FieldProps) => {
  const fieldId = `checkout-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
  <div className={className}>
    <label
      htmlFor={fieldId}
      className="mb-2 block text-sm text-[#3D2E26]/70"
    >
      {label}
    </label>
    <input
      id={fieldId}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-12 w-full border border-[#9C7548]/28 bg-[#F2EADC]/78 px-3 text-sm text-[#3D2E26] outline-none transition-all duration-300 placeholder:text-[#3D2E26]/38 hover:border-[#9C7548]/50 focus:border-[#2A1820] focus:ring-1 focus:ring-[#9C7548]/45"
    />
    {error && <p className="mt-2 text-xs text-[#6F2F2B]">{error}</p>}
  </div>
  );
};
