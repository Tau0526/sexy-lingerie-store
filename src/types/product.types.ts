export type Discount = {
  amount: number;
  percentage: number;
};

export type ProductCategory =
  | "Lingerie Sets"
  | "Sleepwear"
  | "Slips & Chemises"
  | "Costumes"
  | "Accessories"
  | "Bras"
  | "Briefs"
  | "Bodysuits";

export type ProductColor = {
  name: string;
  code: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  category: ProductCategory;
  srcUrl: string;
  srcAlt?: string;
  gallery?: string[];
  galleryAlts?: string[];
  price: number;
  discount: Discount;
  rating: number;
  description: string;
  longDescription?: string;
  details: string[];
  material: string;
  care: string;
  sizes: string[];
  colors: ProductColor[];
  isNew: boolean;
  tag?: "New In" | "Best Seller" | "Limited";
};
