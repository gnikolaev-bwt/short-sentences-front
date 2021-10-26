import { IProduct, ICluster } from 'src/types';

export const popularProducts: IProduct[] = [
  {
    name: 'Redragon K552 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard with Red Switches for Windows Gaming PC 87 Keys Black',
    asin: 'B016MAK38U',
    language: 'En'
  },
  {
    name: 'Apple AirPods with Charging Case Previous Model',
    asin: 'B01MQWUXZS',
    language: 'En'
  },
  {
    name: 'Fitbit Charge 2 Heart Rate Fitness Wristband Black Large US Version 1 Count',
    asin: 'B01K9S260E',
    language: 'En'
  }
];

export const clustersForProduct: Record<IProduct['asin'], ICluster[]> = {
  B016MAK38U: [
    {
      cluster_description: 'good screen',
      cluster_id: 1,
      group: 'Aspect based',
      sentences: [
        { text: 'god screen', is_positive: true },
        { text: 'nice image', is_positive: true }
      ],
      statements: 2
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'Ipsum dolor',
      sentences: [
        { text: 'dont buy', is_positive: false },
        { text: 'too cool', is_positive: true },
        { text: 'please dont buy', is_positive: false }
      ],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'Adipisicing elit',
      sentences: [
        { text: 'dont buy', is_positive: false },
        { text: 'too cool', is_positive: true },
        { text: 'please dont buy', is_positive: false }
      ],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'Omnis, voluptate',
      sentences: [
        { text: 'sit amet', is_positive: true },
        { text: 'too cool', is_positive: true },
        { text: 'please dont buy', is_positive: false }
      ],
      statements: 3
    },
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'emotional based',
      sentences: [
        { text: 'dont buy', is_positive: false },
        { text: 'omnis', is_positive: false },
        { text: 'adipisicing elit', is_positive: false },
        { text: 'for me is nice', is_positive: false }
      ],
      statements: 4
    }
  ],
  B01MQWUXZS: [
    {
      cluster_description: 'dont buy',
      cluster_id: 2,
      group: 'emotional based',
      sentences: [
        { text: 'dont buy', is_positive: false },
        { text: 'too cool', is_positive: true },
        { text: 'please dont buy', is_positive: false }
      ],
      statements: 3
    }
  ]
};
