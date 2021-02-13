import { randomFromArray, randomNumber } from './utils';
import { v4 as uuidv4 } from 'uuid';

const getRarity = (rarities, rarity) => {
  if (rarity >= rarities.legendary) return 'legendary';
  if (rarity >= rarities.ultrarare) return 'ultrarare';
  if (rarity >= rarities.rare) return 'rare';

  return 'common';
};

export const getChest = ({ rarities, rewards }) => {
  const maxRarity = Math.max(...rewards.map(({ rarity }) => rarity));
  const number = randomNumber(0, maxRarity);

  const reward = randomFromArray(
    rewards.filter(({ rarity }) => number >= rarity)
  );

  if (!reward) return;

  return {
    reward: reward.name,
    rarity: getRarity(rarities, reward.rarity),
    id: uuidv4(),
  };
};
