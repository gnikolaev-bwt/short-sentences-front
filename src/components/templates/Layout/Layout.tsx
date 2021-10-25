import { FC } from 'react';
import { Header } from '../Header/Header';

export const Layout: FC = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
