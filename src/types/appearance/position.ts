import { Amount } from './proportion';
import { Sizes } from './size';

export enum PositionBehavior {
  Absolute = 'absolute',
  Fixed = 'fixed',
  Relative = 'relative',
  Static = 'static',
  Sticky = 'sticky',
}

export type Position = {
  readonly bottom?: Amount | string | number;
  readonly left?: Amount | string | number;
  readonly behavior?: PositionBehavior;
  readonly right?: Amount | string | number;
  readonly top?: Amount | string | number;
};
