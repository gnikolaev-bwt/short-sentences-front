import { FC, useState } from 'react';
import { IProductDetails } from 'src/types';
import { Button, Col, Row } from 'react-bootstrap';
import { ShortInfoCard } from 'src/components/molecules';

export const ProductAnalogs: FC<IProps> = (props) => {
  const { details } = props;
  const [isAnalogsEnrolled, setIsAnalogsEnrolled] = useState(false);
  const [analogsToShow, setAnalogsToShow] = useState(4);

  const handleAnalogsEnrolled = () => {
    setAnalogsToShow(isAnalogsEnrolled ? 4 : details.variants.length);
    setIsAnalogsEnrolled(!isAnalogsEnrolled);
  };

  return (
    <>
      <Row className='mt-4'>
        <hr />
      </Row>
      <Row className='mt-2'>
        <h3>You'd may also like to see:</h3>
      </Row>
      <Row>
        {details.variants
          .filter((a) => !a.is_current_product)
          .slice(0, analogsToShow)
          .map((analog, i) => (
            <Col key={i} md={3} className='mt-3'>
              <ShortInfoCard
                asin={analog.asin}
                src={analog.images[0]?.large}
                title={analog.title}
              />
            </Col>
          ))}
      </Row>
      {details.variants.length > 4 && (
        <Row className='justify-content-center mt-3'>
          <Col md={6}>
            <Button
              variant='outline-dark'
              className='w-100'
              onClick={handleAnalogsEnrolled}
            >
              {isAnalogsEnrolled ? 'Hide' : 'Show more'}
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

interface IProps {
  details: IProductDetails;
}
