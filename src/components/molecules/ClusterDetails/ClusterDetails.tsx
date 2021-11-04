import { FC, useState } from 'react';
import cn from 'classnames';
import { ICluster } from 'src/types';
import { Button, Card, Collapse } from 'react-bootstrap';
import { FaRegComment, FaMinus, FaPlus } from 'react-icons/fa';
import { BiCommentEdit } from 'react-icons/bi';
import styles from './ClusterDetails.module.css';

export const ClusterDetails: FC<IProps> = (props) => {
  const { cluster } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [isSentencesEnrolled, setIsSentencesEnrolled] = useState(false);

  const sentencesToShow = isSentencesEnrolled ? cluster.sentences.length : 5;

  return (
    <Card className={cn(styles.card, { [styles.focused]: isOpened })}>
      <div
        className={styles.cardHeader}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div className='flex-grow-1 me-3'>
          <Card.Title>{cluster['cluster description'][0]}</Card.Title>
          <Card.Text>{cluster['cluster description'][1]}</Card.Text>
        </div>
        <div className='d-flex align-items-center mx-3'>
          <FaRegComment className='me-1' />
          <span className='lead'>{cluster.statements}</span>
        </div>
        <div className='d-flex align-items-center mx-3'>
          {isOpened ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <Collapse in={isOpened}>
        <div>
          <hr className={styles.hr} />
          {cluster.sentences.slice(0, sentencesToShow).map((sentence, i) => (
            <div key={i}>
              <BiCommentEdit />
              <span className='ms-2'>{sentence}</span>
            </div>
          ))}
          <hr className={styles.hr} />
          <Button
            variant='light'
            className='w-100'
            onClick={() => setIsSentencesEnrolled((prev) => !prev)}
          >
            {isSentencesEnrolled ? 'Hide' : 'Expand reviews'}
          </Button>
        </div>
      </Collapse>
    </Card>
  );
};

interface IProps {
  cluster: ICluster;
}
