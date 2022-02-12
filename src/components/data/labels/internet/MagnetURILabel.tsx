import { memo, ReactElement } from 'react';

import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';

type MagnetURILabelProps = {
  value: string;
} & LabelProps;

export const MagnetURILabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: MagnetURILabelProps): ReactElement => {
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
