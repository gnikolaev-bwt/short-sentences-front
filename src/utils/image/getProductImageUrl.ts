import { IProduct } from 'src/types';

export const getProductImageUrl = (asin: IProduct['asin']) =>
  `https://images.amazon.com/images/P/${asin}.01._SCMZZZZZZZ_.jpg`;
