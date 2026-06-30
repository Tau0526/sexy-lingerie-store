import React from "react";
import EnquireNowBtn from "./EnquireNowBtn";
import { Product } from "@/types/product.types";

const AddToCardSection = ({ data }: { data: Product }) => {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full border-t border-moonlite-border/70 bg-moonlite-ivory/96 p-4 backdrop-blur md:relative md:border-none md:bg-transparent md:p-0 md:backdrop-blur-0">
      <EnquireNowBtn data={data} />
    </div>
  );
};

export default AddToCardSection;
