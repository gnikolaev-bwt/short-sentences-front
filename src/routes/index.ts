import { Home, ProductDetails } from 'src/components/pages';

export enum IRoutes {
  Home = '/',
  ProductDetails = '/:asin/:lang'
}

export const routes = [
  {
    path: IRoutes.Home,
    component: Home
  },
  {
    path: IRoutes.ProductDetails,
    component: ProductDetails
  }
];

export const getRouteUrl = (route: IRoutes, args: Record<string, string>) => {
  return Object.entries(args).reduce((acc, [arg, value]) => {
    return acc.replace(`:${arg}`, value);
  }, route as string);
};
