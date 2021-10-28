import {
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { ProductsService } from 'src/api';
import { IFoundProduct, IProductDetails } from 'src/types';
import { POPULAR_PRODUCTS } from 'src/constants';

const initialState = {
  popularProducts: [] as IProductDetails[],
  foundProducts: [] as IFoundProduct[],
  lastQuery: null as string | null,
  isLoading: false,
  isShowingPopular: true
};

const fetchPopularProducts = createAsyncThunk(
  'productList/fetchPopularProducts',
  async (_, { getState }) => {
    const state = getState() as { productList: typeof initialState };
    if (state.productList.popularProducts.length) {
      return state.productList.popularProducts;
    }
    const productsDetailsPromises = POPULAR_PRODUCTS.map((product) =>
      ProductsService.getProductDetails(product.asin)
    );
    return Promise.all(productsDetailsPromises);
  }
);

const searchForProducts = createAsyncThunk(
  'productList/searchForProducts',
  async (query: string, { getState }) => {
    const state = getState() as { productList: typeof initialState };
    if (state.productList.lastQuery === query) {
      return { query, products: state.productList.foundProducts };
    }
    return {
      query,
      products: await ProductsService.searchForProduct(query)
    };
  }
);

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPopularProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProductDetails[]>
    ) => {
      state.popularProducts = action.payload;
      state.isLoading = false;
      state.isShowingPopular = true;
    },
    [searchForProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [searchForProducts.fulfilled.type]: (
      state,
      action: PayloadAction<{ query: string; products: IFoundProduct[] }>
    ) => {
      state.foundProducts = action.payload.products;
      state.lastQuery = action.payload.query;
      state.isLoading = false;
      state.isShowingPopular = false;
    }
  }
});

export const productListActions = {
  fetchPopularProducts,
  searchForProducts
};

export const productListReducer = productListSlice.reducer;
