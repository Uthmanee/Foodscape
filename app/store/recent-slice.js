import { createSlice } from "@reduxjs/toolkit";

import { fetchRecent, postRecent } from "./recent-async-actions";
import { initialUIState, createUIExtraReducers } from "./uiExtraReducers";
import deleteSelectedItemReducer from "../helper/deleteSelectedItemReducer";
import notificationReset from "../helper/notificationReset";

const recentSlice = createSlice({
  name: "recent",
  initialState: {
    changed: false,
    items: [],
    notification: "",
    ui: initialUIState,
  },
  reducers: {
    addToRecent(state, action) {
      const item = action.payload;
      state.items = [...item, ...state.items.slice(0, 15)];
      state.changed = true;
    },
    removeFromRecent: deleteSelectedItemReducer,
    resetNotification: notificationReset,
  },
  extraReducers: createUIExtraReducers(fetchRecent, postRecent),
});

export const recentActions = recentSlice.actions;

export default recentSlice;
