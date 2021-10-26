import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IProduct } from 'src/types';
import { getProductImageUrl } from 'src/utils';

export const ProductOverview: FC<IProps> = (props) => {
  const { asin } = props;
  return (
    <Card>
      <div
        style={{
          height: '10rem',
          background: `url(${getProductImageUrl(asin)}) center no-repeat`
        }}
      />
      <Card.Body>
        <Card.Title>ASIN: {asin}</Card.Title>
      </Card.Body>
    </Card>
  );
};

interface IProps {
  asin: IProduct['asin'];
}
