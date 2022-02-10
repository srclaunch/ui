import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Label } from '../../../typography/Label';
import { LabelProps } from '../../../../types';

type PercentLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: Primitives.Percent;
  }
>;

export const PercentLabel = memo(
  ({ value, ...props }: PercentLabelProps): ReactElement => {
    return <Label {...props}>{value}%</Label>;
  },
);
