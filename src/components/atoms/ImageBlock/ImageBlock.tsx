import { FC } from 'react';

export const ImageBlock: FC<IProps> = (props) => {
  const { src, height, bgSize } = props;
  return (
    <div
      style={{
        height: height ?? '15rem',
        backgroundImage: src ? `url(${src})` : 'none',
        backgroundColor: src ? 'none' : '#2b2b2b',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
