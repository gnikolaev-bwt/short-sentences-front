import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { ImageBlock } from '../ImageBlock/ImageBlock';

export const CarouselBlock: FC<IProps> = (props) => {
  const { images, height, bgSize } = props;
  return images.length > 1 ? (
    <Carousel interval={null} variant='dark'>
      {images.map((imageSrc, i) => (
        <Carousel.Item key={i}>
          <ImageBlock src={imageSrc} height={height} bgSize={bgSize} />
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <ImageBlock src={images[0]} height={height} bgSize={bgSize} />
  );
};

interface IProps {
  images: string[];
  height: string;
  bgSize: string;
}
