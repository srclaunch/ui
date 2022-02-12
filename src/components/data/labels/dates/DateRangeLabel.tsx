import { memo, ReactElement } from 'react';

import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';

type DateRangeLabelProps = {
  value: string;
} & LabelProps;

export const DateRangeLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DateRangeLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {value}
      </Label>
    );
  },
);
