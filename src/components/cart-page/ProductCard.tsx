"use client";

import React from "react";
import { PiTrashFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import CartCounter from "@/components/ui/CartCounter";
import { Button } from "../ui/button";
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
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <Link
        href={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
        className="aspect-square w-full max-w-[132px] shrink-0 overflow-hidden bg-[#F2EADC]"
      >
        <Image
          src={data.srcUrl}
          width={124}
          height={124}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
          alt={data.name}
          priority
        />
      </Link>
      <div className="flex w-full self-stretch flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`}
            className="text-base font-medium text-[#3D2E26] xl:text-xl"
          >
            {data.name}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 text-[#9C7548] hover:bg-[#F2EADC]"
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
            <PiTrashFill className="text-xl" />
          </Button>
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
            className="min-w-[112px] max-w-[112px] rounded-sm bg-[#F2EADC] px-4 py-3 text-[#3D2E26] md:max-h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
