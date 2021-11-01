import axios, { Method, CancelToken } from 'axios';
import { ICluster, IProductDetails, IFoundProduct } from 'src/types';

const CORS_EVERYWHERE_URL = 'https://cors-everywhere-me.herokuapp.com/';

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
      : `${CORS_EVERYWHERE_URL}http://95.170.154.243:90`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export class ProductsService {
  static getProductDetails = async (asin: string) => {
    interface IResponse {
      result: IProductDetails[];
    }
    const options = {
      method: 'GET' as Method,
      url: '/product-details',
      params: { asin, country: 'US' }
    };
    const response = await AMAZON_API.request<IResponse>(options);
    return response.data.result[0];
  };
  static searchForProduct = async (query: string) => {
    interface IResponse {
      result: IFoundProduct[];
    }
    const options = {
      method: 'GET' as Method,
      url: '/product-search',
      params: { query, country: 'US' }
    };
    const response = await AMAZON_API.request<IResponse>(options);
    return response.data.result;
  };
  static getProductClusters = async (
    cancelToken: CancelToken,
    asin: string,
    lang: string
  ) => {
    interface IResponse {
      data: ICluster[];
      error: string;
      status: string;
    }
    const options = {
      method: 'GET' as Method,
      url: '/process',
      cancelToken
    };
    const response = await OWN_API.request<IResponse>(options);
    if (response.data.status !== 'OK') {
      throw Error(response.data.error);
    }
    return response.data.data;
  };
}
