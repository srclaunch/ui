import { memo, ReactElement } from 'react';

import { Label } from '../../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../../types';

type EANLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: string;
  }
>;

export const EANLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: EANLabelProps): ReactElement => {
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
