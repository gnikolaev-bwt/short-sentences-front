interface IPosition {
  page: number;
  position: number;
  global_position: number;
}

interface IPrice {
  before_price: number;
  currency: string;
  current_price: number;
  discounted: boolean;
  savings_amount: number;
  savings_percent: number;
}

interface IReview {
  total_reviews: number;
  rating: number;
}

export interface IFoundProduct {
  asin: string;
  title: string;
  url: string;
  score: string;
  sponsored: boolean;
  thumbnail: string;
  bestSeller: boolean;
  amazonChoice: boolean;
  amazonPrime: boolean;
  position: IPosition;
  price: IPrice;
  reviews: IReview;
}
