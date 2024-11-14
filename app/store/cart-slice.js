import { createSlice } from "@reduxjs/toolkit";

import { fetchCart, postCart } from "./cart-async-actions";
import { initialUIState, createUIExtraReducers } from "./uiExtraReducers";
import notificationReset from "../helper/notificationReset";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    changed: false,
    items: [],
    notification: "",
    ui: initialUIState,
    totalQuantity: 0,
    subTotal: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      if (!existingItem) {
        state.items = [
          {
            ...newItem,
            price: newItem.price,
          },
          ...state.items,
        ];
      } else {
        const updatedQuantity = existingItem.quantity + newItem.quantity;
        existingItem.quantity = updatedQuantity;
        existingItem.price = existingItem.price + newItem.price;
      }

      state.subTotal = state.items.reduce((acc, item) => acc + item.price, 0);
      state.notification = `${newItem.quantity} items added to cart`;
      state.changed = true;
    },
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.notification = "Order completed";
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const cartItem = action.payload;

      state.totalQuantity = state.totalQuantity - cartItem.quantity;

      state.items = state.items.filter((item) => item.id !== cartItem.id);

      state.subTotal = state.items.reduce((acc, item) => acc + item.price, 0);
      state.notification = `${cartItem.quantity} item${
        cartItem.quantity > 1 ? "s" : ""
      } removed from cart`;
      state.changed = true;
    },
    resetNotification: notificationReset,
  },
  extraReducers: createUIExtraReducers(fetchCart, postCart, "cart"),
});

export const cartActions = cartSlice.actions;

export default cartSlice;
