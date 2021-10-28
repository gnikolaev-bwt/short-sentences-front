import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './slices/products.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer
  }
});

export const actions = {
  ...productsSlice.actions
};

export type AppState = ReturnType<typeof store.getState>;
