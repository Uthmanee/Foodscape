const initialUIState = {
  error: false,
  loading: true,
  uploading: false,
};

const createUIExtraReducers = (
  fetchAsyncActions,
  postAsyncActions,
  dataName
) => {
  return (builder) => {
    builder
      .addCase(fetchAsyncActions.pending, (state) => {
        state.ui.loading = true;
        state.ui.error = false;
      })
      .addCase(fetchAsyncActions.fulfilled, (state, action) => {
        state.ui.loading = false;
        if (dataName) {
          if (dataName === "cart") {
            state.items = action.payload ? action.payload : [];
            state.totalQuantity = state.items.reduce(
              (acc, item) => acc + item.quantity,
              0
            );
            state.subTotal = state.items.reduce(
              (acc, item) => acc + item.price,
              0
            );
          } else if (dataName === "favourite") {
            state.favourites = {
              foods: (action.payload && action.payload.foods) || [],
              restaurants: (action.payload && action.payload.restaurants) || [],
            };
          }
        } else {
          state.items = action.payload ? action.payload : [];
        }
      })
      .addCase(fetchAsyncActions.rejected, (state) => {
        console.log("rejected");
        state.ui.loading = false;
        state.ui.error = true;
      })
      .addCase(postAsyncActions.pending, (state) => {
        state.ui.uploading = true;
        state.ui.error = false;
      })
      .addCase(postAsyncActions.fulfilled, (state) => {
        state.ui.uploading = false;
        state.ui.error = false;
      })
      .addCase(postAsyncActions.rejected, (state) => {
        state.ui.uploading = false;
        state.ui.error = true;
      });
  };
};

export { initialUIState, createUIExtraReducers };
