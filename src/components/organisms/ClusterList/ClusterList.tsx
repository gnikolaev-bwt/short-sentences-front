import { FC, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { ICluster } from 'src/types';
import { getTimeFromSeconds } from 'src/utils';
import { CenteredBox } from 'src/components/atoms';
import { ClusterDetails } from 'src/components/molecules';
import { BiErrorCircle } from 'react-icons/all';

export const ClusterList: FC<IProps> = (props) => {
  const { clusters, isLoading, error } = props;
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
        ) : error ? (
          <CenteredBox>
            <BiErrorCircle size='3rem' />
            <div className='mt-2'>Some error occured on reviews load.</div>
          </CenteredBox>
        ) : !clusters.length ? (
          <CenteredBox>
            <BiErrorCircle size='3rem' />
            <div className='mt-2'>No reviews found for this product.</div>
          </CenteredBox>
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
  clusters: ICluster[];
  isLoading: boolean;
  error: string;
}
