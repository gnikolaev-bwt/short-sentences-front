import { FC } from 'react';

export const ImageBlock: FC<IProps> = (props) => {
  const { src, height, bgSize } = props;
  return (
    <div
      style={{
        height: height ?? '15rem',
        background: src ? `url(${src}) no-repeat center` : '#2b2b2b',
        backgroundSize: src ? bgSize ?? '50%' : '100%'
      }}
    />
  );
};

interface IProps {
  src: string | null | undefined;
  height?: string;
  bgSize?: string;
}
