import { FC } from 'react';
import { ICluster } from 'src/types';
import { Spinner } from 'react-bootstrap';
import { ClusterDetails } from 'src/components/molecules';

export const ReviewSummary: FC<IProps> = (props) => {
  const { clusters } = props;
  return (
    <>
      <h4>Review Summary</h4>
      <div className='mt-3'>
        {!clusters.length ? (
          <Spinner animation='border' className='m-2'>
            <span className='visually-hidden' />
          </Spinner>
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
