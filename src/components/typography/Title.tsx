import { memo, ReactElement } from 'react';
import { Amount, Sizes, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './Label';

import { Text, TextProps } from './Text';

export type TitleProps = LabelProps;

export const Title = memo(
  ({
    as = 'h1',
    children,
    className = '',
    lineHeight = Sizes.Small,
    textSize = TextSize.Larger,
    textColor = TextColors.Title,
    textWeight = TextWeight.Most,
    ...props
  }: TitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        textColor={textColor}
        lineHeight={lineHeight}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
