import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

type ShopHeroProps = {
  imageSrc: string;
  imageAlt: string;
};

const ShopHero = ({
  imageSrc: _imageSrc,
  imageAlt: _imageAlt,
}: ShopHeroProps) => {
  // TODO: Replace with a dedicated cream lingerie flat-lay hero asset with satin, perfume, and accessories.
  const heroImageSrc = "/images/moonlite/image_14.png";
  const heroImageAlt = "Moonlite lingerie packaging editorial flat lay";

  return (
    <section className="moonlite-reveal mb-5 border-b border-moonlite-border/55 pb-6 sm:pb-7 lg:mb-6 lg:pb-8">
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-10 xl:gap-12">
        <div className="relative aspect-[16/11] min-h-[235px] overflow-hidden rounded-[20px] border border-[#E6D6C6] bg-moonlite-cream sm:min-h-[290px] lg:h-[320px] lg:min-h-0">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex min-h-[235px] items-center justify-center px-1 py-1 text-center sm:min-h-[270px] lg:min-h-[320px]">
          <div className="mx-auto flex max-w-[520px] flex-col items-center">
            <span className="mb-4 block text-[11px] uppercase tracking-[0.34em] text-moonlite-bronze sm:mb-5">
              MOONLITE EDIT
            </span>
            <h1
              className={`${cormorantGaramond.className} flex max-w-full flex-col items-center overflow-visible font-light uppercase leading-[0.84] tracking-[-0.045em] text-moonlite-espresso`}
            >
              <span className="text-[clamp(2.9rem,9.5vw,4.8rem)] lg:text-[clamp(3.8rem,4.7vw,5.4rem)]">
                THE
              </span>
              <span className="text-[clamp(3.35rem,11.5vw,5.55rem)] lg:text-[clamp(4.5rem,5.7vw,6.9rem)]">
                COLLECTION
              </span>
            </h1>
            <p className="mt-5 max-w-[420px] text-sm leading-7 text-moonlite-taupe sm:mt-6 sm:text-base">
              Explore refined intimates pieces designed for confidence,
              comfort, and quiet luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
