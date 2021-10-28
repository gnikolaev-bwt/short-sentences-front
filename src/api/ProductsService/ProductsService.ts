import axios, { CancelToken } from 'axios';
import { IProduct, ICluster, IProductDetails, IFoundProduct } from 'src/types';

const AMAZON_API = axios.create({
  baseURL: `https://${process.env.REACT_APP_RAPIDAPI_HOST}`,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST as string,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY as string
  }
});

const OWN_API = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://192.168.0.75:90'
      : 'https://95.170.154.243:90'
});

export class ProductsService {
  static getProductDetails = async (asin: IProduct['asin']) => {
    interface IResponse {
      result: IProductDetails[];
    }
    const response = await AMAZON_API.get<IResponse>('/product-details', {
      params: { asin, country: 'US' }
    });
    return response.data.result[0];
  };
  static searchForProduct = async (query: string) => {
    interface IResponse {
      result: IFoundProduct[];
    }
    const response = await AMAZON_API.get<IResponse>('/product-search', {
      params: { query, country: 'US' }
    });
    return response.data.result;
  };
  static getProductClusters = async (
    cancelToken: CancelToken,
    asin: IProduct['asin'],
    language: IProduct['lang']
  ) => {
    try {
      interface IResponse {
        data: ICluster[];
      }
      const response = await OWN_API.get<IResponse>('/process', {
        cancelToken,
        params: { asin, language }
      });
      return response.data.data;
    } catch (error) {
      return [];
    }
  };
}
