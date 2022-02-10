export enum FillBehavior {
  FillHorizontal = 'fill_horizontal',
  FillVertical = 'fill_vertical',
  FillBoth = 'fill_both',
}

export type BehaviorProps<T = {}> = {
  events?: boolean;
  fillBehavior?: FillBehavior;
  fillScreen?: boolean;
  grow?: boolean;
  lineWrap?: boolean;
  overflow?: Overflow | string;
  scrollable?: boolean;
  shrink?: boolean;
} & T;

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
