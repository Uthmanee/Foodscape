import { createAsyncThunk } from "@reduxjs/toolkit";

import card from "../api/paymentCard";

export const postCard = createAsyncThunk(
  "card/postCard",
  async ({ user, items }, thunkAPI) => {
    try {
      const response = await card.postCards(user, items);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // provides the error.message as the payload of the rejected action, so that the error message is available to reducers
      // This error message can be accessed inside of extraReducer by state.error = action.payload (error / custom name)
    }
  }
);

export const fetchCard = createAsyncThunk("card/fetchCard", async (user) => {
  try {
    const response = await card.getCards(user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
