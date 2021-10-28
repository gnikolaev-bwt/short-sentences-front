import { FC, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { getAsinFromString } from 'src/utils';
import { getRouteUrl, IRoutes } from 'src/routes';
import { useAppActions, useAppSelector } from 'src/hooks';
import { ProductsPopular, ProductsSearch } from 'src/components/organisms';
import { CenteredBox } from 'src/components/atoms';
import styles from './Home.module.css';

import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row
} from 'react-bootstrap';

export const Home: FC = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [lang, setLang] = useState('En');

  const { isLoading, isShowingPopular, popularProducts, foundProducts } =
    useAppSelector((state) => state.productList);

  const { fetchPopularProducts, searchForProducts } = useAppActions();

  useEffect(() => {
    fetchPopularProducts();
  }, []); // eslint-disable-line

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const asin = getAsinFromString(query);
    if (asin) {
      const productDetailsUrl = getRouteUrl(IRoutes.ProductDetails, {
        asin,
        lang
      });
      history.push(productDetailsUrl);
    } else if (query) {
      searchForProducts(query);
    } else {
      fetchPopularProducts();
    }
  };

  return (
    <Container className={styles.container}>
      <Row className='g-2'>
        <Col md={12}>
          <h2>Search for product</h2>
        </Col>
      </Row>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Row className='g-2 mt-2'>
          <Col md={6} lg={8}>
            <FloatingLabel controlId='asin' label='Product name or asin'>
              <Form.Control
                placeholder='...'
                onChange={(e) => setQuery(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={3} lg={2}>
            <FloatingLabel label='Select language'>
              <Form.Control
                as='select'
                className={styles.select}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value='En'>En</option>
              </Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={3} lg={2}>
            <Button
              type='submit'
              variant='primary'
              className='w-100 h-100'
              disabled={isLoading}
            >
              Search
            </Button>
          </Col>
        </Row>
      </form>
      <Row className='my-5'>
        <Col md={4}>
          <hr />
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <span className='text-nowrap lead'>
            {isShowingPopular ? 'Most popular' : 'Search results'}
          </span>
        </Col>
        <Col md={4}>
          <hr />
        </Col>
      </Row>
      {isLoading ? (
        <CenteredBox>
          <HashLoader />
        </CenteredBox>
      ) : isShowingPopular ? (
        <ProductsPopular popularProducts={popularProducts} />
      ) : (
        <ProductsSearch foundProducts={foundProducts} />
      )}
    </Container>
  );
};
