import { Size } from './size';

export type DimensionValue = Size | string | number;

export type HeightProps<P = {}> = {
  height?: DimensionValue;
  maxHeight?: DimensionValue;
  minHeight?: DimensionValue;
} & P;

export type WidthProps<P = {}> = {
  maxWidth?: DimensionValue;
  minWidth?: DimensionValue;
  width?: DimensionValue;
} & P;

export type DimensionProps<P = {}> = HeightProps<WidthProps<{ size?: Size }>> &
  P;
