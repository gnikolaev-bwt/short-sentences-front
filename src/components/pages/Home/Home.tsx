import { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row
} from 'react-bootstrap';
import { PopularProducts } from 'src/components/organisms';
import { getAsinFromString } from 'src/utils';
import { RoutesEnum } from 'src/routes';
import styles from './Home.module.css';

export const Home: FC = () => {
  const history = useHistory();
  const [amazonAsin, setAmazonAsin] = useState('');

  const handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    const asin = getAsinFromString(amazonAsin);
    if (!asin) {
      return;
    }
    history.push(RoutesEnum.ProductDetails.replace(':asin', asin));
  };

  return (
    <Container className={styles.container}>
      <Row className='g-2'>
        <Col md={12}>
          <h2>Review Summarizer</h2>
        </Col>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row className='g-2 mt-2'>
          <Col md={8}>
            <FloatingLabel label='Amazon URL or ASIN'>
              <Form.Control
                placeholder='https://amazon.com/'
                value={amazonAsin}
                onChange={(e) => setAmazonAsin(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <FloatingLabel label='Select language'>
              <Form.Select>
                <option value='En'>En</option>
                <option value='De'>De</option>
                <option value='Fr'>Fr</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <Button type='submit' variant='primary' className='w-100 h-100'>
              Summarize
            </Button>
          </Col>
        </Row>
      </form>
      <PopularProducts />
    </Container>
  );
};
