export enum FillBehavior {
  FillHorizontal = 'fill_horizontal',
  FillVertical = 'fill_vertical',
  FillBoth = 'fill_both',
}

export type BehaviorProps = {
  readonly fillBehavior?: FillBehavior;
  readonly fillScreen?: boolean;
  readonly lineWrap?: boolean;
  readonly overflow?: Overflow | string;
  readonly scrollable?: boolean;
};

export enum Overflow {
  Hidden = 'hidden',
  Scroll = 'scroll',
  ScrollVertical = 'scroll_x',
  ScrollHorizontal = 'scroll_y',
  ScrollBoth = 'scroll_both',
  Clip = 'clip',
  ClipVertical = 'clip_x',
  ClipHorizontal = 'clip_y',
  ClipBoth = 'clip_both',
  Visible = 'visible',
}
