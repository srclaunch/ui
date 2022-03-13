import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../../../typography/Label';

import { Sizes, TextColors, TextSize } from '../../../../types';

type PortLabelProps = {
  value: string;
} & LabelProps;

export const PortLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: PortLabelProps): ReactElement => {
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
