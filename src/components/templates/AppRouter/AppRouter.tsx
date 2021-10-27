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
            render={(props) => (
              <Layout>
                <route.component {...props} />
              </Layout>
            )}
          />
        ))}
      </Switch>
    </HashRouter>
  );
};
