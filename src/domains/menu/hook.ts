import { useCallback, useEffect, useState } from 'react';

import { Menu, MenuItem, Merchant } from './entity';
import { getMenuByMerchantID, getMenuItem, getMerchantsList } from './service';

enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
}
export function useMerchantsList() {
  const [status, setStatus] = useState(Status.Loading);
  const [merchants, setMerchants] = useState<Array<Merchant>>([]);

  const reload = async (cb?: {
    onSuccess?: (data: Array<Merchant>) => void;
    onError?: (err: unknown) => void;
  }) => {
    setStatus(Status.Loading);
    getMerchantsList()
      .then((res) => {
        const merchants = res?.merchants;
        setStatus(Status.Success);
        setMerchants(merchants);
        cb?.onSuccess && cb?.onSuccess(merchants);
      })
      .catch((err) => {
        setStatus(Status.Error);
        cb?.onError && cb?.onError(err);
      });
  };

  useEffect(() => {
    reload();
  }, []);

  return { merchants, status, reload };
}

type GroupedMenu = {
  categoryNames: Array<string>;
  categoryMenuCount: Array<number>;
  allMenus: Menu['categories'][0]['items'];
};
export function useGroupMenu() {
  const [status, setStatus] = useState<Status>(Status.Idle);
  const [groupedMenu, setGroupedMenu] = useState<GroupedMenu>();
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant>();

  const createOnClickHandler = useCallback((merchant: Merchant) => {
    return async () => {
      try {
        setStatus(Status.Loading);
        setSelectedMerchant(merchant);
        const res = await getMenuByMerchantID(merchant.merchantID);

        const newGroupedMenu: GroupedMenu = {
          categoryNames: [],
          categoryMenuCount: [],
          allMenus: [],
        };
        for (const category of res.menu.categories) {
          newGroupedMenu.categoryNames.push(category.name);
          newGroupedMenu.categoryMenuCount.push(category.items.length);
          newGroupedMenu.allMenus.push(...category.items);
        }
        setGroupedMenu(newGroupedMenu);
        setStatus(Status.Success);
      } catch (e) {
        // TODO: Handle Error
        setStatus(Status.Error);
      }
    };
  }, []);

  return { groupedMenu, selectedMerchant, status, createOnClickHandler };
}

export function useMenuItem(menuID: string) {
  const [status, setStatus] = useState<Status>(Status.Idle);
  const [menuItem, setMenuItem] = useState<MenuItem>();

  useEffect(() => {
    setStatus(Status.Loading);
    getMenuItem(menuID)
      .then((res) => {
        setMenuItem(res.menuItem);
        setStatus(Status.Success);
      })
      .catch(() => setStatus(Status.Error));
  }, [menuID]);

  return { menuItem, status, isError: status === Status.Error };
}
