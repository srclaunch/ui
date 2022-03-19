import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../../../typography/Label';

import { Sizes, TextColors, TextSize } from '../../../../types';

type IPAddressLabelProps = LabelProps & {
  value: string;
};

export const IPAddressLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: IPAddressLabelProps): ReactElement => {
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
