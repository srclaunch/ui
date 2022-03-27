import { Amount, Padding, Sizes } from '../../types';

export function getDropdownMinHeight(
  count: number,
  padding?: string | number,
): string | number {
  switch (count) {
    case 0:
      return 0;
    case 1:
      return `calc((${Sizes.Default}) + (${padding ?? Amount.Less} * 2) + 2px)`;
    case 2:
      return `calc((${Sizes.Default} * 2) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
    case 3:
      return `calc((${Sizes.Default} * 3) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
    default:
      return `calc((${Sizes.Default} * 3.5) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
  }
}
