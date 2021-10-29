import {
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { CancelToken } from 'axios';
import { ProductsService } from 'src/api';
import { IProductDetails, ICluster } from 'src/types';

const initialState = {
  productDetails: null as IProductDetails | null,
  productClusters: [] as ICluster[],
  isDetailsLoading: false,
  isClustersLoading: false
};

const fetchProductDetails = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async (asin: string) => {
    return ProductsService.getProductDetails(asin);
  }
);

const fetchProductClusters = createAsyncThunk(
  'productDetails/fetchProductClusters',
  async (args: { cancelToken: CancelToken; asin: string; lang: string }) => {
    return ProductsService.getProductClusters(
      args.cancelToken,
      args.asin,
      args.lang
    );
  }
);

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductDetails.pending.type]: (state) => {
      state.isDetailsLoading = true;
    },
    [fetchProductDetails.fulfilled.type]: (
      state,
      action: PayloadAction<IProductDetails>
    ) => {
      state.productDetails = action.payload;
      state.isDetailsLoading = false;
    },
    [fetchProductClusters.pending.type]: (state) => {
      state.isClustersLoading = true;
    },
    [fetchProductClusters.fulfilled.type]: (
      state,
      action: PayloadAction<ICluster[]>
    ) => {
      state.productClusters = action.payload;
      state.isClustersLoading = false;
    }
  }
});

export const productDetailsActions = {
  fetchProductDetails,
  fetchProductClusters
};

export const productDetailsReducer = productDetailsSlice.reducer;
