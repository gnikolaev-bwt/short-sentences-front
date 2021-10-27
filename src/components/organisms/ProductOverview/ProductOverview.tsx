import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IProduct } from 'src/types';

export const ProductOverview: FC<IProps> = (props) => {
  const { asin } = props;
  return (
    <Card>
      <div
        style={{
          height: '10rem',
          background: '#2b2b2b'
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
