import { Color } from './color';
import { DepthShadow } from './depth';

export type BoxShadowDetails = {
  readonly blurRadius?: number;
  readonly color?: Color;
  readonly offsetX?: number;
  readonly offsetY?: number;
  readonly opacity?: number;
  readonly spreadRadius?: number;
};

export type BoxShadow =
  | DepthShadow
  | BoxShadowDetails
  | readonly BoxShadowDetails[];

export type BoxShadowProps = {
  readonly boxShadow?: BoxShadow;
};
