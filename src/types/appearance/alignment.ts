import { Fill } from './fill';

export enum AlignHorizontal {
  Baseline = 'baseline',
  Center = 'center',
  Default = 'default',
  Left = 'start',
  Right = 'end',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
  Stretch = 'stretch',
}

export enum AlignVertical {
  Baseline = 'baseline',
  Bottom = 'end',
  Center = 'center',
  Default = 'default',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
  Stretch = 'stretch',
  Top = 'start',
}

export enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type Alignment = {
  fill?: Fill;
  orientation?: Orientation;
  horizontal?: AlignHorizontal;
  vertical?: AlignVertical;
};
