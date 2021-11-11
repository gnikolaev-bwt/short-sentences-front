import { FC } from 'react';
import { ScaleLoader } from 'react-spinners';
import { BiErrorCircle } from 'react-icons/bi';
import { Button, Card } from 'react-bootstrap';
import { IProductDetails } from 'src/types';
import { CarouselBlock, CenteredBox, RatingBlock } from 'src/components/atoms';
import { truncateString } from 'src/utils';

export const ProductOverview: FC<IProps> = (props) => {
  const { details, isLoading, error } = props;
  return (
    <Card>
      {isLoading ? (
        <CenteredBox>
          <ScaleLoader />
        </CenteredBox>
      ) : error || !details ? (
        <CenteredBox>
          <BiErrorCircle size='48px' />
          <div className='mt-2'>
            Some error occurred on product load. Please, check if product with
            this asin exists or try to visit this page later.
          </div>
        </CenteredBox>
      ) : (
        <>
          <CarouselBlock images={details.images} height='17rem' bgSize='60%' />
          <Card.Body>
            <Card.Title>{details.title}</Card.Title>
            <hr />
            <div className='my-3'>
              <RatingBlock rating={details.reviews.rating} />
            </div>
            {details.description && (
              <>
                <hr />
                <Card.Text>
                  {truncateString(details.description, 100)}
                </Card.Text>
              </>
            )}
            <hr />
            <Button
              as='a'
              className='w-100'
              variant='outline-dark'
              href={details.url}
              target='_blank'
            >
              Open in Amazon store
            </Button>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

interface IProps {
  details: IProductDetails | null;
  isLoading: boolean;
  error: string;
}
