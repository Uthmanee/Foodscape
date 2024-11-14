import { createAsyncThunk } from "@reduxjs/toolkit";

import favourite from "../api/favourite";

export const postFavourites = createAsyncThunk(
  "favourite/postFavourites",
  async ({ user, items }, thunkAPI) => {
    try {
      const response = await favourite.postFavourites(user, items);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavourites = createAsyncThunk(
  "favourite/fetchFavourites",
  async (user) => {
    try {
      const response = await favourite.getFavourites(user);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
