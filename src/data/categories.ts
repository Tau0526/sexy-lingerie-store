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
    label: "Lingerie Sets",
    slug: "lingerie-sets",
    description: "Matching lingerie sets for confident nights and slow mornings.",
  },
  {
    id: 2,
    label: "Sleepwear",
    slug: "sleepwear",
    description: "Sensual nightwear designed to feel soft, calm and elevated.",
  },
  {
    id: 3,
    label: "Slips & Chemises",
    slug: "slips-chemises",
    description: "Soft drape, lace trims and elegant nightwear silhouettes.",
  },
  {
    id: 4,
    label: "Costumes",
    slug: "costumes",
    description: "Statement pieces with a refined Moonlite Studio mood.",
  },
  {
    id: 5,
    label: "Accessories",
    slug: "accessories",
    description: "Finishing touches and delicate foundations for every look.",
  },
  {
    id: 6,
    label: "Bras",
    slug: "bras",
    description: "Soft support, refined shapes and everyday confidence.",
  },
];
