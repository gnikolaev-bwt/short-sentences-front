export interface IReview {
  cluster_description: string;
  cluster_id: number;
  group: string;
  sentences: string[];
  statements: number;
  is_positive: boolean;
}
