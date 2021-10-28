import { FC } from 'react';
import { ClockLoader } from 'react-spinners';
import { ICluster } from 'src/types';
import { CenteredBox } from 'src/components/atoms';
import { ClusterDetails } from 'src/components/molecules';

export const ClusterList: FC<IProps> = (props) => {
  const { clusters } = props;
  return (
    <div className='rounded-3 border p-4'>
      <h4>Review Summary</h4>
      <div className='mt-3'>
        {!clusters ? (
          <CenteredBox>
            <ClockLoader />
            <div className='mt-2'>Please, wait a few seconds</div>
          </CenteredBox>
        ) : !clusters.length ? (
          <span>No reviews found for this product</span>
        ) : (
          clusters.map((cluster, i) => (
            <ClusterDetails key={i} cluster={cluster} />
          ))
        )}
      </div>
    </div>
  );
};

interface IProps {
  clusters: ICluster[] | null;
}
