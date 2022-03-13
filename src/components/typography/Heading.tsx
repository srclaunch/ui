import { memo, ReactElement } from 'react';

import { Amount, TextColors, TextSize, TextWeight } from '../../types';
import { ContainerProps } from '../layout/Container';
import { Text, TextProps } from './Text';

type HeadingProps = ContainerProps<HTMLHeadingElement> & TextProps;

export const Heading = memo(
  ({
    as = 'h3',
    children,
    className = '',
    textWeight = TextWeight.More,
    textColor = TextColors.Dark,
    textSize = TextSize.Large,
    ...props
  }: HeadingProps): ReactElement => {
    return (
      <Text
        as={as}
        className={`${className} heading`}
        textColor={textColor}
        textWeight={textWeight}
        textSize={textSize}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
