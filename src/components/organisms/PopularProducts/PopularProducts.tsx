import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { Card, CardGroup } from 'react-bootstrap';
import { HashLoader } from 'react-spinners';
import { ProductsService } from 'src/api';
import { useAppActions, useAppSelector } from 'src/hooks';
import { getRouteUrl, Routes } from 'src/routes';
import { POPULAR_PRODUCTS } from 'src/constants';
import { truncateSentence } from 'src/utils';
import { ImageBlock } from 'src/components/atoms';
import styles from './PopularProducuts.module.css';

export const PopularProducts: FC = () => {
  const { popularProductsDetails } = useAppSelector((state) => state.products);
  const { setPopularProductsDetails } = useAppActions();

  useEffect(() => {
    if (popularProductsDetails) {
      return;
    }
    const productsDetailsPromises = POPULAR_PRODUCTS.map(({ asin }) =>
      ProductsService.getProductDetails(asin)
    );
    Promise.all(productsDetailsPromises).then((data) =>
      setPopularProductsDetails(data)
    );
  }, [popularProductsDetails, setPopularProductsDetails]);

  return (
    <CardGroup className={styles.cardGroup}>
      {!popularProductsDetails ? (
        <HashLoader />
      ) : (
        popularProductsDetails.slice(0, 3).map((details, i) => {
          const productDetailsUrl = getRouteUrl(Routes.ProductDetails, {
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
              <ImageBlock
                src={details.main_image}
                height='15rem'
                bgSize='25%'
              />
              <Card.Body>
                <Card.Title>{truncateSentence(details.title, 20)}</Card.Title>
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
