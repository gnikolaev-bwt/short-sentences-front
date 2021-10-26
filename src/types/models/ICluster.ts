export interface ISentence {
  text: string;
  is_positive: boolean;
}

export interface ICluster {
  cluster_description: string;
  cluster_id: number;
  group: string;
  sentences: ISentence[];
  statements: number;
}
