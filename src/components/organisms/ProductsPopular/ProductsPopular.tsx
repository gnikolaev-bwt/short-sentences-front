import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { Card, CardGroup } from 'react-bootstrap';
import { getRouteUrl, IRoutes } from 'src/routes';
import { POPULAR_PRODUCTS } from 'src/constants';
import { truncateSentence } from 'src/utils';
import { ImageBlock } from 'src/components/atoms';
import styles from './ProductsPopular.module.css';
import { IProductDetails } from 'src/types';

export const ProductsPopular: FC<IProps> = (props) => {
  const { popularProducts } = props;
  return (
    <CardGroup className={styles.cardGroup}>
      {popularProducts.slice(0, 3).map((product, i) => {
        const productDetailsUrl = getRouteUrl(IRoutes.ProductDetails, {
          asin: POPULAR_PRODUCTS[i].asin,
          lang: POPULAR_PRODUCTS[i].lang
        });
        return (
          <Card
            key={i}
            className={styles.card}
            as={Link}
            to={productDetailsUrl}
          >
            <ImageBlock src={product.main_image} height='15rem' bgSize='25%' />
            <Card.Body>
              <Card.Title>{truncateSentence(product.title, 20)}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                Most popular <AiOutlineStar />
              </small>
            </Card.Footer>
          </Card>
        );
      })}
    </CardGroup>
  );
};

interface IProps {
  popularProducts: IProductDetails[];
}
