import axios, { Method } from 'axios';
import { CLUSTERS_FOR_PRODUCT } from 'src/constants';
import { IProductInfo, ICluster, IProductDetails } from 'src/types';
import { createAsyncPromise } from 'src/utils';

const BASE_API_OPTIONS = {
  method: 'GET' as Method,
  url: `https://${process.env.REACT_APP_RAPIDAPI_HOST}/product-details`,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST as string,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY as string
  }
};

export class ProductsService {
  static getProductClusters = (asin: IProductInfo['asin']) => {
    return createAsyncPromise<ICluster[]>(CLUSTERS_FOR_PRODUCT[asin], 2000);
  };
  static getProductDetails = async (asin: string) => {
    const params = { asin, country: 'US' };
    const options = { ...BASE_API_OPTIONS, params };
    return await axios
      .request<{ result: IProductDetails[] }>(options)
      .then(({ data }) => data.result[0]);
  };
}
