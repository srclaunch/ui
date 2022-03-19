export enum PositionBehavior {
  Absolute = 'absolute',
  Fixed = 'fixed',
  Relative = 'relative',
  Static = 'static',
  Sticky = 'sticky',
}

export type Position = {
  readonly behavior?: PositionBehavior;
  readonly bottom?: number | string;
  readonly left?: number | string;
  readonly right?: number | string;
  readonly top?: number | string;
};
