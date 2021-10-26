import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { Card, CardGroup } from 'react-bootstrap';
import { HashLoader } from 'react-spinners';
import { ProductsService } from 'src/api';
import { IProduct } from 'src/types';
import { RoutesEnum } from 'src/routes';
import { getProductImageUrl, truncateSentence } from 'src/utils';
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
          const productImageUrl = getProductImageUrl(product.asin);
          return (
            <Card
              key={i}
              className={styles.card}
              as={Link}
              to={RoutesEnum.ProductDetails.replace(':asin', product.asin)}
            >
              <div
                style={{
                  height: '10rem',
                  background: `url(${productImageUrl}) no-repeat center`
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
