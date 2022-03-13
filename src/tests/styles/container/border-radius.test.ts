import { getBorderRadiusValue } from '../../../styles/container/border-radius';
import { Amount } from '../../../types';

test('returns correct value when given an object of corners with numeric values', () => {
  expect(
    getBorderRadiusValue({
      bottomLeft: 1,
      bottomRight: 2,
      topLeft: 3,
      topRight: 4,
    }),
  ).toBe('3px 4px 2px 1px');
});

test('returns correct value when given an Amount', () => {
  expect(getBorderRadiusValue({ all: Amount.Default })).toBe(Amount.Default);
});