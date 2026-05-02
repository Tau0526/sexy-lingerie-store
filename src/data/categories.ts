import { ProductCategory } from "@/types/product.types";

export type Category = {
  id: number;
  label: ProductCategory;
  slug: string;
  description: string;
};

export const categoriesData: Category[] = [
  {
    id: 1,
    label: "Bras",
    slug: "bras",
    description: "Soft support, refined shapes and everyday confidence.",
  },
  {
    id: 2,
    label: "Briefs",
    slug: "briefs",
    description: "Comfortable foundations with delicate Moonlite details.",
  },
  {
    id: 3,
    label: "Bodysuits",
    slug: "bodysuits",
    description: "Sculpted silhouettes for quiet allure and elegant layering.",
  },
  {
    id: 4,
    label: "Sleepwear",
    slug: "sleepwear",
    description: "Sensual nightwear designed to feel soft, calm and elevated.",
  },
  {
    id: 5,
    label: "Loungewear",
    slug: "loungewear",
    description: "Relaxed pieces with a polished boutique mood.",
  },
  {
    id: 6,
    label: "Sets",
    slug: "sets",
    description: "Matching lingerie sets for confident nights and slow mornings.",
  },
];
