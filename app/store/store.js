import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import cardSlice from "./paymentCard-slice";
import favouriteSlice from "./favourite-slice";
import recentSlice from "./recent-slice";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    cart: cartSlice.reducer,
    favourite: favouriteSlice.reducer,
    recent: recentSlice.reducer,
  },
});

export default store;
