import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IProduct, ICluster } from 'src/types';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductsService } from 'src/api';
import { ProductOverview, ReviewSummary } from 'src/components/organisms';
import { RouteComponentProps } from 'react-router-dom';

export const ProductDetails: FC<IProps> = (props) => {
  const { asin } = props.match.params;
  const [clusters, setClusters] = useState<ICluster[]>([]);

  useEffect(() => {
    ProductsService.getProductClusters(asin).then((data) => {
      setClusters(data);
    });
  }, [asin]);

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
          <ReviewSummary clusters={clusters} />
        </Col>
      </Row>
    </Container>
  );
};

interface IRouteParams {
  asin: IProduct['asin'];
}

interface IProps extends RouteComponentProps<IRouteParams> {}
