import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type {
  Product,
  ProductCategory,
  ProductColor,
} from "@/types/product.types";

type ProductImages = {
  srcUrl?: string;
  srcAlt?: string;
  gallery?: string[];
  galleryAlts?: string[];
};

type ProductTags = {
  legacyId?: number;
  details?: string[];
  colors?: ProductColor[];
  isNew?: boolean;
  tag?: Product["tag"];
};

type ProductRecord = Prisma.ProductGetPayload<{
  include: { variants: true };
}>;

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const parseImages = (value: unknown): ProductImages =>
  isObject(value) ? (value as ProductImages) : {};

const parseTags = (value: unknown): ProductTags =>
  isObject(value) ? (value as ProductTags) : {};

const penceToPounds = (value: number) => value / 100;

export const mapProductRecord = (
  product: ProductRecord,
  index = 0
): Product => {
  const images = parseImages(product.images);
  const tags = parseTags(product.tags);
  const colorsFromTags = Array.isArray(tags.colors) ? tags.colors : [];
  const colorsFromVariants = product.variants.map((variant) => ({
    name: variant.color,
    code: "",
  }));
  const colors =
    colorsFromTags.length > 0
      ? colorsFromTags
      : colorsFromVariants.filter(
          (color, colorIndex, allColors) =>
            allColors.findIndex((item) => item.name === color.name) ===
            colorIndex
        );
  const sizes = product.variants
    .map((variant) => variant.size)
    .filter(
      (size, sizeIndex, allSizes) => allSizes.indexOf(size) === sizeIndex
    );

  return {
    id: tags.legacyId ?? index + 1,
    title: product.name,
    slug: product.slug,
    category: product.category as ProductCategory,
    srcUrl: images.srcUrl ?? images.gallery?.[0] ?? "/images/pic1.png",
    srcAlt: images.srcAlt,
    gallery: images.gallery,
    galleryAlts: images.galleryAlts,
    price: penceToPounds(product.price),
    discount: { amount: 0, percentage: 0 },
    rating: product.rating ?? 0,
    description: product.shortDescription ?? "",
    longDescription: product.description ?? undefined,
    details: Array.isArray(tags.details) ? tags.details : [],
    material: product.material ?? "",
    care: product.care ?? "",
    sizes,
    colors,
    isNew: tags.isNew ?? false,
    tag: tags.tag ?? undefined,
  };
};

export const getProductRecords = () =>
  prisma.product.findMany({
    where: { isActive: true },
    include: {
      variants: {
        where: { isActive: true },
        orderBy: [{ size: "asc" }, { color: "asc" }],
      },
    },
    orderBy: { createdAt: "asc" },
  });

export const getProductRecordBySlug = (slug: string) =>
  prisma.product.findUnique({
    where: { slug },
    include: {
      variants: {
        where: { isActive: true },
        orderBy: [{ size: "asc" }, { color: "asc" }],
      },
    },
  });

export const getProducts = async () => {
  const products = await getProductRecords();

  return products.map((product, index) => mapProductRecord(product, index));
};

export const getProductBySlug = async (slug: string) => {
  const product = await getProductRecordBySlug(slug);

  return product ? mapProductRecord(product) : null;
};
