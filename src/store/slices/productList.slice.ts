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
  isPopularLoading: false,
  isSearchLoading: false,
  popularError: '',
  searchError: ''
};

const fetchPopularProducts = createAsyncThunk(
  'productList/fetchPopularProducts',
  async (_, { rejectWithValue }) => {
    try {
      const productsDetailsPromises = POPULAR_PRODUCTS.map((product) =>
        ProductsService.getProductDetails(product.asin)
      );
      return await Promise.all(productsDetailsPromises);
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as { productList: typeof initialState };
      return !state.productList.popularProducts.length;
    }
  }
);

const searchForProducts = createAsyncThunk(
  'productList/searchForProducts',
  async (args: { query: string }, { rejectWithValue }) => {
    try {
      const products = await ProductsService.searchForProduct(args.query);
      return { query: args.query, products };
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
  {
    condition: (args: { query: string }, { getState }) => {
      const state = getState() as { productList: typeof initialState };
      return state.productList.lastQuery !== args.query;
    }
  }
);

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularProducts.pending.type]: (state) => {
      state.isPopularLoading = true;
    },
    [fetchPopularProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProductDetails[]>
    ) => {
      state.popularProducts = action.payload;
      state.isPopularLoading = false;
    },
    [searchForProducts.pending.type]: (state) => {
      state.isSearchLoading = true;
    },
    [searchForProducts.fulfilled.type]: (
      state,
      action: PayloadAction<{ query: string; products: IFoundProduct[] }>
    ) => {
      state.foundProducts = action.payload.products;
      state.lastQuery = action.payload.query;
      state.isSearchLoading = false;
    }
  }
});

export const productListActions = {
  fetchPopularProducts,
  searchForProducts
};

export const productListReducer = productListSlice.reducer;
