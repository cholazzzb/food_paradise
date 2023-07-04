import {
  CurrencyCode,
  CurrencySymbol,
  Menu,
  MenuItem,
  Merchant,
} from '../../src/domains/menu/entity';
import { generateRandomID } from '../../src/shared/random';
import { generateCategories } from './menu';
import { generateSellingTimes } from './selling-time';

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
