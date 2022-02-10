import { memo, ReactElement } from 'react';

import { Text } from './Text';

import {
  Align,
  Amount,
  ContainerProps,
  TextColors,
  TextProps,
  TextSize,
  TextWeight,
} from '../../types';

import { Container } from '../layout/Container';

type HeadingProps = ContainerProps<
  HTMLHeadingElement,
  TextProps<HTMLHeadElement>
>;

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
      <Container
        as={as}
        className={`${className} heading`}
        grow={grow}
        marginBottom={marginBottom}
        {...props}
      >
        <Text
          alignText={alignText}
          textColor={textColor}
          textWeight={textWeight}
          textSize={textSize}
          {...props}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
