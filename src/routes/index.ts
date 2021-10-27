import { FC } from 'react';
import { Home, ProductDetails } from 'src/components/pages';

export enum Routes {
  Home = '/',
  ProductDetails = '/:asin/:language'
}

export const routes: IRoute[] = [
  {
    path: Routes.Home,
    component: Home
  },
  {
    path: Routes.ProductDetails,
    component: ProductDetails
  }
];

export const getRouteUrl = (route: Routes, args: Record<string, string>) => {
  return Object.entries(args).reduce((acc, [arg, value]) => {
    return acc.replace(`:${arg}`, value);
  }, route as string);
};

interface IRoute {
  path: Routes;
  component: FC<any>;
}
