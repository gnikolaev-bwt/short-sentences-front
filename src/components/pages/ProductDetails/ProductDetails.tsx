import { FC, useEffect, useState } from 'react';
import { ICluster, IProductDetails, IProductInfo } from 'src/types';
import { Col, Container, Row } from 'react-bootstrap';
import {
  ProductOverview,
  ClusterList,
  ProductAnalogs
} from 'src/components/organisms';
import { RouteComponentProps } from 'react-router-dom';
import { ProductsService } from 'src/api';

export const ProductDetails: FC<IProps> = (props) => {
  const { asin, lang } = props.match.params;
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(
    null
  );
  const [productClusters, setProductClusters] = useState<ICluster[] | null>(
    null
  );

  useEffect(() => {
    setProductDetails(null);
    setProductClusters(null);
    ProductsService.getProductDetails(asin).then((data) => {
      setProductDetails(data);
    });
    ProductsService.getProductClusters(asin, lang).then((data) => {
      setProductClusters(data);
    });
  }, [asin, lang]);

  return (
    <Container className='pb-5'>
      <Row className='g-4 mt-3'>
        <Col md={5} lg={3}>
          <ProductOverview details={productDetails} />
        </Col>
        <Col md={7} lg={9}>
          <ClusterList clusters={productClusters} />
        </Col>
      </Row>
      {productDetails && !!productDetails.variants.length && (
        <ProductAnalogs details={productDetails} />
      )}
    </Container>
  );
};

interface IRouteParams {
  asin: IProductInfo['asin'];
  lang: IProductInfo['lang'];
}

interface IProps extends RouteComponentProps<IRouteParams> {}
