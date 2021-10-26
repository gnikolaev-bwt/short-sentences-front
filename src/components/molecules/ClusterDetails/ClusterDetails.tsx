import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { ICluster, ISentence } from 'src/types';
import { Button, Card, Collapse, ProgressBar } from 'react-bootstrap';
import { FaRegComment, FaMinus, FaPlus } from 'react-icons/fa';
import styles from './ClusterDetails.module.css';

export const ClusterDetails: FC<IProps> = (props) => {
  const { cluster } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [sentences, setSentences] = useState<ISentence[]>([]);
  const [isPositiveSentences, setIsPositiveSentences] = useState(true);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const cardCN = cn(styles.card, { [styles.focused]: isOpened });

  useEffect(() => {
    const positiveSentences = cluster.sentences.filter((s) => s.is_positive);
    const isPositiveExists = !!positiveSentences.length;
    const percenage = positiveSentences.length / cluster.sentences.length;
    const formattedPercentage = parseFloat((percenage * 100).toFixed(1));
    setSentences(isPositiveExists ? positiveSentences : cluster.sentences);
    setIsPositiveSentences(isPositiveExists);
    setPositivePercentage(formattedPercentage);
  }, [cluster]);

  const filterReviews = (isPositive: boolean) => {
    const newSentences = cluster.sentences.filter(
      (s) => s.is_positive === isPositive
    );
    setSentences(newSentences);
  };

  const handleSuccessBarClick = () => {
    setIsOpened(true);
    setIsPositiveSentences(true);
    filterReviews(true);
  };

  const handleDangerBarClick = () => {
    setIsOpened(true);
    setIsPositiveSentences(false);
    filterReviews(false);
  };

  return (
    <Card className={cardCN}>
      <div className={styles.cardHeaderWrapper}>
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
        <div className='w-100 mt-3'>
          <ProgressBar className={styles.progressBar}>
            <ProgressBar
              key={0}
              className={styles.bgSuccess}
              now={positivePercentage}
              label={`+${positivePercentage}%`}
              onClick={handleSuccessBarClick}
            />
            <ProgressBar
              key={1}
              className={styles.bgDanger}
              now={100 - positivePercentage}
              label={`-${100 - positivePercentage}%`}
              onClick={handleDangerBarClick}
            />
          </ProgressBar>
        </div>
      </div>
      <Collapse in={isOpened}>
        <div>
          <div
            className={cn(styles.separateLine, {
              [styles.success]: isPositiveSentences,
              [styles.danger]: !isPositiveSentences
            })}
          />
          {sentences.map((sentence) => (
            <div>
              <FaRegComment
                className={cn({
                  [styles.colorSuccess]: sentence.is_positive,
                  [styles.colorDanger]: !sentence.is_positive
                })}
              />
              <span className='ms-1'>{sentence.text}</span>
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
