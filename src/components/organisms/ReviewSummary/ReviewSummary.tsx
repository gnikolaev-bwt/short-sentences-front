import { FC } from 'react';
import { ICluster } from 'src/types';
import { ClockLoader } from 'react-spinners';
import { ClusterDetails } from 'src/components/molecules';

export const ReviewSummary: FC<IProps> = (props) => {
  const { clusters } = props;
  return (
    <>
      <h4>Review Summary</h4>
      <div className='mt-3'>
        {!clusters ? (
          <span>No reviews found for this product</span>
        ) : !clusters?.length ? (
          <div className='w-100 d-flex flex-column align-items-center mt-5'>
            <ClockLoader />
            <div className='mt-2'>Please, wait a few seconds</div>
          </div>
        ) : (
          clusters.map((cluster, i) => (
            <ClusterDetails key={i} cluster={cluster} />
          ))
        )}
      </div>
    </>
  );
};

interface IProps {
  clusters: ICluster[];
}
