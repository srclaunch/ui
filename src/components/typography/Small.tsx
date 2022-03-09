import { memo, ReactElement } from 'react';

import { Orientation, Size, TextColors, TextSize } from '../../types';
import { Label, LabelProps } from './Label';

type SmallProps = LabelProps;

export const Small = memo(
  ({
    as = 'small',
    className = '',
    children,
    grow = false,
    orientation = Orientation.Vertical,
    lineHeight = Size.Small,
    textColor = TextColors.Light,
    textSize = TextSize.Small,
    ...props
  }: SmallProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} small`}
        grow={grow}
        textColor={textColor}
        lineHeight={lineHeight}
        orientation={orientation}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
