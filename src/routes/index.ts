import { Home, ProductDetails } from 'src/components/pages';

export enum Routes {
  Home = '/',
  ProductDetails = '/details'
}

export const routes = [
  {
    path: Routes.Home,
    component: Home
  },
  {
    path: Routes.ProductDetails,
    component: ProductDetails
  }
];
