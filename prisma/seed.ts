import { PrismaClient } from "@prisma/client";
import { allProductsData } from "../src/data/products";

const prisma = new PrismaClient();

const toPence = (price: number) => Math.round(price * 100);

const makeSku = (slug: string, size: string, color: string) =>
  `TEMP-${slug}-${size}-${color}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getImagesJson = (product: (typeof allProductsData)[number]) => ({
  srcUrl: product.srcUrl,
  srcAlt: product.srcAlt ?? null,
  gallery: product.gallery ?? [],
  galleryAlts: product.galleryAlts ?? [],
});

const getTagsJson = (product: (typeof allProductsData)[number]) => ({
  legacyId: product.id,
  details: product.details,
  colors: product.colors,
  isNew: product.isNew,
  tag: product.tag ?? null,
});

async function seedProducts() {
  for (const product of allProductsData) {
    const price = toPence(product.price);
    const compareAtPrice =
      product.discount.percentage > 0 || product.discount.amount > 0
        ? price
        : null;
    const currentPrice =
      product.discount.percentage > 0
        ? toPence(product.price - (product.price * product.discount.percentage) / 100)
        : product.discount.amount > 0
        ? toPence(product.price - product.discount.amount)
        : price;

    const savedProduct = await prisma.product.upsert({
      where: { slug: product.slug },
      create: {
        name: product.title,
        slug: product.slug,
        category: product.category,
        price: currentPrice,
        compareAtPrice,
        shortDescription: product.description,
        description: product.longDescription,
        material: product.material,
        care: product.care,
        images: getImagesJson(product),
        tags: getTagsJson(product),
        rating: product.rating,
        isFeatured: Boolean(product.isNew),
        isActive: true,
      },
      update: {
        name: product.title,
        category: product.category,
        price: currentPrice,
        compareAtPrice,
        shortDescription: product.description,
        description: product.longDescription,
        material: product.material,
        care: product.care,
        images: getImagesJson(product),
        tags: getTagsJson(product),
        rating: product.rating,
        isFeatured: Boolean(product.isNew),
        isActive: true,
      },
    });

    for (const size of product.sizes) {
      for (const color of product.colors) {
        const sku = makeSku(product.slug, size, color.name);

        await prisma.productVariant.upsert({
          where: { sku },
          create: {
            productId: savedProduct.id,
            sku,
            size,
            color: color.name,
            stock: 10,
            isActive: true,
          },
          update: {
            productId: savedProduct.id,
            size,
            color: color.name,
            stock: 10,
            isActive: true,
          },
        });
      }
    }
  }
}

seedProducts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
