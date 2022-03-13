import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Label, LabelProps } from '../../../typography/Label';

type PercentLabelProps = {
  value: number;
} & LabelProps;

export const PercentLabel = memo(
  ({ value, ...props }: PercentLabelProps): ReactElement => {
    return <Label {...props}>{value}%</Label>;
  },
);
