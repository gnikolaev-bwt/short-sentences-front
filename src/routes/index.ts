import { FC } from 'react';
import { Home, ProductDetails } from 'src/components/pages';

export enum RoutesEnum {
  Home = '/',
  ProductDetails = '/:asin'
}

export const routes: IRoute[] = [
  {
    path: RoutesEnum.Home,
    component: Home
  },
  {
    path: RoutesEnum.ProductDetails,
    component: ProductDetails
  }
];

interface IRoute {
  path: RoutesEnum;
  component: FC<any>;
}
