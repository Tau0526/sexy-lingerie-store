const shippingSections = [
  {
    title: "UK Delivery",
    body: "We currently share UK delivery guidance for Moonlite Studio pieces.",
  },
  {
    title: "Delivery Fee",
    body: "Final delivery fees will be confirmed when availability is discussed.",
  },
  {
    title: "Delivery Time",
    body: "Estimated delivery time is 5-10 working days.",
  },
  {
    title: "Discreet UK Packaging",
    body: "Pieces can be prepared in plain outer packaging for privacy. The outer parcel does not display product details.",
  },
  {
    title: "Availability Enquiries",
    body: "As this is a showcase website, please contact us to ask about availability and delivery timing.",
  },
];

export default function ShippingPage() {
  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="moonlite-reveal border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Shipping
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            Discreet UK delivery guidance for Moonlite Studio pieces.
          </p>
        </section>

        <section
          id="packaging"
          className="max-w-3xl scroll-mt-24 divide-y divide-[#9C7548]/18 border-b border-[#9C7548]/18"
        >
          {shippingSections.map((section) => (
            <div
              key={section.title}
              className="grid gap-4 py-8 transition-colors duration-300 hover:bg-[#E8DECD]/35 md:grid-cols-[220px_1fr]"
            >
              <h2 className="text-lg font-medium text-[#3D2E26]">
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
