import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LocalOrderItem, MerchantID, OrderItem, Price } from './entity';
import { addOneItem, removeOneItem } from './logic';

export type OrderMenuItem = {
  merchantID: MerchantID;
  partnerMerchantID: MerchantID;
  items: Record<OrderItem['id'], Array<LocalOrderItem>>;
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

export function useAllLocalOrders() {
  return useLocalOrderStore((localOrderStore) => {
    const result: Array<LocalOrderItem & { merchantID: string; idx: number }> =
      [];

    for (const [merchantID, orderMenuItem] of Object.entries(
      localOrderStore.orders,
    )) {
      const items: Array<LocalOrderItem & { merchantID: string; idx: number }> =
        [];
      Object.values(orderMenuItem.items).forEach((item, idx) => {
        items.push(...item.map((it) => ({ ...it, merchantID, idx })));
      });
      result.push(...items);
    }

    return result;
  });
}

function addOrderItem(params: {
  merchantID: MerchantID;
  localOrderItem: LocalOrderItem;
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
