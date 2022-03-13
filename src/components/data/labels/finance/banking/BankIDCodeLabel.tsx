import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../../../../typography/Label';

import { Sizes, TextColors, TextSize } from '../../../../../types';

type BankIDCodeLabelProps = {
  value: string;
} & LabelProps;

export const BankIDCodeLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: BankIDCodeLabelProps): ReactElement => {
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
