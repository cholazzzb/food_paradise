// Ref: https://developer.grab.com/docs/grabfood/api/v1-1-3/#tag/submit-order

import { Currency } from '~/domains/menu/entity';
import {
  Campaign,
  DineIn,
  OrderAcceptedType,
  OrderItem,
  OrderReadyEstimation,
  OrderState,
  OrderType,
  PaymentType,
  Price,
  Promo,
  Receiver,
} from './entity';

export type PostSubmitOrder = {
  orderID?: string;
  shortOrderNumber: string;
  merchantID: string;
  partnerMerchantID: string;
  paymentType: PaymentType;
  cutlery: true;
  orderTime: string; // e.g.'2019-05-24T05:06:00Z'
  submitTime: string;
  completeTime: string;
  scheduledTime: string;
  orderState: OrderState;
  currency: Currency;
  featureFlags?: {
    orderAcceptedType: OrderAcceptedType;
    orderType: OrderType;
    isMexEditOrder: boolean;
  };
  items: Array<OrderItem>;
  campaigns?: Array<Campaign>;
  promos?: Array<Promo>;
  price: Price;
  dineIn?: DineIn;
  receiver?: Receiver;
  orderReadyEstimation?: OrderReadyEstimation;
  membershipID?: string;
};
