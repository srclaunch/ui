import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { LayoutStyles } from '../../styles/layout';
import { TextStyles } from '../../styles/typography';
import {
  Align,
  Amount,
  Color,
  Overflow,
  Size,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
  WhiteSpace,
} from '../../types';
import { ContainerProps } from '../layout/Container';

export type TextProps<E = HTMLSpanElement, P = {}> = ContainerProps<
  E,
  {
    focus?: TextProps;
    hover?: TextProps;
    active?: TextProps;
  } & {
    alignText?: Align | string;
    inline?: boolean;
    lineHeight?: Amount | Size | string | number;
    overflow?: Overflow | string;
    selectable?: boolean;
    textColor?: Color | string;
    textOverflow?: TextOverflow | string;
    textSize?: TextSize | string | number;
    textWeight?: TextWeight | string;
    underline?: boolean;
    underlineColor?: Color | string;
    whiteSpace?: WhiteSpace | string;
    width?: Amount | Size | string | number;
  }
> &
  P;

export const Text = memo(
  ({
    as = 'span',
    children,
    className = '',
    grow = false,
    inline = true,
    lineHeight = Size.Default,
    selectable = true,
    textColor = TextColors.Text,
    textSize = TextSize.Default,
    width,
    ...props
  }: TextProps): ReactElement => {
    return (
      <Container
        as={as}
        className={`${className} text`}
        grow={grow}
        inline={inline}
        lineHeight={lineHeight}
        selectable={selectable}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Container>
    );
  },
);

const Container = styled.span<TextProps>`
  ${LayoutStyles};
  ${TextStyles};
`;
