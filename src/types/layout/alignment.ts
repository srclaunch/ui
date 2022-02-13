export enum Align {
  Baseline = 'baseline',
  Bottom = 'flex-end',
  Center = 'center',
  Left = 'flex-start',
  Right = 'flex-end',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
  Stretch = 'stretch',
  Top = 'flex-start',
  Justify = 'justify',
}

export enum Orientation {
  Diagonal = 'diagonal',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type AlignmentProps = {
  readonly alignContent?: Align;
  readonly alignItems?: Align;
  readonly alignSelf?: Align;
  readonly grow?: boolean;
  readonly lineWrap?: boolean;
  readonly shrink?: boolean;
  readonly orientation?: Orientation.Horizontal | Orientation.Vertical;
};
