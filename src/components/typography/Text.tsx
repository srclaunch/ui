import { PropsWithChildren, ReactElement, memo } from 'react';
import styled from 'styled-components';
import {
  Amount,
  CommonComponentProps,
  Cursor,
  States,
  Sizes,
  TextAlign,
  TextColor,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { getTextStyles } from '../../styles/typography';
import {
  TextDecorationLine,
  TextDecorationStyle,
} from '../../types/typography';
import { getTextStatesStyles } from '../../styles/typography/states';

export type TextProps = PropsWithChildren<
  CommonComponentProps & {
    readonly bold?: boolean;
    readonly cursor?: Cursor;
    readonly italic?: boolean;
    readonly lineHeight?: string | number;
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
  }
> & {
  readonly states?: States<TextProps>;
};

const Wrapper = styled.span<TextProps>`
  ${props => getTextStyles(props)};
  ${props => getTextStatesStyles(props)};
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
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    ...props
  }: TextProps): ReactElement => {
    return (
      <Wrapper
        as={as}
        className={`${className} text`}
        lineHeight={lineHeight}
        lineWrap={lineWrap}
        selectable={selectable}
        textAlign={textAlign}
        textColor={textColor}
        textOverflow={textOverflow}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);
