import { configureStore } from '@reduxjs/toolkit';
import {
  productListReducer,
  productListActions
} from './slices/productList.slice';
import {
  productDetailsActions,
  productDetailsReducer
} from './slices/productDetails.slice';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer
  }
});

export const actions = {
  ...productListActions,
  ...productDetailsActions
};

export type AppState = ReturnType<typeof store.getState>;
