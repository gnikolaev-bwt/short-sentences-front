import { FC, useEffect, useState } from 'react';
import { IProduct, ICluster } from 'src/types';
import { Col, Container, Row } from 'react-bootstrap';
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
        <Col md={3}>
          <ProductOverview asin={asin} />
        </Col>
        <Col md={9} className='rounded-3 border p-4'>
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
