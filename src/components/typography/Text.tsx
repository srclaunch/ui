import { PropsWithChildren, ReactElement, memo } from 'react';
import styled from 'styled-components';
import {
  Amount,
  CommonComponentProps,
  Cursor,
  Size,
  Sizes,
  TextAlign,
  TextColor,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { TextStyles } from '../../styles/typography';
import {
  TextDecorationLine,
  TextDecorationStyle,
} from '../../types/typography/text';

export type TextProps<E = HTMLSpanElement> = PropsWithChildren<{
  readonly bold?: boolean;
  readonly cursor?: Cursor;
  readonly italic?: boolean;
  readonly lineHeight?: Size | string | number;
  readonly lineWrap?: boolean;
  readonly textOverflow?: TextOverflow | string;
  readonly selectable?: boolean;
  readonly textAlign?: TextAlign | string;
  readonly textColor?: TextColor;
  readonly textDecoration?: {
    readonly color?: TextColor | string;
    readonly line?: TextDecorationLine | TextDecorationLine[];
    readonly style?: TextDecorationStyle;
    readonly thickness?: Amount | number;
  };
  readonly textSize?: TextSize | string | number;
  readonly textWeight?: TextWeight | string;
}> &
  CommonComponentProps<E> & {
    readonly focus?: TextProps;
    readonly hover?: TextProps;
    readonly active?: TextProps;
  };

const Container = styled.span<TextProps>`
  ${TextStyles};
`;

export const Text = memo(
  ({
    as = 'span',
    children,
    className = '',
    lineHeight = Sizes.Default,
    lineWrap = true,
    selectable = true,
    textAlign = TextAlign.Left,
    textColor = TextColors.Default,
    textSize = TextSize.Default,
    textOverflow = TextOverflow.Ellipsis,
    textWeight = TextWeight.Default,
    ...props
  }: TextProps): ReactElement => {
    return (
      <Container
        textAlign={textAlign}
        textColor={textColor}
        as={as}
        className={`${className} text`}
        selectable={selectable}
        lineHeight={lineHeight}
        textOverflow={textOverflow}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
