import { memo, ReactElement } from 'react';

import { Size, TextColors, TextSize } from '../../types';
import { Label, LabelProps } from './Label';

type SmallProps = LabelProps;

export const Small = memo(
  ({
    as = 'small',
    className = '',
    children,
    lineHeight = Size.Small,
    textColor = TextColors.Light,
    textSize = TextSize.Small,
    ...props
  }: SmallProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} small`}
        textColor={textColor}
        lineHeight={lineHeight}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
