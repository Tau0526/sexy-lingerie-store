import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    body: "Moonlite Studio is currently a brand showcase and enquiry website for intimate apparel. This page explains the types of information that may be collected.",
  },
  {
    title: "Information you provide",
    body: "This may include contact form details and a newsletter email entered into the demo form.",
  },
  {
    title: "Showcase notice",
    body: "Moonlite Studio is currently focused on browsing, wishlists and product enquiries. Card details are not collected.",
  },
  {
    title: "Cookies and localStorage",
    body: "The site may use localStorage to remember age confirmation, cookie preferences and demo preferences.",
  },
  {
    title: "Future updates",
    body: "If new analytics or email services are added later, this policy should be reviewed and updated.",
  },
  {
    title: "Notice",
    body: "This page is prepared for an MVP demo and should be reviewed before any live commercial launch.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="moonlite-reveal border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            How Moonlite Studio handles personal information in this demo
            website.
          </p>
        </section>

        <section className="max-w-3xl divide-y divide-[#9C7548]/18 border-b border-[#9C7548]/18">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid gap-4 py-8 md:grid-cols-[220px_1fr]"
            >
              <h2 className="text-lg font-medium text-[#3D2E26]">
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
          <div className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
            <h2 className="text-lg font-medium text-[#3D2E26]">Contact</h2>
            <p className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
              For questions, contact{" "}
              <Link
                href="mailto:Kayee7601@gmail.com"
                className="moonlite-link text-[#3D2E26]"
              >
                Kayee7601@gmail.com
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
