import { Size } from './size';

export type DimensionValue = Size | string | number;

export type HeightProps = {
  readonly height?: DimensionValue;
  readonly maxHeight?: DimensionValue;
  readonly minHeight?: DimensionValue;
};

export type WidthProps = {
  readonly maxWidth?: DimensionValue;
  readonly minWidth?: DimensionValue;
  readonly width?: DimensionValue;
};
