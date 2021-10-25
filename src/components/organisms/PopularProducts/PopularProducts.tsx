import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Spinner } from 'react-bootstrap';
import styles from './PopularProducuts.module.css';
import { ReviewsService } from 'src/api';
import { IReview } from 'src/types';
import { Routes } from 'src/routes';

export const PopularProducts: FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    ReviewsService.getPopularReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <CardGroup className='justify-content-center mt-5'>
      {!reviews.length && (
        <Spinner animation='border'>
          <span className='visually-hidden' />
        </Spinner>
      )}
      {reviews.slice(0, 3).map((review, i) => (
        <Card
          key={i}
          className={styles.card}
          as={Link}
          to={Routes.ProductDetails}
        >
          <div style={{ height: '10rem', background: '#2b2b2b' }} />
          <Card.Body>
            <Card.Title>{review.cluster_description}</Card.Title>
            <Card.Text>{review.group}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Statements total: {review.statements}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};
