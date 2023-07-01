import {
  AvailableStatus,
  Category,
  SellingTime,
} from '../../src/domains/menu/entity';
import { randomFromArray, shuffleArray } from '../../src/shared/random';
import { generateRandomID } from './merchant';

const categories = ['Tanpa Nasi', 'Dengan Nasi', 'Tambah Lalap'];
const spices = [
  'Bakar',
  'Goreng',
  'Taliwang',
  'Bumbu Rujak',
  'Sambel Ijo',
  'Bakar Madu',
  'Bumbu Cobek',
  'Panggang',
  'Saus Padang',
  'Saus Asam Manis',
];
export function generateCategories(
  lauk: string,
  sellingTimeIDs: Array<SellingTime['id']>,
): Array<Category> {
  return categories.map((cat) => ({
    id: generateRandomID(),
    name: cat,
    availableStatus: AvailableStatus.AVAILABLE,
    items: shuffleArray(spices).map((spice) => ({
      id: generateRandomID(),
      name: `${lauk} ${spice} ${cat}`,
      availableStatus: randomFromArray([
        AvailableStatus.AVAILABLE,
        AvailableStatus.HIDE,
        AvailableStatus.UNAVAILABLE,
      ]),
      price: Math.ceil((10000 + Math.random() * 30000) / 100) * 100,
      photos: [],
      sellingTimeID: randomFromArray(sellingTimeIDs),
      maxStock: 100,
      modifierGroups: [],
    })),
  }));
}
