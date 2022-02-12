import { Model, ModelProps, Primitives } from '@srclaunch/types';

import { LabelProps } from '../../components/typography/Label';

export type PrimitiveLabelProps = {
  readonly fieldName?: string;
  readonly model?: ModelProps;
  readonly props?: LabelProps;
  readonly value: any;
  readonly type: Primitives;
};
