import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { newArrivalsData, topSellingData } from "@/data/products";
import { reviewsData } from "@/data/reviews";

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="bg-[#08080d] pb-[50px] sm:pb-20">
        <div className="pt-[50px] sm:pt-[72px]">
          <ProductListSec
            title="New Collection"
            data={newArrivalsData}
            viewAllLink="/shop#new-arrivals"
            theme="dark"
          />
        </div>
        <section
          id="about"
          className="max-w-frame mx-auto px-4 xl:px-0 my-[50px] sm:my-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9bdfff]">
                Moonlite Studio
              </span>
              <h2 className="mt-4 mb-4 max-w-[720px] text-3xl md:text-[44px] md:leading-[52px] font-bold text-white">
                Private confidence, refined intimacy, and quiet allure.
              </h2>
              <p className="max-w-[650px] text-sm md:text-base leading-7 text-white/65">
                We create elegant intimate apparel for women and couples who
                want pieces that feel confident, comfortable, and beautifully
                understated. Designed for moonlit evenings, slow mornings, and
                everything in between.
              </p>
            </div>
            <div
              id="packaging"
              className="rounded-[24px] border border-[#9bdfff]/20 bg-[radial-gradient(circle_at_top_right,_rgba(135,92,255,0.34),_transparent_38%),linear-gradient(145deg,_#15111d,_#0b0b12)] p-7 md:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d7c7ff]">
                Discreet UK Packaging
              </span>
              <h2 className="mt-4 mb-4 text-2xl md:text-[32px] font-bold text-white">
                Plain outside. Beautifully prepared inside.
              </h2>
              <p className="text-sm md:text-base leading-7 text-white/65">
                Every order is packed with privacy in mind, using plain outer
                packaging and a careful inner presentation.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Featured Products"
            data={topSellingData}
            viewAllLink="/shop#featured"
            theme="dark"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
