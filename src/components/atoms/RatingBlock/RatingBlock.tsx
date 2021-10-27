import { FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import cn from 'classnames';
import styles from './RatingBlock.module.css';

export const RatingBlock: FC<IProps> = (props) => {
  const { rating } = props;
  const ratingFloat = parseFloat(rating);
  return (
    <div className='d-flex align-items-center'>
      {Array.from({ length: 5 }).map((_, i) =>
        i < ratingFloat ? (
          <div key={i} className={cn(styles.starWrapper, styles.filled)}>
            <AiFillStar />
          </div>
        ) : (
          <div key={i} className={styles.starWrapper}>
            <AiOutlineStar />
          </div>
        )
      )}
      <div className={styles.ratingWrapper}>
        <div className={styles.rating}>{rating}</div>
      </div>
    </div>
  );
};

interface IProps {
  rating: string;
}
