import React from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Review } from "@/types/review.types";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  blurChild?: React.ReactNode;
  isAction?: boolean;
  isDate?: boolean;
  data: Review;
  className?: string;
};

const ReviewCard = ({
  blurChild,
  isAction = false,
  isDate = false,
  data,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn([
        "relative bg-[#E8DECD]/70 flex flex-col items-start aspect-auto border border-[#9C7548]/16 rounded-sm p-6 sm:px-8 sm:py-7 overflow-hidden",
        className,
      ])}
    >
      {blurChild && blurChild}
      <div className="mb-3 flex w-full items-center justify-between sm:mb-4">
        <span className="h-px w-12 bg-[#9C7548]/45" />
        {isAction && (
          <Button variant="ghost" size="icon">
            <IoEllipsisHorizontal className="text-[#9A9088] text-2xl" />
          </Button>
        )}
      </div>
      <div className="flex items-center mb-2 sm:mb-3">
        <strong className="text-[#3D2E26] sm:text-xl mr-1">{data.user}</strong>
        <IoIosCheckmarkCircle className="text-[#9C7548] text-xl sm:text-2xl" />
      </div>
      <p className="text-sm sm:text-base text-[#3D2E26]/64">{data.content}</p>
      {isDate && (
        <p className="text-[#3D2E26]/56 text-sm font-medium mt-4 sm:mt-6">
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
