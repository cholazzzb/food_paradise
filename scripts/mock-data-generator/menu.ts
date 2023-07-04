import {
  AvailableStatus,
  Category,
  ModifierGroup,
  SellingTime,
} from '../../src/domains/menu/entity';
import {
  generateRandomID,
  randomFromArray,
  shuffleArray,
} from '../../src/shared/random';

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
      photos: [
        'https://3.bp.blogspot.com/-NrcVsbZa0PM/VXCSmdRnj6I/AAAAAAAAABc/4Dfqub_ba3o/s1600/6.jpg',
      ],
      sellingTimeID: randomFromArray(sellingTimeIDs),
      maxStock: 100,
      modifierGroups: generateModifierGroups(),
    })),
  }));
}

const modifierGroups = ['Tahu', 'Tempe', 'Telur', 'Baso', 'Sosis', 'Nugget'];
const modifiers = ['Goreng', 'Bakar', 'Panggang'];
const optionalModifiers = [
  'Jus Strawberry',
  'Jus Mangga',
  'Air Mineral',
  'Teh Tawar',
  'Teh Manis',
  'Kopi Hitam',
];
function generateModifierGroups(): Array<ModifierGroup> {
  const results: Array<ModifierGroup> = shuffleArray(modifierGroups)
    .slice(0, Math.round(Math.random() * modifierGroups.length))
    .map((modGrp) => ({
      id: generateRandomID(),
      name: modGrp,
      availableStatus: randomFromArray([
        AvailableStatus.AVAILABLE,
        AvailableStatus.HIDE,
        AvailableStatus.UNAVAILABLE,
      ]),
      selectionRangeMin: 1,
      selectionRangeMax: 3 + Math.round(Math.random() * 12),
      modifiers: modifiers.map((mod) => ({
        id: generateRandomID(),
        name: `${modGrp} ${mod}`,
        availableStatus: randomFromArray([
          AvailableStatus.AVAILABLE,
          AvailableStatus.UNAVAILABLE,
        ]),
        price: Math.ceil((1000 + Math.random() * 3000) / 100) * 100,
      })),
    }));

  results.push({
    id: generateRandomID(),
    name: 'Extras',
    availableStatus: AvailableStatus.AVAILABLE,
    selectionRangeMin: 0,
    selectionRangeMax: 3 + Math.round(Math.random() * 12),
    modifiers: shuffleArray(optionalModifiers)
      .slice(0, 2 + Math.round(Math.random() * optionalModifiers.length - 2))
      .map((mod) => ({
        id: generateRandomID(),
        name: mod,
        availableStatus: randomFromArray([
          AvailableStatus.AVAILABLE,
          AvailableStatus.UNAVAILABLE,
        ]),
        price: Math.ceil((1000 + Math.random() * 3000) / 100) * 100,
      })),
  });

  return results;
}
