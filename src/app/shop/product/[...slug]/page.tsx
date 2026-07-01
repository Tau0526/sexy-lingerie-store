import { allProductsData, relatedProductData } from "@/data/products";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productId = Number(params.slug[0]);
  const productSlug = params.slug[params.slug.length - 1];
  const productData = allProductsData.find(
    (product) =>
      product.id === productId || product.slug === productSlug
  );

  if (!productData?.title) {
    notFound();
  }

  return (
    <main className="silk-page overflow-x-hidden pb-44 text-moonlite-espresso md:pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="mb-5 h-[1px] border-t-moonlite-border/60 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11 rounded-md border-y border-moonlite-border/60 bg-moonlite-card/30 px-0 py-6 sm:py-8">
          <Header data={productData} />
        </section>
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec
          title="You might also like"
          data={relatedProductData}
          theme="dark"
        />
      </div>
    </main>
  );
}
