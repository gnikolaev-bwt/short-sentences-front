import { FC } from 'react';
import { ScaleLoader } from 'react-spinners';
import { Button, Card } from 'react-bootstrap';
import { IProductDetails } from 'src/types';
import { CenteredBox, ImageBlock, RatingBlock } from 'src/components/atoms';
import { truncateString } from 'src/utils';

export const ProductOverview: FC<IProps> = (props) => {
  const { details } = props;
  return (
    <Card>
      {!details ? (
        <CenteredBox>
          <ScaleLoader />
        </CenteredBox>
      ) : (
        <>
          <ImageBlock src={details.main_image} height='15rem' bgSize='50%' />
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
}
