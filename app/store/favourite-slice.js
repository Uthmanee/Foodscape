import { createSlice } from "@reduxjs/toolkit";

import { fetchFavourites, postFavourites } from "./favourite-async-actions";
import { initialUIState, createUIExtraReducers } from "./uiExtraReducers";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    changed: false,
    favourites: { foods: [], restaurants: [] },
    notification: "",
    ui: initialUIState,
  },
  reducers: {
    toggleFavourite(state, action) {
      const item = action.payload;
      const isRestaurant = item.restaurantName !== undefined;

      const index = state.favourites[
        isRestaurant ? "foods" : "restaurants"
      ].findIndex((favItem) => favItem.id === item.id);

      if (index === -1) {
        state.favourites[isRestaurant ? "foods" : "restaurants"] = [
          item,
          ...state.favourites[isRestaurant ? "foods" : "restaurants"],
        ];
        state.notification = `${
          isRestaurant ? "food" : "restaurant"
        } added to favourites`;
      } else {
        state.favourites[isRestaurant ? "foods" : "restaurants"].splice(
          index,
          1
        );
        state.notification = `${
          isRestaurant ? "food" : "restaurant"
        } removed from favourites`;
      }

      state.changed = true;
    },
  },
  extraReducers: createUIExtraReducers(
    fetchFavourites,
    postFavourites,
    "favourite"
  ),
});

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;
