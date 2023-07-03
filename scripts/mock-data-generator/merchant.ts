import {
  CurrencyCode,
  CurrencySymbol,
  Menu,
  MenuItem,
  Merchant,
} from '../../src/domains/menu/entity';
import { generateCategories } from './menu';
import { generateSellingTimes } from './selling-time';

export function generateRandomID(): string {
  let d = new Date().getTime();
  let d2 = Math.round(Math.random() * d);
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export type MerchantTemplate = {
  name: string;
  lauk: string;
  imageURL: string;
};
export function generateMerchantsMockData(
  merchantTemplate: Array<MerchantTemplate>,
): {
  merchantsMockData: Record<Menu['merchantID'], Menu>;
  merchantsListMockData: Array<Merchant>;
  menuMap: Record<MenuItem['id'], MenuItem>;
} {
  const merchantsMockData: Record<Menu['merchantID'], Menu> = {};
  const merchantsListMockData: Array<Merchant> = [];
  const menuMap: Record<MenuItem['id'], MenuItem> = {};

  for (const template of merchantTemplate) {
    const merchantID = generateRandomID();
    merchantsListMockData.push({
      merchantID,
      name: template.name,
      imageURL: template.imageURL,
    });

    const sellingTimes = Array(2)
      .fill(null)
      .map(() => generateSellingTimes());
    const categories = generateCategories(
      template.lauk,
      sellingTimes.map((st) => st.id),
    );
    const menu: Menu = {
      merchantID,
      partnerMerchantID: merchantID,
      currency: {
        code: CurrencyCode.IDR,
        symbol: CurrencySymbol.Rp,
        exponent: 2,
      },
      sellingTimes,
      categories,
    };

    merchantsMockData[merchantID] = menu;
    for (const category of categories) {
      for (const menuItem of category.items) {
        menuMap[menuItem.id] = menuItem;
      }
    }
  }
  return { merchantsMockData, merchantsListMockData, menuMap };
}
