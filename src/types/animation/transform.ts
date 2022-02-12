import { ScaleProps } from './scale';
import { SkewProps } from './skew';
import { TranslateProps } from './translate';

export type Transform = {
  readonly translate?: TranslateProps;
  readonly scale?: ScaleProps;
  readonly rotate?: number;
  readonly skew?: SkewProps;
};

export type TransformProps = {
  /**
   * The transform to apply to the component.
   */
  readonly transform?: Transform;
};
