import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'src/routes';
import { Layout } from '../Layout/Layout';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
