import { popularProducts, clustersForProduct } from 'src/constants';
import { IProduct, ICluster } from 'src/types';
import { createAsyncPromise } from 'src/utils';

export class ProductsService {
  static getPopularProducts = () => {
    return createAsyncPromise<IProduct[]>(popularProducts, 500);
  };
  static getProductClusters = (asin: IProduct['asin']) => {
    return createAsyncPromise<ICluster[]>(clustersForProduct[asin], 500);
  };
}
