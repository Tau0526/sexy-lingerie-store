export type Discount = {
  amount: number;
  percentage: number;
};

export type ProductCategory =
  | "Bras"
  | "Briefs"
  | "Bodysuits"
  | "Sleepwear"
  | "Loungewear"
  | "Sets";

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
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: ProductColor[];
  isNew: boolean;
};
