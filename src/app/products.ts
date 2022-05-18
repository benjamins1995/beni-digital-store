export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone 11',
    price: 540,
    description: 'Large phone with the best camera there is today, convenient to use and very beautiful and luxurious look.'
  },
  {
    id: 2,
    name: 'Galaxy s10 Plus',
    price: 450,
    description: 'Large phone with excellent screen and hardware, comfortable to use and very nice and suitable for smart people.'
  },
  {
    id: 3,
    name: 'Phone Kosher',
    price: 200,
    description: 'A kosher phone is blocked to the Internet and some of the apps are according to the rabbis.'
  },
  {
    id: 4,
    name: 'Phone Standard',
    price: 240,
    description: 'A regular phone for outgoing and incoming calls and especially if you do not want them to follow you.'
  }
];

