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
  isClustersLoading: false,
  detailsError: '',
  clustersError: ''
};

const fetchProductDetails = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async (args: { asin: string }, { rejectWithValue }) => {
    try {
      return await ProductsService.getProductDetails(args.asin);
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  }
);

const fetchProductClusters = createAsyncThunk(
  'productDetails/fetchProductClusters',
  async (
    args: { cancelToken: CancelToken; asin: string; lang: string },
    { rejectWithValue }
  ) => {
    try {
      const { cancelToken, asin, lang } = args;
      return await ProductsService.getProductClusters(cancelToken, asin, lang);
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
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
      state.detailsError = '';
    },
    [fetchProductDetails.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isDetailsLoading = false;
      state.detailsError = action.payload;
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
      state.clustersError = '';
    },
    [fetchProductClusters.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isClustersLoading = false;
      state.clustersError = action.payload;
    }
  }
});

export const productDetailsActions = {
  fetchProductDetails,
  fetchProductClusters
};

export const productDetailsReducer = productDetailsSlice.reducer;
