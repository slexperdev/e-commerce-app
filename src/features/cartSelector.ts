import type { RootState } from "@/app/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((acc, it) => acc + it.quantity, 0);

export const selectCartSubtotal = (state: RootState) =>
  state.cart.items.reduce((acc, it) => acc + it.unitPrice * it.quantity, 0);