import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Spinner } from 'react-bootstrap';
import styles from './PopularProducuts.module.css';
import { ProductsService } from 'src/api';
import { IProduct } from 'src/types';
import { RoutesEnum } from 'src/routes';
import { truncateSentence } from 'src/utils';

export const PopularProducts: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductsService.getPopularProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <CardGroup className='justify-content-center mt-5'>
      {!products.length && (
        <Spinner animation='border'>
          <span className='visually-hidden' />
        </Spinner>
      )}
      {products.slice(0, 3).map((product, i) => (
        <Card
          key={i}
          className={styles.card}
          as={Link}
          to={RoutesEnum.ProductDetails.replace(':asin', product.asin)}
        >
          <div style={{ height: '10rem', background: '#2b2b2b' }} />
          <Card.Body>
            <Card.Title>{truncateSentence(product.name)}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Sample report</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};
