import { calculateCost } from '../libs/billing-lib';

test('Lowest Tier', () => {
  const storage = 10;
  const cost = 4000;
  expect(calculateCost(10)).toEqual(cost);
});

test('Middle Tier', () => {
  const storage = 100;
  const cost = 20000;
  expect(calculateCost(storage)).toEqual(cost);
});

test('Highest Tier', () => {
  const storage = 101;
  const cost = 10100;
  expect(calculateCost(storage)).toEqual(cost);
});
