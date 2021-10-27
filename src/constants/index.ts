import { IProductInfo, ICluster } from 'src/types';

export const POPULAR_PRODUCTS: IProductInfo[] = [
  {
    asin: 'B096BKFG57',
    lang: 'En'
  },
  {
    asin: 'B01MQWUXZS',
    lang: 'En'
  },
  {
    asin: 'B01K9S260E',
    lang: 'En'
  }
];

export const CLUSTERS_FOR_PRODUCT: Record<IProductInfo['asin'], ICluster[]> = {
  B096BKFG57: [
    {
      cluster_description: 'good screen',
      cluster_id: 1,
      group: 'Aspect based',
      sentences: ['god screen', 'nice image'],
      statements: 2
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'Ipsum dolor',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 3,
      group: 'Adipisicing elit',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 4,
      group: 'Omnis, voluptate',
      sentences: ['sit amet', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 5,
      group: 'emotional based',
      sentences: ['dont buy', 'omnis', 'adipisicing elit', 'for me is nice'],
      statements: 4
    }
  ],
  B01MQWUXZS: [
    {
      cluster_description: 'dont buy',
      cluster_id: 1,
      group: 'emotional based',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    }
  ],
  B01K9S260E: [
    {
      cluster_description: 'dont buy',
      cluster_id: 1,
      group: 'emotional based',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    }
  ]
};
