import {
  CurrencyCode,
  CurrencySymbol,
  Menu,
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

export function generateMerchantsMockData(
  merchantTemplate: Array<{
    name: string;
    lauk: string;
  }>,
): Record<Menu['merchantID'], Menu> {
  const merchantsMockData: Record<Menu['merchantID'], Menu> = {};

  for (const template of merchantTemplate) {
    const merchantID = generateRandomID();
    const sellingTime = Array(2)
      .fill(null)
      .map(() => generateSellingTimes());
    const menu: Menu = {
      merchantID,
      partnerMerchantID: merchantID,
      currency: {
        code: CurrencyCode.IDR,
        symbol: CurrencySymbol.Rp,
        exponent: 2,
      },
      sellingTimes: sellingTime,
      categories: generateCategories(
        template.lauk,
        sellingTime.map((st) => st.id),
      ),
    };
    merchantsMockData[merchantID] = menu;
  }
  return merchantsMockData;
}
