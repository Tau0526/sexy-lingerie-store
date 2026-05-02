const returnsSections = [
  {
    title: "Unopened Items",
    body: "Unopened, unworn items in their original sealed packaging may be eligible for return.",
  },
  {
    title: "Faulty Items",
    body: "If an item arrives faulty, please contact us with your order details and photos so we can review the issue.",
  },
  {
    title: "Size Exchanges",
    body: "Size exchanges may be considered for eligible unopened items. Return postage may be the customer's responsibility.",
  },
  {
    title: "Return Window",
    body: "The final return window will be confirmed before the live store launch. For the MVP, this page provides policy guidance only.",
  },
];

export default function ReturnsPage() {
  return (
    <main className="bg-[#F2EADC] pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Returns
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            A clear and careful returns policy for intimate apparel.
          </p>
        </section>

        <section className="max-w-3xl py-8">
          <div className="mb-4 border-l border-[#9C7548]/45 bg-[#E8DECD] px-5 py-5">
            <h2 className="mb-2 text-lg font-medium text-[#3D2E26]">
              Hygiene Notice
            </h2>
            <p className="text-sm leading-7 text-[#3D2E26]/68 sm:text-base">
              For hygiene reasons, opened intimate apparel cannot be returned
              unless faulty. Eligible returns should be unopened, unworn and in
              their original packaging.
            </p>
          </div>

          <div className="divide-y divide-[#9C7548]/18">
            {returnsSections.map((section) => (
              <div key={section.title} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
                <h2 className="text-lg font-medium text-[#3D2E26]">
                  {section.title}
                </h2>
                <p className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
