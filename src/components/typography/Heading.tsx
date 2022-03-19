import { memo, ReactElement } from 'react';

import { Amount, Sizes, TextColors, TextSize, TextWeight } from '../../types';
import { ContainerProps } from '../layout/Container';
import { Label, LabelProps } from './Label';

type HeadingProps = LabelProps;

export const Heading = memo(
  ({
    as = 'h3',
    children,
    className = '',
    lineHeight = Sizes.Large,
    textWeight = TextWeight.More,
    textColor = TextColors.Dark,
    textSize = TextSize.Large,
    ...props
  }: HeadingProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} heading`}
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
