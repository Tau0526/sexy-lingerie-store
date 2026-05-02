const sizes = [
  {
    size: "S",
    ukSize: "UK 6-8",
    bust: "82-86 cm",
    waist: "62-66 cm",
    hip: "88-92 cm",
  },
  {
    size: "M",
    ukSize: "UK 10-12",
    bust: "87-92 cm",
    waist: "67-72 cm",
    hip: "93-98 cm",
  },
  {
    size: "L",
    ukSize: "UK 14-16",
    bust: "93-99 cm",
    waist: "73-79 cm",
    hip: "99-105 cm",
  },
  {
    size: "XL",
    ukSize: "UK 18-20",
    bust: "100-106 cm",
    waist: "80-86 cm",
    hip: "106-112 cm",
  },
];

const fitNotes = [
  "If between sizes, consider sizing up for comfort.",
  "Adjustable straps and stretch fabrics may affect fit.",
  "Product-specific fit notes can be added later.",
];

export default function SizeGuidePage() {
  return (
    <main className="bg-[#F2EADC] pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Size Guide
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            A simple guide to help you choose your Moonlite Studio fit.
          </p>
        </section>

        <section className="py-10">
          <div className="overflow-x-auto border-y border-[#9C7548]/18">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-[#E8DECD]">
                <tr>
                  {["Size", "UK Size", "Bust", "Waist", "Hip"].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#3D2E26]/62"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#9C7548]/16">
                {sizes.map((item) => (
                  <tr key={item.size}>
                    <td className="px-5 py-5 text-lg font-medium">{item.size}</td>
                    <td className="px-5 py-5 text-sm text-[#3D2E26]/68">
                      {item.ukSize}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#3D2E26]/68">
                      {item.bust}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#3D2E26]/68">
                      {item.waist}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#3D2E26]/68">
                      {item.hip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#3D2E26]/62">
            Measurements are provided as a general guide. Final sizing may vary
            slightly by product style.
          </p>

          <div className="mt-10 max-w-3xl border-l border-[#9C7548]/45 bg-[#E8DECD] px-5 py-5">
            <h2 className="mb-4 text-xl font-medium">Fit Notes</h2>
            <ul className="space-y-3 text-sm leading-7 text-[#3D2E26]/68 sm:text-base">
              {fitNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
