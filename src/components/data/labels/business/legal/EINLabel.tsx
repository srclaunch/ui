import { memo, ReactElement } from 'react';

import { Label } from '../../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../../types';

type EINLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: string;
  }
>;

export const EINLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: EINLabelProps): ReactElement => {
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
