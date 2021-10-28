import { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'src/routes';
import { Layout } from '../Layout/Layout';

export const AppRouter: FC = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            render={(props) => {
              const Component = route.component as FC<any>;
              return (
                <Layout>
                  <Component {...props} />
                </Layout>
              );
            }}
          />
        ))}
      </Switch>
    </HashRouter>
  );
};
