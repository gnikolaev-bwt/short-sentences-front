import { CLUSTERS_FOR_PRODUCT, POPULAR_PRODUCTS } from 'src/constants';
import { IProduct, ICluster } from 'src/types';
import { createAsyncPromise } from 'src/utils';

export class ProductsService {
  static getPopularProducts = () => {
    return createAsyncPromise<IProduct[]>(POPULAR_PRODUCTS, 500);
  };
  static getProductClusters = (asin: IProduct['asin']) => {
    return createAsyncPromise<ICluster[]>(CLUSTERS_FOR_PRODUCT[asin], 2000);
  };
}
