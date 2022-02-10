import { Color } from './color';
import { DepthShadow } from './depth';

export type BoxShadowDetails = {
  blurRadius?: number;
  color?: Color;
  offsetX?: number;
  offsetY?: number;
  opacity?: number;
  spreadRadius?: number;
};

export type BoxShadow = DepthShadow | BoxShadowDetails | BoxShadowDetails[];

export type BoxShadowProps<T = {}> = {
  boxShadow?: BoxShadow;
} & T;
