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
