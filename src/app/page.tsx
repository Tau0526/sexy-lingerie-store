import BestSellers from "@/components/homepage/BestSellers";
import CategoryNavigation from "@/components/homepage/CategoryNavigation";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="silk-page overflow-x-hidden pb-12 sm:pb-20">
        <CategoryNavigation />
        <div className="mb-14 sm:mb-20 lg:mb-24">
          <BestSellers />
        </div>
        <div className="mb-14 sm:mb-20 lg:mb-24">
          <DressStyle />
        </div>
      </main>
    </>
  );
}
