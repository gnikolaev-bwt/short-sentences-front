import { FC, useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { BiErrorCircle } from 'react-icons/bi';
import { ICluster } from 'src/types';
import { getTimeFromSeconds } from 'src/utils';
import { CenteredBox } from 'src/components/atoms';
import { ClusterDetails } from 'src/components/molecules';

export const ClusterList: FC<IProps> = (props) => {
  const { clusters, isLoading, error } = props;
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setSecondsPassed(0);
      const interval = setInterval(() => {
        setSecondsPassed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className='rounded-3 border p-4'>
      <h4>Review Summary</h4>
      <hr className='my-4' />
      <div>
        {isLoading ? (
          <CenteredBox>
            <ClockLoader />
            <div className='mt-2'>
              It takes about 3 minutes to load reviews
            </div>
            <div className='mt-1'>
              Time passed: {getTimeFromSeconds(secondsPassed)}
            </div>
          </CenteredBox>
        ) : error && error.startsWith('APP_ERROR') ? (
          <CenteredBox>
            <BiErrorCircle size='48px' />
            <div className='mt-2'>{error.substring(10)}</div>
          </CenteredBox>
        ) : error ? (
          <CenteredBox>
            <BiErrorCircle size='48px' />
            <div className='mt-2'>
              Some error occurred on reviews load: <br /> {error}
            </div>
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
