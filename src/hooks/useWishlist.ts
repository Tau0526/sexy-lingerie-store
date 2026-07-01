"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const WISHLIST_STORAGE_KEY = "moonlite-wishlist";
const WISHLIST_UPDATED_EVENT = "moonlite-wishlist-updated";

export type WishlistItem = {
  productId?: number;
  slug: string;
  selectedSize?: string;
  selectedColorName?: string;
  selectedColorValue?: string;
  addedAt: string;
  key: string;
};

type StoredWishlistItem = Omit<WishlistItem, "key"> & {
  key?: string;
};

type WishlistVariantContext = {
  productId?: number;
  selectedSize?: string;
  selectedColorName?: string;
  selectedColorValue?: string;
};

const normalizeKeyPart = (value?: string) =>
  encodeURIComponent(value?.trim().toLowerCase() || "default");

export const createWishlistItemKey = ({
  slug,
  selectedSize,
  selectedColorName,
}: Pick<WishlistItem, "slug" | "selectedSize" | "selectedColorName">) =>
  `${normalizeKeyPart(slug)}-${normalizeKeyPart(selectedSize)}-${normalizeKeyPart(
    selectedColorName
  )}`;

const isStoredWishlistItem = (item: unknown): item is StoredWishlistItem => {
  if (!item || typeof item !== "object") return false;

  const maybeItem = item as Partial<StoredWishlistItem>;

  return typeof maybeItem.slug === "string";
};

const normalizeWishlistItem = (item: string | StoredWishlistItem): WishlistItem => {
  if (typeof item === "string") {
    return {
      slug: item,
      addedAt: "",
      key: createWishlistItemKey({ slug: item }),
    };
  }

  return {
    productId: typeof item.productId === "number" ? item.productId : undefined,
    slug: item.slug,
    selectedSize: item.selectedSize,
    selectedColorName: item.selectedColorName,
    selectedColorValue: item.selectedColorValue,
    addedAt: item.addedAt || "",
    key:
      item.key ??
      createWishlistItemKey({
        slug: item.slug,
        selectedSize: item.selectedSize,
        selectedColorName: item.selectedColorName,
      }),
  };
};

const serializeWishlistItems = (items: WishlistItem[]): StoredWishlistItem[] =>
  items.map((item) => ({
    productId: item.productId,
    slug: item.slug,
    selectedSize: item.selectedSize,
    selectedColorName: item.selectedColorName,
    selectedColorValue: item.selectedColorValue,
    addedAt: item.addedAt,
    key: item.key,
  }));

const readWishlist = (): WishlistItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const rawValue = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    const parsedValue: unknown = rawValue ? JSON.parse(rawValue) : [];

    return Array.isArray(parsedValue)
      ? parsedValue
          .filter(
            (item): item is string | StoredWishlistItem =>
              typeof item === "string" || isStoredWishlistItem(item)
          )
          .map(normalizeWishlistItem)
      : [];
  } catch {
    return [];
  }
};

const writeWishlist = (items: WishlistItem[]) => {
  window.localStorage.setItem(
    WISHLIST_STORAGE_KEY,
    JSON.stringify(serializeWishlistItems(items))
  );
  window.dispatchEvent(new Event(WISHLIST_UPDATED_EVENT));
};

export const useWishlist = (
  productKey?: string,
  productAliases: string[] = [],
  variantContext: WishlistVariantContext = {}
) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const wishlistIds = useMemo(
    () => wishlistItems.map((item) => item.slug),
    [wishlistItems]
  );
  const exactKey = useMemo(
    () =>
      productKey
        ? createWishlistItemKey({
            slug: productKey,
            selectedSize: variantContext.selectedSize,
            selectedColorName: variantContext.selectedColorName,
          })
        : "",
    [productKey, variantContext.selectedColorName, variantContext.selectedSize]
  );
  const productOnlyKeys = useMemo(
    () =>
      (productKey ? [productKey, ...productAliases] : productAliases).map((slug) =>
        createWishlistItemKey({ slug })
      ),
    [productAliases, productKey]
  );

  const refreshWishlist = useCallback(() => {
    setWishlistItems(readWishlist());
    setIsReady(true);
  }, []);

  useEffect(() => {
    refreshWishlist();

    window.addEventListener("storage", refreshWishlist);
    window.addEventListener(WISHLIST_UPDATED_EVENT, refreshWishlist);

    return () => {
      window.removeEventListener("storage", refreshWishlist);
      window.removeEventListener(WISHLIST_UPDATED_EVENT, refreshWishlist);
    };
  }, [refreshWishlist]);

  const isSaved = useMemo(
    () =>
      wishlistItems.some((item) =>
        variantContext.selectedSize || variantContext.selectedColorName
          ? item.key === exactKey
          : productOnlyKeys.includes(item.key)
      ),
    [
      exactKey,
      productOnlyKeys,
      variantContext.selectedColorName,
      variantContext.selectedSize,
      wishlistItems,
    ]
  );

  const toggleWishlist = useCallback(() => {
    if (!productKey || typeof window === "undefined") return;

    const currentItems = readWishlist();
    const isVariantSave = Boolean(
      variantContext.selectedSize || variantContext.selectedColorName
    );
    const matchesCurrentItem = (item: WishlistItem) =>
      isVariantSave ? item.key === exactKey : productOnlyKeys.includes(item.key);
    const nextItems = currentItems.some(matchesCurrentItem)
      ? currentItems.filter((item) => !matchesCurrentItem(item))
      : [
          ...currentItems,
          {
            productId: variantContext.productId,
            slug: productKey,
            selectedSize: variantContext.selectedSize,
            selectedColorName: variantContext.selectedColorName,
            selectedColorValue: variantContext.selectedColorValue,
            addedAt: new Date().toISOString(),
            key: exactKey,
          },
        ];

    writeWishlist(nextItems);
    setWishlistItems(nextItems);
    setIsReady(true);
  }, [
    exactKey,
    productKey,
    productOnlyKeys,
    variantContext.productId,
    variantContext.selectedColorName,
    variantContext.selectedColorValue,
    variantContext.selectedSize,
  ]);

  return {
    isReady,
    isSaved,
    wishlistItems,
    wishlistIds,
    toggleWishlist,
  };
};
