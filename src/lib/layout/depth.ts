import { Depth } from '../../types';

export function getZIndexFromDepth(depth?: Depth) {
  switch (depth) {
    case Depth.Lowest:
      return -3;
    case Depth.Lower:
      return -2;
    case Depth.Low:
      return -1;
    case Depth.Surface:
      return 0;
    case Depth.High:
      return 1;
    case Depth.Higher:
      return 2;
    case Depth.Highest:
      return 3;
    default:
      return 0;
  }
}
