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
  const [asinValue, setAsinValue] = useState('');
  const [asinError, setAsinEror] = useState('');

  const handleAsinChange = (value: string) => {
    const asin = getAsinFromString(value);
    if (!asin) {
      setAsinEror('Incorrect Amazon product url or asin, please, try again');
    } else {
      setAsinEror('');
      setAsinValue(asin);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (asinValue) {
      history.push(RoutesEnum.ProductDetails.replace(':asin', asinValue));
    }
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
            <FloatingLabel controlId='asin' label='Amazon URL or ASIN'>
              <Form.Control
                placeholder={'https://amazon.com'}
                onChange={(e) => handleAsinChange(e.target.value)}
                isInvalid={!!asinError}
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
