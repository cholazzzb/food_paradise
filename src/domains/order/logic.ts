import { LocalOrderItem, MerchantID, OrderItem } from './entity';
import { LocalOrder } from './store';

export function addOneItem(
  store: LocalOrder['orders'],
  params: {
    merchantID: MerchantID;
    localOrderItem: LocalOrderItem;
  },
): LocalOrder['orders'] {
  const nextState = { ...store };
  const orderMenuItem = nextState[params.merchantID];
  if (!orderMenuItem) {
    nextState[params.merchantID] = {
      merchantID: params.merchantID,
      partnerMerchantID: params.merchantID,
      items: {
        [params.localOrderItem.id]: [params.localOrderItem],
      },
      price: {
        subtotal: 1000,
        tax: 0,
        merchantChargeFee: 0,
        grabFundPromo: 0,
        merchantFundPromo: 0,
        basketPromo: 0,
        deliveryFee: 0,
        eaterPayment: 0,
      },
    };
    return nextState;
  }

  const orderItems = orderMenuItem.items[params.localOrderItem.id];
  if (!orderItems) {
    orderMenuItem.items[params.localOrderItem.id] = [params.localOrderItem];
  } else {
    orderMenuItem.items[params.localOrderItem.id].push(params.localOrderItem);
  }
  return nextState;
}

export function removeOneItem(
  store: LocalOrder['orders'],
  params: {
    merchantID: MerchantID;
    orderItemID: OrderItem['id'];
    idx: number;
  },
): LocalOrder['orders'] {
  const nextState = { ...store };
  const orderMenuItem = nextState[params.merchantID];
  if (!orderMenuItem) {
    // eslint-disable-next-line no-console
    console.warn('unexpected behaviour: deleting orderMenuItem that not exist');
    return nextState;
  }

  const orderItems = orderMenuItem.items[params.orderItemID];
  if (!orderItems) {
    // eslint-disable-next-line no-console
    console.warn('unexpected behaviour: deleting orderItems that not exist');
    return nextState;
  }

  if (!orderItems[params.idx]) {
    // eslint-disable-next-line no-console
    console.warn(
      'unexpected behaviour: deleting orderItems that are out of range',
    );
    return nextState;
  }

  if (orderItems.length === 1 && params.idx === 0) {
    orderMenuItem.items[params.orderItemID] = [];
  } else {
    orderItems.splice(params.idx, 1);
  }

  return nextState;
}
