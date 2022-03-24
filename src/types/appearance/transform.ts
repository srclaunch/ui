export enum TransformOrigin {
  TopLeft = 'top left',
  TopRight = 'top right',
  Top = 'top',
  BottomLeft = 'bottom left',
  BottomRight = 'bottom right',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export type Rotate = {
  readonly angle: number | string;
  readonly x?: number | string;
  readonly y?: number | string;
  readonly z?: number | string;
};

export type Scale = {
  readonly x?: number | string;
  readonly y?: number | string;
  readonly z?: number | string;
};

export type Skew = {
  readonly x?: number | string;
  readonly y?: number | string;
};

export type Translate = {
  readonly x?: number | string;
  readonly y?: number | string;
};

export type Transform = {
  readonly origin?: TransformOrigin | number | string;
  readonly rotate?: Rotate;
  readonly scale?: Scale;
  readonly skew?: Skew;
  readonly translate?: Translate;
};
