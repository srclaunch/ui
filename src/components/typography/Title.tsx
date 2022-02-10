import { memo, ReactElement } from 'react';
import { Size, TextColors, TextSize, TextWeight } from '../../types';

import { Text, TextProps } from './Text';

export type TitleProps = TextProps<HTMLHeadingElement>;

export const Title = memo(
  ({
    as = 'h1',
    children,
    className = '',
    lineHeight = Size.Small,
    textSize = TextSize.Larger,
    textColor = TextColors.Title,
    textWeight = TextWeight.Most,
    ...props
  }: TitleProps): ReactElement => {
    return (
      <Text
        as={as}
        className={`${className} title`}
        inline={false}
        textColor={textColor}
        lineHeight={lineHeight}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
