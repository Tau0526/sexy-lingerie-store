"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartCounter from "@/components/ui/CartCounter";
import {
  addToCart,
  CartItem,
  remove,
  removeCartItem,
} from "@/lib/features/carts/cartsSlice";
import { useAppDispatch } from "@/lib/hooks/redux";
import { formatPrice, getItemSubtotal, getItemUnitPrice } from "@/lib/cart-pricing";

type ProductCardProps = {
  data: CartItem;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const unitPrice = getItemUnitPrice(data);

  return (
    <div className="group flex flex-col gap-4 p-2 transition-colors duration-300 hover:bg-[#F2EADC]/38 sm:flex-row sm:items-start">
      <Link
        href={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
        className="aspect-[4/5] w-full max-w-[132px] shrink-0 overflow-hidden border border-[#9C7548]/14 bg-[#F2EADC] sm:aspect-square"
      >
        <Image
          src={data.srcUrl}
          width={124}
          height={124}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          alt={data.name}
          priority
        />
      </Link>
      <div className="flex w-full self-stretch flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
            className="moonlite-link text-base font-medium text-[#3D2E26] xl:text-xl"
          >
            {data.name}
          </Link>
          <button
            type="button"
            className="moonlite-link shrink-0 text-sm text-[#3D2E26]/52 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7548]"
            onClick={() =>
              dispatch(
                remove({
                  id: data.id,
                  attributes: data.attributes,
                  quantity: data.quantity,
                })
              )
            }
            aria-label={`Remove ${data.name}`}
          >
            Remove
          </button>
        </div>
        <div className="grid gap-1 text-xs text-[#3D2E26]/62 md:text-sm">
          <span>{data.category || "Moonlite Studio"}</span>
          <span>Size: {data.attributes[0]}</span>
          <span>Colour: {data.attributes[1]}</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="grid gap-1 text-sm text-[#3D2E26]/62">
            <span>Price: {formatPrice(unitPrice)}</span>
            <span className="font-medium text-[#3D2E26]">
              Subtotal: {formatPrice(getItemSubtotal(data))}
            </span>
          </div>
          <CartCounter
            initialValue={data.quantity}
            onAdd={() => dispatch(addToCart({ ...data, quantity: 1 }))}
            onRemove={() =>
              data.quantity === 1
                ? dispatch(
                    remove({
                      id: data.id,
                      attributes: data.attributes,
                      quantity: data.quantity,
                    })
                  )
                : dispatch(
                    removeCartItem({ id: data.id, attributes: data.attributes })
                  )
            }
            isZeroDelete
            className="min-w-[118px] max-w-[118px] bg-[#F2EADC]/72 text-[#3D2E26]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
