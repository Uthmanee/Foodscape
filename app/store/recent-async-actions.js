import { createAsyncThunk } from "@reduxjs/toolkit";

import recent from "../api/recent";

export const postRecent = createAsyncThunk(
  "recent/postRecent",
  async ({ user, items }, thunkAPI) => {
    try {
      const response = await recent.postRecent(user, items);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecent = createAsyncThunk(
  "recent/fetchRecent",
  async (user) => {
    try {
      const response = await recent.getRecent(user);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
