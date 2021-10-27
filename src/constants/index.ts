import { IProduct, ICluster } from 'src/types';

export const POPULAR_PRODUCTS: IProduct[] = [
  {
    name: 'Samsung Electronics Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black',
    asin: 'B096BKFG57',
    language: 'En',
    imageUrl: 'https://m.media-amazon.com/images/I/713eQBXJpGL._AC_SX569_.jpg'
  },
  {
    name: 'Apple AirPods with Charging Case Previous Model',
    asin: 'B01MQWUXZS',
    language: 'En',
    imageUrl: 'https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg'
  },
  {
    name: 'Fitbit Charge 2 Heart Rate Fitness Wristband Black Large US Version 1 Count',
    asin: 'B01K9S260E',
    language: 'En',
    imageUrl: 'https://m.media-amazon.com/images/I/81cp0NTn-EL._AC_SX425_.jpg'
  }
];

export const CLUSTERS_FOR_PRODUCT: Record<IProduct['asin'], ICluster[]> = {
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
