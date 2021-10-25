import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IReview } from 'src/types';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ReviewsService } from 'src/api';
import { ProductOverview, ReviewSummary } from 'src/components/organisms';

export const ProductDetails: FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    ReviewsService.getPopularReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <Container>
      <Row className='g-4 mt-3'>
        <Col md={2}>
          <Button variant='light' className='w-100 p-2 mb-2'>
            <FontAwesomeIcon
              className='text-black-50'
              icon={faInfoCircle}
              size='2x'
            />
            <div className='mt-1'>Overview</div>
          </Button>
          <Button variant='light' className='w-100 p-2'>
            <FontAwesomeIcon
              className='text-black-50'
              icon={faComment}
              size='2x'
            />
            <div className='mt-1'>Review summary</div>
          </Button>
        </Col>
        <Col md={10} className='rounded-3 border p-4'>
          <ProductOverview />
          <ReviewSummary reviews={reviews} />
        </Col>
      </Row>
    </Container>
  );
};
