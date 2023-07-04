import { type GetMenuItemRes } from './contract';
import { Menu, Merchant } from './entity';

export async function getMerchantsList(): Promise<{
  merchants: Array<Merchant>;
}> {
  const data = await fetch('/api/merchant');
  return await data.json();
}

export async function getMenuByMerchantID(
  merchantID: string,
): Promise<{ menu: Menu }> {
  const data = await fetch('/api/merchant/menu', {
    headers: { 'Merchant-Id': merchantID },
  });
  return await data.json();
}

export async function getMenuItem(menuID: string): Promise<GetMenuItemRes> {
  const res = await fetch(`/api/merchant/menu/${menuID}`);
  const resData = await res.json();
  return { menuItem: resData?.menuItem };
}
