import { FC } from 'react';
import { IReview } from 'src/types';
import { Spinner } from 'react-bootstrap';
import { ReviewDetail } from 'src/components/molecules';

export const ReviewSummary: FC<IProps> = (props) => {
  const { reviews } = props;
  return (
    <>
      <h4>Review Summary</h4>
      <div className='mt-3'>
        {!reviews.length ? (
          <Spinner animation='border' className='m-2'>
            <span className='visually-hidden' />
          </Spinner>
        ) : (
          reviews.map((review, i) => <ReviewDetail key={i} review={review} />)
        )}
      </div>
    </>
  );
};

interface IProps {
  reviews: IReview[];
}
