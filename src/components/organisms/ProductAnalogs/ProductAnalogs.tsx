import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProductDetails } from 'src/types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { getRouteUrl, Routes } from 'src/routes';
import { ImageBlock } from 'src/components/atoms';

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
          .map((analog, i) => {
            const productDetailsUrl = getRouteUrl(Routes.ProductDetails, {
              asin: analog.asin,
              lang: 'En'
            });
            return (
              <Col key={i} md={3} className='mt-3'>
                <Card as={Link} className='h-100' to={productDetailsUrl}>
                  <ImageBlock src={analog.images?.[0].large} bgSize='40%' />
                  <Card.Body>
                    <Card.Title>{analog.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
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
