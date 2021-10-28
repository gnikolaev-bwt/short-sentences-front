import { FC, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { ICluster } from 'src/types';
import { getTimeFromSeconds } from 'src/utils';
import { CenteredBox } from 'src/components/atoms';
import { ClusterDetails } from 'src/components/molecules';

export const ClusterList: FC<IProps> = (props) => {
  const { isLoading, clusters } = props;
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSecondsPassed((prev) => prev + 1),
      1000
    );
    return () => clearInterval(interval);
  }, [clusters]);

  return (
    <div className='rounded-3 border p-4'>
      <h4>Review Summary</h4>
      <div className='mt-3'>
        {isLoading ? (
          <CenteredBox>
            <ClockLoader />
            <div className='mt-2'>It takes about 1 minute to load reviews</div>
            <div className='mt-1'>
              Time passed: {getTimeFromSeconds(secondsPassed)}
            </div>
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
  isLoading: boolean;
  clusters: ICluster[];
}
