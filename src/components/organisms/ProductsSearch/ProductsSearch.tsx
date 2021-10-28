import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ShortInfoCard } from 'src/components/molecules';
import { IFoundProduct } from 'src/types';
import styles from './ProductsSearch.module.css';

export const ProductsSearch: FC<IProps> = (props) => {
  const { foundProducts } = props;
  return (
    <Row className={styles.searchRow}>
      {foundProducts.slice(0, 10).map((product, i) => (
        <Col key={i} md={3} className='mt-3'>
          <ShortInfoCard
            asin={product.asin}
            src={product.thumbnail}
            title={product.title}
            rating={product.reviews.rating}
          />
        </Col>
      ))}
    </Row>
  );
};

interface IProps {
  foundProducts: IFoundProduct[];
}
