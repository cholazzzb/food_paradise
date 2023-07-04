export enum PaymentType {
  CASH = 'CASH',
  CASHLESS = 'CASHLESS',
}

export enum OrderState {
  DRIVER_ALLOCATED = 'DRIVER_ALLOCATED',
  DRIVER_ARRIVED = 'DRIVER_ARRIVED',
  COLLECTED = 'COLLECTED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

export enum OrderAcceptedType {
  AUTO = 'AUTO',
  MANUAL = 'MANUAL',
}

export enum OrderType {
  TakeAway = 'TakeAway',
  DeliveredByGrab = 'DeliveredByGrab',
  DeliveredByRestaurant = 'DeliveredByRestaurant',
  DineIn = 'DineIn',
}

export type OrderItem = {
  id: string;
  grabItemID: string;
  quantity: number;
  price: number;
  tax: number;
  specifications: string;
  modifiers: [
    {
      id: string;
      price: number;
      tax: number;
      quantity: number;
    },
  ];
};

// Mock
export type Campaign = {
  id: 'string';
  name: '20% off Deal Of the day';
  level: 'item';
  type: 'percentage';
  usageCount: 1;
  mexFundedRatio: 100;
  deductedAmount: 475;
  deductedPart: 'basket_amount';
  appliedItemIDs: ['item-1'];
  freeItem: {
    id: 'item-2';
    name: 'Free tote bag';
    quantity: 1;
    price: 10;
  };
};

export type Promo = {
  code: 'promo_code';
  description: '$3 off for entire order!';
  name: 'Order now!';
  promoAmount: 3;
  mexFundedRatio: 0;
  mexFundedAmount: 0;
  targetedPrice: 2550;
  promoAmountInMin: 300;
};

export type Price = {
  subtotal: number;
  tax: number;
  merchantChargeFee: number;
  grabFundPromo: number;
  merchantFundPromo: number;
  basketPromo: number;
  deliveryFee: number;
  eaterPayment: number;
};

export type DineIn = {
  tableID: number;
  eaterCount: number;
};

export type Receiver = {
  name: 'Prashanth';
  phones: 60122234704;
  address: {
    unitNumber: '3-45';
    deliveryInstruction: 'turn left in 2 floor.';
    poiSource: 'GRAB';
    poiID: 'string';
    address: '123, Jalan Eater street, Batu Caves, 12345, Selangor';
    postcode: 123456;
    coordinates: {
      latitude: 1.234567;
      longitude: 3.456789;
    };
  };
};

export type OrderReadyEstimation = {
  allowChange: true;
  estimatedOrderReadyTime: '2019-05-24T05:16:00Z';
  maxOrderReadyTime: '2019-05-24T05:16:00Z';
  newOrderReadyTime: '2019-05-24T05:26:00Z';
};
