import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getRouteUrl, IRoutes } from 'src/routes';
import { ImageBlock, RatingBlock } from 'src/components/atoms';

export const ShortInfoCard: FC<IProps> = (props) => {
  const { asin, src, title, rating } = props;

  const productDetailsUrl = getRouteUrl(IRoutes.ProductDetails, {
    asin,
    lang: 'En'
  });

  return (
    <Card as={Link} className='h-100' to={productDetailsUrl}>
      <ImageBlock src={src} height='10rem' bgSize='40%' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {rating && <RatingBlock rating={`${rating}`} />}
      </Card.Body>
    </Card>
  );
};

interface IProps {
  asin: string;
  src: string;
  title: string;
  rating?: number | string;
}
