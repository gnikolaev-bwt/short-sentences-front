import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { Card, CardGroup } from 'react-bootstrap';
import { HashLoader } from 'react-spinners';
import { ProductsService } from 'src/api';
import { IProduct } from 'src/types';
import { getRouteUrl, Routes } from 'src/routes';
import { truncateSentence } from 'src/utils';
import styles from './PopularProducuts.module.css';

export const PopularProducts: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductsService.getPopularProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <CardGroup className={styles.cardGroup}>
      {!products.length ? (
        <HashLoader />
      ) : (
        products.slice(0, 3).map((product, i) => {
          const productDetailsUrl = getRouteUrl(Routes.ProductDetails, {
            asin: product.asin,
            language: product.language
          });
          return (
            <Card
              key={i}
              className={styles.card}
              as={Link}
              to={productDetailsUrl}
            >
              <div
                style={{
                  height: '10rem',
                  background: `url(${product.imageUrl}) no-repeat center`,
                  backgroundSize: '25%'
                }}
              />
              <Card.Body>
                <Card.Title>{truncateSentence(product.name)}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  Most popular <AiOutlineStar />
                </small>
              </Card.Footer>
            </Card>
          );
        })
      )}
    </CardGroup>
  );
};
