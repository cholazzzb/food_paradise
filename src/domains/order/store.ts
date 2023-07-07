import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { MerchantID, OrderItem, Price } from './entity';
import { addOneItem, removeOneItem } from './logic';

export type OrderMenuItem = {
  merchantID: MerchantID;
  partnerMerchantID: MerchantID;
  items: Record<OrderItem['id'], Array<OrderItem>>;
  price: Price;
};
export type LocalOrder = {
  orders: Record<MerchantID, OrderMenuItem>;
};

export const useLocalOrderStore = create<LocalOrder>()(
  persist(
    (_set, _get) => ({
      orders: {},
    }),
    {
      version: 0,
      name: 'local-order',
    },
  ),
);

function addOrderItem(params: {
  merchantID: MerchantID;
  orderItem: OrderItem;
}) {
  useLocalOrderStore.setState((state) => {
    return { orders: addOneItem(state.orders, params) };
  });
}

export const removeOrderItem = (params: {
  merchantID: MerchantID;
  orderItemID: OrderItem['id'];
  idx: number;
}) => {
  useLocalOrderStore.setState((state) => {
    return { orders: removeOneItem(state.orders, params) };
  });
};

export const localOrderAction = {
  addOrderItem,
  removeOrderItem,
};
