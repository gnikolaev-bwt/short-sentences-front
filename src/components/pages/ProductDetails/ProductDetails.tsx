import axios from 'axios';
import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import { useAppActions, useAppSelector } from 'src/hooks';
import {
  ProductOverview,
  ClusterList,
  ProductAnalogs
} from 'src/components/organisms';

export const ProductDetails: FC<IProps> = (props) => {
  const { asin, lang } = props.match.params;

  const {
    productDetails,
    productClusters,
    isDetailsLoading,
    isClustersLoading,
    detailsError,
    clustersError
  } = useAppSelector((state) => state.productDetails);

  const { fetchProductDetails, fetchProductClusters } = useAppActions();

  useEffect(() => {
    fetchProductDetails({ asin });
    const clustersSource = axios.CancelToken.source();
    fetchProductClusters({ cancelToken: clustersSource.token, asin, lang });
    return () => clustersSource.cancel();
  }, [asin, lang]); // eslint-disable-line

  const isShowingAnalogs =
    !isDetailsLoading &&
    productDetails?.variants &&
    productDetails.variants.length > 1;

  return (
    <Container className='pb-5'>
      <Row className='g-4 mt-3'>
        <Col md={5} lg={3}>
          <ProductOverview
            details={productDetails}
            isLoading={isDetailsLoading}
            error={detailsError}
          />
        </Col>
        <Col md={7} lg={9}>
          <ClusterList
            clusters={productClusters}
            isLoading={isClustersLoading}
            error={clustersError}
          />
        </Col>
      </Row>
      {isShowingAnalogs && <ProductAnalogs details={productDetails} />}
    </Container>
  );
};

interface IRouteProps {
  asin: string;
  lang: string;
}

interface IProps extends RouteComponentProps<IRouteProps> {}
