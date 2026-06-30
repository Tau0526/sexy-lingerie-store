import Link from "next/link";

const sections = [
  {
    title: "What are cookies?",
    body: "Cookies and similar technologies can help websites remember preferences and improve browsing experiences.",
  },
  {
    title: "What this demo site uses",
    body: "Moonlite Studio may use localStorage for age gate confirmation, cookie preference choice and demo newsletter preferences if applicable.",
  },
  {
    title: "Cookie categories",
    body: "Strictly necessary cookies support core site features. Functional cookies may remember preferences. Analytics cookies may help improve the website. Marketing cookies may help personalise content or advertising in future versions.",
  },
  {
    title: "Current MVP status",
    body: "This demo site does not currently connect live analytics, advertising or payment tracking services.",
  },
  {
    title: "Managing preferences",
    body: "You can choose cookie preferences from the cookie banner. The Cookie Preferences link in the footer can reopen your preferences panel.",
  },
  {
    title: "Notice",
    body: "This page is prepared for an MVP demo and should be reviewed before any live commercial launch.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="moonlite-reveal border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            Cookie Policy
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            How Moonlite Studio uses cookies and localStorage in this demo
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
