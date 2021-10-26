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

  const cardCN = cn(styles.card, { [styles.focused]: isOpened });

  return (
    <Card className={cardCN}>
      <div
        className={styles.cardHeader}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div className='flex-grow-1'>
          <Card.Title>{cluster.group}</Card.Title>
          <Card.Text>{cluster.cluster_description}</Card.Text>
        </div>
        <div className='d-flex align-items-center mx-2'>
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
          {cluster.sentences.map((sentence, i) => (
            <div key={i}>
              <BiCommentEdit />
              <span className='ms-1'>{sentence}</span>
            </div>
          ))}
          <Button variant='light' className='w-100 mt-3'>
            View all
          </Button>
        </div>
      </Collapse>
    </Card>
  );
};

interface IProps {
  cluster: ICluster;
}
