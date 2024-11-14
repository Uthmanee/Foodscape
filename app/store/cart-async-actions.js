import { createAsyncThunk } from "@reduxjs/toolkit";

import cart from "../api/cart";

export const postCart = createAsyncThunk(
  "cart/postCart",
  async ({ user, items }, thunkAPI) => {
    try {
      const response = await cart.postCart(user, items);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCart = createAsyncThunk("cart/fetchCart", async (user) => {
  try {
    const response = await cart.getCart(user);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
});
