import { createSlice } from "@reduxjs/toolkit";

import deleteSelectedItemReducer from "../helper/deleteSelectedItemReducer";
import { fetchCard, postCard } from "./paymentCard-async-actions";
import { initialUIState, createUIExtraReducers } from "./uiExtraReducers";
import notificationReset from "../helper/notificationReset";
import changedReset from "../helper/changedReset";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    changed: false,
    notification: "",
    items: [],
    ui: initialUIState,
  },
  reducers: {
    addCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.cardNumber === newItem.cardNumber
      );

      if (!existingItem) {
        state.items = [newItem, ...state.items];
        state.changed = true;
        state.notification = "New Card Added";
      } else {
        state.notification = "A card with the same number already exists ";
      }
    },
    editCard(state, action) {
      const cardInput = action.payload;

      const cardIndex = state.items.findIndex(
        (item) => item.id === cardInput.id
      );
      const card = state.items[cardIndex];

      const isCardUnchanged =
        cardInput.cardName === card.cardName &&
        cardInput.cardNumber === card.cardNumber &&
        cardInput.cvv === card.cvv &&
        cardInput.cardType === card.cardType &&
        cardInput.expiryDate === card.expiryDate &&
        cardInput.logo === card.logo;

      if (isCardUnchanged) {
        state.notification = "No changes have been made to this card.";
      } else {
        state.items[cardIndex] = { ...cardInput };
        state.changed = true;
        state.notification = "Card edited successfuly!";
      }
    },
    removeCard: deleteSelectedItemReducer,
    resetChanged: changedReset,
    resetNotification: notificationReset,
  },
  extraReducers: createUIExtraReducers(fetchCard, postCard),
});

export const cardActions = cardSlice.actions;

export default cardSlice;
