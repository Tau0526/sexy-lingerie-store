import { CartItem } from "@/lib/features/carts/cartsSlice";

export const UK_DELIVERY_FEE = 3.99;
export const FREE_DELIVERY_THRESHOLD = 50;

export const getItemUnitPrice = (item: CartItem) => {
  if (item.discount.percentage > 0) {
    return item.price - (item.price * item.discount.percentage) / 100;
  }

  if (item.discount.amount > 0) {
    return item.price - item.discount.amount;
  }

  return item.price;
};

export const getItemSubtotal = (item: CartItem) =>
  getItemUnitPrice(item) * item.quantity;

export const getCartSubtotal = (items: CartItem[] = []) =>
  items.reduce((total, item) => total + getItemSubtotal(item), 0);

export const getUkDelivery = (subtotal: number, itemCount: number) => {
  if (itemCount === 0) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : UK_DELIVERY_FEE;
};

export const getCartTotal = (subtotal: number, shipping: number) =>
  subtotal + shipping;

export const formatPrice = (price: number) => `£${price.toFixed(2)}`;
