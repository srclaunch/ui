import { TranslateProps } from './translate';
import { ScaleProps } from './scale';
import { RotateProps } from './rotate';
import { SkewProps } from './skew';

export type Transform = {
  translate?: TranslateProps;
  scale?: ScaleProps;
  rotate?: number;
  skew?: SkewProps;
};

export type TransformProps<T = {}> = {
  /**
   * The transform to apply to the component.
   */
  transform?: Transform;
} & T;
