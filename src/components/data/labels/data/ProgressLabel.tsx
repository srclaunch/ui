import { memo, ReactElement } from 'react';

import { Label } from '../../../typography/Label';
import { ProgressMeter } from '../../../charts/ProgressMeter';

import {
  BackgroundColor,
  LabelProps,
  Size,
  TextColors,
  TextSize,
} from '../../../../types';

type ProgressLabelProps = LabelProps<
  HTMLLabelElement,
  {
    color?: BackgroundColor;
    value: number[];
  }
>;

export const ProgressLabel = memo(
  ({
    color,
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: ProgressLabelProps): ReactElement => {
    const spent = value[1];
    const total = value[2];

    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        <ProgressMeter amount={spent} backgroundColor={color} total={total} />
      </Label>
    );
  },
);
