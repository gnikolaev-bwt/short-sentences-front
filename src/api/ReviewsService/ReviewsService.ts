import { createAsyncPromise } from '../utils/createAsyncPromise';
import { popularReviews } from 'src/constants';
import { IReview } from 'src/types';

export class ReviewsService {
  static getPopularReviews = () => {
    return createAsyncPromise<IReview[]>(popularReviews, 500);
  };
}
