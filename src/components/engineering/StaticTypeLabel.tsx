import { memo, ReactElement } from 'react';

import { Label, LabelProps } from '../typography/Label';

import { Sizes, TextColors, TextSize } from '../../types';

type StaticTypeLabelProps = LabelProps & {
  readonly value?: Record<string, object>;
};

export const StaticTypeLabel = memo(
  ({
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: StaticTypeLabelProps): ReactElement => {
    return (
      <Label
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
