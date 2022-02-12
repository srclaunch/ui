import { memo, ReactElement } from 'react';

import { Align, Amount, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './Label';

type HeadingProps = LabelProps<HTMLHeadingElement>;

export const Heading = memo(
  ({
    as = 'h3',
    alignText = Align.Left,
    children,
    className = '',
    grow = false,
    marginBottom = Amount.More,
    textWeight = TextWeight.More,
    textColor = TextColors.Dark,
    textSize = TextSize.Large,
    ...props
  }: HeadingProps): ReactElement => {
    return (
      <Label
        alignText={alignText}
        as={as}
        className={`${className} heading`}
        grow={grow}
        marginBottom={marginBottom}
        textColor={textColor}
        textWeight={textWeight}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
