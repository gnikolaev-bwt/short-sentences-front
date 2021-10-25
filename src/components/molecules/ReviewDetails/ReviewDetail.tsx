import { FC, useState } from 'react';
import { IReview } from 'src/types';
import { Card, Collapse } from 'react-bootstrap';
import styles from './ReviewDetail.module.css';

export const ReviewDetail: FC<IProps> = (props) => {
  const { review } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Card className={styles.card} onClick={() => setIsOpened((prev) => !prev)}>
      <Card.Body>
        <Card.Title>{review.cluster_description}</Card.Title>
        <Card.Text>
          <b>Group:</b> {review.group}
        </Card.Text>
        <Collapse in={isOpened}>
          <div>
            <b>Sentences:</b>
            <ul>
              {review.sentences.map((sentence) => (
                <li>{sentence}</li>
              ))}
            </ul>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

interface IProps {
  review: IReview;
}
