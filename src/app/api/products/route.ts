import { getProductRecords } from "@/lib/products";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getProductRecords();

  return NextResponse.json({ products });
}
