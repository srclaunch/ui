import { Color } from './color';
import { DepthShadow } from './depth';
import { Amount } from './proportion';
import { Size } from './size';

export type Shadow =
  | {
      readonly blur?: Amount | Size;
      readonly color?: Color;
      readonly x?: Amount | Size;
      readonly y?: Amount | Size;
      readonly opacity?: number;
      readonly spread?: Amount | Size;
    }
  | {
      readonly blur?: Amount | Size;
      readonly color?: Color;
      readonly x?: Amount | Size;
      readonly y?: Amount | Size;
      readonly opacity?: number;
      readonly spread?: Amount | Size;
    }[];
