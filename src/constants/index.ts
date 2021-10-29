import { IProduct, ICluster } from 'src/types';

export const POPULAR_PRODUCTS: IProduct[] = [
  {
    asin: 'B096BKFG57',
    lang: 'En'
  },
  {
    asin: 'B07G853D6N',
    lang: 'En'
  },
  {
    asin: 'B01K9S260E',
    lang: 'En'
  }
];

export const CLUSTERS_FOR_PRODUCT: Record<string, ICluster[]> = {
  B096BKFG57: [
    {
      'cluster description': 'good screen',
      cluster_id: 1,
      group: 'Aspect based',
      sentences: ['god screen', 'nice image'],
      statements: 2
    },
    {
      'cluster description': 'dont buy',
      cluster_id: 2,
      group: 'Ipsum dolor',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      'cluster description': 'dont buy',
      cluster_id: 3,
      group: 'Adipisicing elit',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      'cluster description': 'dont buy',
      cluster_id: 4,
      group: 'Omnis, voluptate',
      sentences: ['sit amet', 'too cool', 'please dont buy'],
      statements: 3
    },
    {
      'cluster description': 'dont buy',
      cluster_id: 5,
      group: 'emotional based',
      sentences: ['dont buy', 'omnis', 'adipisicing elit', 'for me is nice'],
      statements: 4
    }
  ],
  B01MQWUXZS: [
    {
      'cluster description': 'dont buy',
      cluster_id: 1,
      group: 'emotional based',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    }
  ],
  B01K9S260E: [
    {
      'cluster description': 'dont buy',
      cluster_id: 1,
      group: 'emotional based',
      sentences: ['dont buy', 'too cool', 'please dont buy'],
      statements: 3
    }
  ]
};
