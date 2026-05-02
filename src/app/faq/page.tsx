import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you ship within the UK?",
    answer: "Yes, the first version is focused on UK delivery.",
  },
  {
    question: "Is the packaging discreet?",
    answer: "Yes, orders are prepared in plain outer packaging for privacy.",
  },
  {
    question: "Can I return intimate apparel?",
    answer:
      "For hygiene reasons, opened intimate apparel cannot be returned unless faulty.",
  },
  {
    question: "Can I exchange sizes?",
    answer:
      "Eligible unopened items may be considered for size exchange. Return postage may apply.",
  },
  {
    question: "Is this website taking real payments?",
    answer:
      "This MVP uses a demo checkout. No real payment is taken at this stage.",
  },
  {
    question: "When will live payment be available?",
    answer:
      "A live payment flow can be added in a later version after payment provider review.",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-[#F2EADC] pb-24 text-[#3D2E26]">
      <div className="mx-auto max-w-frame px-4 xl:px-0">
        <section className="border-b border-[#9C7548]/18 py-14 sm:py-20">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1 className="mb-5 text-4xl font-medium leading-tight md:text-5xl">
            FAQ
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#3D2E26]/64">
            Practical details about delivery, packaging, returns and the demo
            checkout.
          </p>
        </section>

        <section className="max-w-3xl py-10">
          <Accordion type="single" collapsible className="border-y border-[#9C7548]/18">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-[#9C7548]/18"
              >
                <AccordionTrigger className="text-left text-base font-medium text-[#3D2E26] hover:text-[#9C7548] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-[#3D2E26]/66 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
