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
        <main className="silk-page pb-[64px] sm:pb-24">
        <div className="pt-[64px] sm:pt-24">
          <ProductListSec
            title="New Collection"
            data={newArrivalsData}
            viewAllLink="/shop"
            theme="dark"
          />
        </div>
        <section
          id="about"
          className="max-w-frame mx-auto px-4 xl:px-0 my-[72px] sm:my-28"
        >
          <div className="grid grid-cols-1 gap-8 border-y border-[#9C7548]/18 py-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="pr-0 lg:pr-12">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
                03 / Private Details
              </span>
              <h2 className="mt-4 mb-4 max-w-[720px] text-3xl font-medium text-[#3D2E26] md:text-[44px] md:leading-[54px]">
                Private confidence, refined intimacy, and quiet allure.
              </h2>
              <p className="max-w-[650px] text-sm leading-7 text-[#3D2E26]/66 md:text-base">
                We create elegant intimate apparel for women and couples who
                want pieces that feel confident, comfortable, and beautifully
                understated. Designed for moonlit evenings, slow mornings, and
                everything in between.
              </p>
            </div>
            <div
              id="packaging"
              className="group border border-[#9C7548]/18 bg-[#E8DECD]/72 p-7 transition-all duration-500 ease-out hover:border-[#9C7548]/38 hover:bg-[#E8DECD] md:p-10"
            >
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
                Discreet UK Packaging
              </span>
              <h2 className="mt-4 mb-4 text-2xl font-medium text-[#3D2E26] md:text-[32px]">
                Plain outside. Beautifully prepared inside.
              </h2>
              <p className="text-sm leading-7 text-[#3D2E26]/66 md:text-base">
                Every order is packed with privacy in mind, using plain outer
                packaging and a careful inner presentation.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-[72px] sm:mb-28">
          <ProductListSec
            title="Featured Products"
            data={topSellingData}
            viewAllLink="/shop"
            theme="dark"
          />
        </div>
        <div className="mb-[72px] sm:mb-28">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
