import { outputFile } from 'fs-extra';
import { join } from 'node:path';

import collectAssets from './assets-collector';
import { generateMerchantsMockData } from './mock-data-generator/merchant';

function main() {
  const merchantTemplates = [
    {
      name: 'Ayam n Ayank',
      lauk: 'Ayam',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/chicken.png',
    },
    {
      name: 'Ikan Qu',
      lauk: 'Ikan',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/fish.png',
    },
    {
      name: 'Sapizz',
      lauk: 'Sapi',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/cow.png',
    },
    {
      name: 'Bebek Queen',
      lauk: 'Bebek',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/duck.png',
    },
    {
      name: 'Swike chan',
      lauk: 'Swike',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/frog.png',
    },
    {
      name: 'Kambing endut',
      lauk: 'Kambing',
      imageURL:
        'https://raw.githubusercontent.com/cholazzzb/food_paradise/main/s3-dummy/merchants/goat.png',
    },
  ];
  const { merchantsMockData, merchantsListMockData, menuMap } =
    generateMerchantsMockData(merchantTemplates);

  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants.json'),
    JSON.stringify(merchantsMockData, null, 2),
  );

  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants-list.json'),
    JSON.stringify(merchantsListMockData, null, 2),
  );

  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants-menu-item.json'),
    JSON.stringify(menuMap, null, 2),
  );

  const mockData = `
    import md from "./merchants.json";
    import mdl from "./merchants-list.json";
    import mdmi from "./merchants-menu-item.json"; 
    import { Menu, Merchant, MenuItem } from '~/domains/menu/entity';
    
    export const merchants = md as Record<Menu["merchantID"], Menu>;
    export const merchantsList = mdl as Array<Merchant>;
    export const merchantsMenuItem = mdmi as Record<MenuItem['id'], MenuItem>;
  `;
  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants.ts'),
    mockData,
  );

  collectAssets();
}

main();
