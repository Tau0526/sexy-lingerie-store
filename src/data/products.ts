import { Product } from "@/types/product.types";

const blackLaceMoonlitSetGallery = Array.from(
  { length: 18 },
  (_, index) =>
    `/products/black-lace-moonlit-set/black-lace-moonlit-set-${index + 1}.jpg`
);

const blackLaceMoonlitSetGalleryAlts = [
  "Black Lace Moonlit Set front view",
  "Black Lace Moonlit Set lace detail",
  "Black Lace Moonlit Set side view",
  "Black Lace Moonlit Set back view",
  "Black Lace Moonlit Set sheer lace detail",
  "Black Lace Moonlit Set strap detail",
  "Black Lace Moonlit Set fabric close-up",
  "Black Lace Moonlit Set styled front view",
  "Black Lace Moonlit Set cup detail",
  "Black Lace Moonlit Set waist detail",
  "Black Lace Moonlit Set silhouette view",
  "Black Lace Moonlit Set black lace texture",
  "Black Lace Moonlit Set mesh detail",
  "Black Lace Moonlit Set elegant front view",
  "Black Lace Moonlit Set delicate trim detail",
  "Black Lace Moonlit Set refined back view",
  "Black Lace Moonlit Set intimate set detail",
  "Black Lace Moonlit Set final gallery view",
];

const laceSetSizes = ["S", "M", "L", "XL"];
const laceSetMaterial = "Lace, mesh and soft-touch stretch fabric.";
const laceSetCare = "Hand wash cold. Do not bleach. Lay flat to dry.";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Black Lace Moonlit Set",
    slug: "black-lace-moonlit-set",
    category: "Lingerie Sets",
    srcUrl: "/products/black-lace-moonlit-set/black-lace-moonlit-set-1.jpg",
    srcAlt: "Black Lace Moonlit Set front view",
    gallery: blackLaceMoonlitSetGallery,
    galleryAlts: blackLaceMoonlitSetGalleryAlts,
    price: 29.99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.7,
    description:
      "A black lace intimate set with delicate sheer detailing, designed for quiet confidence and moonlit evenings.",
    longDescription:
      "A refined black lace set designed for intimate evenings and quiet confidence. Sheer lace, soft structure and delicate detailing create a polished silhouette while keeping the overall mood elegant, minimal and sensual without being vulgar.",
    details: [
      "Delicate sheer lace detailing",
      "Soft structured intimate set",
      "Designed for discreet UK delivery",
    ],
    material: laceSetMaterial,
    care: laceSetCare,
    sizes: laceSetSizes,
    colors: [{ name: "Black", code: "bg-[#050507]" }],
    isNew: true,
    tag: "New In",
  },
  {
    id: 2,
    title: "Blue Lace Moonlit Set",
    slug: "blue-lace-moonlit-set",
    category: "Lingerie Sets",
    srcUrl: "/products/blue-lace-moonlit-set-1.jpg",
    srcAlt: "Blue Lace Moonlit Set product image",
    gallery: ["/products/blue-lace-moonlit-set-1.jpg"],
    galleryAlts: ["Blue Lace Moonlit Set product image"],
    price: 29.99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
    description:
      "A blue lace intimate set with soft sheer detailing, designed for quiet confidence and moonlit evenings.",
    longDescription:
      "A refined blue lace set designed with delicate sheer texture and a soft feminine silhouette. Created for intimate evenings, quiet confidence and a polished Moonlite Studio mood.",
    details: [
      "Soft sheer lace detailing",
      "Polished Moonlite Studio silhouette",
      "Designed for discreet UK delivery",
    ],
    material: laceSetMaterial,
    care: laceSetCare,
    sizes: laceSetSizes,
    colors: [{ name: "Blue", code: "bg-[#2F5F96]" }],
    isNew: true,
    tag: "New In",
  },
  {
    id: 3,
    title: "Red Lace Moonlit Set",
    slug: "red-lace-moonlit-set",
    category: "Lingerie Sets",
    srcUrl: "/products/red-lace-moonlit-set-1.jpg",
    srcAlt: "Red Lace Moonlit Set product image",
    gallery: ["/products/red-lace-moonlit-set-1.jpg"],
    galleryAlts: ["Red Lace Moonlit Set product image"],
    price: 29.99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.8,
    description:
      "A red lace intimate set with delicate sheer detailing, designed for confident evenings and soft allure.",
    longDescription:
      "A warm red lace set with refined sheer details and a feminine silhouette. Designed to feel sensual, polished and confident without becoming vulgar or overly explicit.",
    details: [
      "Delicate sheer detailing",
      "Warm red lace finish",
      "Designed for discreet UK delivery",
    ],
    material: laceSetMaterial,
    care: laceSetCare,
    sizes: laceSetSizes,
    colors: [{ name: "Red", code: "bg-[#8B1E2D]" }],
    isNew: true,
    tag: "New In",
  },
  {
    id: 4,
    title: "Black Lace Nocturne Set",
    slug: "black-lace-nocturne-set",
    category: "Lingerie Sets",
    srcUrl: "/products/black2-lace-moonlit-set-1.jpg",
    srcAlt: "Black Lace Nocturne Set product image",
    gallery: ["/products/black2-lace-moonlit-set-1.jpg"],
    galleryAlts: ["Black Lace Nocturne Set product image"],
    price: 29.99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.6,
    description:
      "A black lace intimate set with a refined nocturne mood, designed for quiet confidence and elegant evenings.",
    longDescription:
      "A black lace set with soft sheer texture and a polished silhouette. Designed for Moonlite Studio's Silk Noir mood: intimate, minimal and quietly dramatic.",
    details: [
      "Soft sheer lace texture",
      "Refined nocturne mood",
      "Designed for discreet UK delivery",
    ],
    material: laceSetMaterial,
    care: laceSetCare,
    sizes: laceSetSizes,
    colors: [{ name: "Black", code: "bg-[#050507]" }],
    isNew: true,
    tag: "New In",
  },
  {
    id: 5,
    title: "Blue Lace Dusk Set",
    slug: "blue-lace-dusk-set",
    category: "Lingerie Sets",
    srcUrl: "/products/blue2-lace-moonlit-set-1.jpg",
    srcAlt: "Blue Lace Dusk Set product image",
    gallery: ["/products/blue2-lace-moonlit-set-1.jpg"],
    galleryAlts: ["Blue Lace Dusk Set product image"],
    price: 29.99,
    discount: { amount: 0, percentage: 0 },
    rating: 4.6,
    description:
      "A blue lace intimate set with delicate dusk-toned detailing, designed for softness, confidence and quiet allure.",
    longDescription:
      "A soft blue lace set with sheer detailing and a refined boutique mood. Designed for calm confidence, delicate structure and Moonlite Studio's understated intimate style.",
    details: [
      "Dusk-toned lace detailing",
      "Refined boutique mood",
      "Designed for discreet UK delivery",
    ],
    material: laceSetMaterial,
    care: laceSetCare,
    sizes: laceSetSizes,
    colors: [{ name: "Blue", code: "bg-[#2F5F96]" }],
    isNew: true,
    tag: "New In",
  },
];

export const topSellingData: Product[] = [
  newArrivalsData[2],
  newArrivalsData[3],
  newArrivalsData[4],
  newArrivalsData[0],
];

export const relatedProductData: Product[] = [
  newArrivalsData[1],
  newArrivalsData[2],
  newArrivalsData[3],
  newArrivalsData[4],
];

export const allProductsData: Product[] = newArrivalsData;
