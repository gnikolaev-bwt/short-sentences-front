import React from 'react';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row
} from 'react-bootstrap';
import { PopularProducts } from 'src/components/organisms';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <Container className={styles.container}>
      <Row className='g-2'>
        <Col md={12}>
          <h2>Review Summarizer</h2>
        </Col>
      </Row>
      <Row className='g-2 mt-2'>
        <Col md={8}>
          <FloatingLabel label='Amazon URL'>
            <Form.Control type='amazonUrl' placeholder='https://amazon.com/' />
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
          <Button variant='primary' className='w-100 h-100'>
            Summarize
          </Button>
        </Col>
      </Row>
      <PopularProducts />
    </Container>
  );
};
