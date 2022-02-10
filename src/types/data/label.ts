import { Model, ModelProps, Primitives } from '@srclaunch/types';
import { LabelProps } from '../../components/typography/Label';

export type PrimitiveLabelProps = {
  fieldName?: string;
  model?: ModelProps;
  props?: LabelProps;
  value: any;
  type: Primitives;
};
