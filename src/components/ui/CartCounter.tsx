"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type CartCounterProps = {
  isZeroDelete?: boolean;
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
  className?: string;
  initialValue?: number;
};

const CartCounter = ({
  isZeroDelete,
  onAdd,
  onRemove,
  className,
  initialValue = 1,
}: CartCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const addToCart = () => {
    if (onAdd) {
      onAdd(counter + 1);
    }
    setCounter(counter + 1);
  };

  const remove = () => {
    if ((counter === 1 && !isZeroDelete) || counter <= 0) return;

    if (onRemove) {
      onRemove(counter - 1);
    }
    if (counter - 1 <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <div
      className={cn(
        "flex h-12 w-full min-w-[118px] max-w-[118px] items-center justify-between rounded-sm border border-[#9C7548]/28 bg-[#F2EADC]/72 px-3 text-[#3D2E26] sm:max-w-[142px]",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-8 w-8 text-[#3D2E26]/72 hover:bg-transparent hover:text-[#9C7548]"
        onClick={() => remove()}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="min-w-6 text-center text-sm font-medium sm:text-base">
        {!isZeroDelete ? counter : initialValue}
      </span>
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-8 w-8 text-[#3D2E26]/72 hover:bg-transparent hover:text-[#9C7548]"
        onClick={() => addToCart()}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartCounter;
