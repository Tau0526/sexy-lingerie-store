const trustItems = [
  "DISCREET UK PACKAGING",
  "FREE UK DELIVERY OVER £50",
  "PRIVATE ENQUIRY SUPPORT",
  "PRIVATE BOUTIQUE FEEL",
];

const ShopTrustStrip = () => {
  return (
    <section className="mt-16 rounded-[28px] border border-[#E8D8C7] bg-[#FBF7F0] px-5 py-7 sm:px-6 lg:px-7">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {trustItems.map((item, index) => {
          const title =
            index === 1 ? "FREE UK DELIVERY OVER \u00a350" : item;
          const text = [
            "Plain outer parcels prepared with care.",
            "Complimentary delivery for larger edits.",
            "Ask about availability before you decide.",
            "A refined experience from browse to enquiry.",
          ][index];

          return (
            <div
              key={item}
              className="border-t border-moonlite-border/70 pt-4 lg:border-l lg:border-t-0 lg:px-5 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <h2 className="text-[11px] font-medium uppercase leading-5 tracking-[0.18em] text-moonlite-espresso">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-moonlite-taupe">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopTrustStrip;
