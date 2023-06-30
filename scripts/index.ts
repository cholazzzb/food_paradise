import { outputFile } from 'fs-extra';
import { join } from 'node:path';

import { generateMerchantsMockData } from './mock-data-generator/merchant';

function main() {
  const merchantsMockData = generateMerchantsMockData([
    { name: 'Ayam n Ayank', lauk: 'Ayam' },
    { name: 'Ikan Qu', lauk: 'Ikan' },
    { name: 'Sapizz', lauk: 'Sapi' },
    { name: 'Bebek Queen', lauk: 'Bebek' },
    { name: 'Swike chan', lauk: 'Swike' },
    { name: 'Kambing endut', lauk: 'Kambing' },
  ]);

  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants.json'),
    JSON.stringify(merchantsMockData, null, 2),
  );

  const mockData = `
    import md from "./merchants.json";
    import { Menu } from '~/domains/menu/entity';
    
    export const merchants = md as Record<Menu["merchantID"], Menu>;
  `;
  outputFile(
    join('src', '__generated__', 'mock-data', 'merchants.ts'),
    mockData,
  );
}

main();
