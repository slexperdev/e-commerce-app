import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product, ID } from "@/types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Find item index by productId
const findIndex = (items: CartItem[], productId: ID) =>
  items.findIndex(i => String(i.productId) === String(productId));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add item to cart or increase quantity if exists
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity?: number }>
    ) => {
      const { product, quantity = 1 } = action.payload;
      const idx = findIndex(state.items, product.id);

      if (idx >= 0) {
        state.items[idx].quantity += quantity;
      } else {
        state.items.push({
          productId: product.id,
          product,
          quantity,
          unitPrice: product.price,
        });
      }
    },

    // Remove item completely from cart
    removeFromCart: (state, action: PayloadAction<{ productId: ID }>) => {
      state.items = state.items.filter(
        item => String(item.productId) !== String(action.payload.productId)
      );
    },

    // Update item quantity (remove if 0)
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: ID; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const idx = findIndex(state.items, productId);
      if (idx >= 0) {
        if (quantity <= 0) {
          state.items.splice(idx, 1);
        } else {
          state.items[idx].quantity = quantity;
        }
      }
    },

    // Clear cart
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
