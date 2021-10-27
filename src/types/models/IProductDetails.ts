interface IBadges {
  amazon_prime: boolean;
  amazon_choice: boolean;
}

interface ISellerRank {
  rank: number;
  category: string;
  link: string;
}

interface ICategory {
  category: string;
  url: string;
}

interface IPrice {
  before_price: number;
  currency: string;
  current_price: number;
  discounted: boolean;
  savings_amount: number;
  savings_percent: number;
  symbol: symbol;
}

interface IProductInformation {
  available_for_days: number;
  available_for_months: number;
  available_from: string;
  available_from_utc: string;
  brand: string;
  department: string;
  dimensions: string;
  manufacturer: string;
  model_number: string;
  qty_per_order: string;
  store_id: string;
  weight: string;
}

interface IReviews {
  answered_questions: number;
  rating: string;
  total_reviews: number;
}

interface IImage {
  hiRes: string;
  large: string;
  main: Record<string, string[]>;
  thumb: string;
  variant: string;
}

interface IVideo {
  durationSeconds: number;
  durationTimestamp: string;
  groupType: string;
  holderId: string;
  isHeroVideo: boolean;
  isVideo: boolean;
  languageCode: string;
  marketPlaceID: string;
  mediaObjectId: string;
  minimumAge: 0;
  offset: string;
  slateHash: {
    extension: string;
    physicalID: number;
    width: string;
    height: string;
  };
  slateUrl: string;
  thumb: string;
  thumbUrl: string;
  title: string;
  url: string;
  variant: string;
  videoHeight: string;
  videoWidth: string;
}

interface IVariant {
  asin: string;
  link: string;
  price: string;
  title: string;
  is_current_product: boolean;
  images: IImage[];
}

export interface IProductDetails {
  asin: string;
  url: string;
  title: string;
  description: string;
  delivery_message: string;
  feature_bullets: string[];
  item_available: boolean;
  badges: IBadges;
  bestsellers_rank: ISellerRank[];
  categories: ICategory[];
  price: IPrice;
  product_information: IProductInformation;
  reviews: IReviews;
  total_images: number;
  total_videos: number;
  main_image: string;
  images: string[];
  videos: IVideo[];
  variants: IVariant[];
  also_bought: any[];
  sponsored_products: any[];
  other_sellers: any[];
}
