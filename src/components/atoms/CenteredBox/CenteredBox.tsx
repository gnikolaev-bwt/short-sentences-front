import { FC } from 'react';

export const CenteredBox: FC = (props) => {
  const { children } = props;
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center my-5'>
      {children}
    </div>
  );
};
