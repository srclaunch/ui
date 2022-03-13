import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../../../../typography/Label';

import { Sizes, TextColors, TextSize } from '../../../../../types';

type VatIDNumberLabelProps = {
  value: number;
} & LabelProps;

export const VatIDNumberLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: VatIDNumberLabelProps): ReactElement => {
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
