import { createSlice } from '@reduxjs/toolkit';
import { IProductDetails } from 'src/types';

const initialState = {
  popularProductsDetails: null as IProductDetails[] | null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPopularProductsDetails: (state, action) => {
      state.popularProductsDetails = action.payload;
    }
  }
});
