import axios from 'axios';
import { IProductInfo, ICluster, IProductDetails } from 'src/types';

const AMAZON_API_BASE = axios.create({
  baseURL: `https://${process.env.REACT_APP_RAPIDAPI_HOST}`,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST as string,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY as string
  }
});

const OWN_API_BASE = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://192.168.0.75:90'
      : 'https://95.170.154.243:90'
});

export class ProductsService {
  static getProductClusters = async (
    asin: IProductInfo['asin'],
    language: IProductInfo['lang']
  ) => {
    console.log('request started');
    try {
      const response = await OWN_API_BASE.get<ICluster[]>('/process', {
        params: { asin, language }
      });
      return response.data;
    } catch (error) {
      return [];
    }
  };
  static getProductDetails = async (asin: IProductInfo['asin']) => {
    interface IResponse {
      result: IProductDetails[];
    }
    const response = await AMAZON_API_BASE.get<IResponse>('/product-details', {
      params: { asin, country: 'US' }
    });
    return response.data.result[0];
  };
}
