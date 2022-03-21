import { css, SimpleInterpolation } from 'styled-components';
import { TextProps } from '../../components/typography/Text';
import {
  getCSSColorValue,
  getCSSMeasurementValue,
} from '../../lib/css/properties';

import { Sizes, TextColors, TextSize } from '../../types';

/*
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
    */

export const getTextStyles = (props: TextProps): SimpleInterpolation => {
  const {
    bold,
    cursor,
    italic,
    lineHeight,
    lineWrap,
    textOverflow,
    selectable,
    textAlign,
    textColor,
    textDecoration,
    textSize,
    textWeight,
  } = props;

  return css`
    color: ${getCSSColorValue(textColor ?? TextColors.Default)};
    font-size: ${getCSSMeasurementValue(textSize ?? TextSize.Default)};
    line-height: ${getCSSMeasurementValue(lineHeight ?? Sizes.Default)};

    ${bold &&
    css`
      font-weight: bold;
    `};

    ${cursor &&
    css`
      cursor: ${cursor};
    `};

    ${italic &&
    css`
      font-style: italic;
    `};

    ${lineWrap &&
    css`
      white-space: nowrap;
    `};

    ${selectable &&
    css`
      user-select: text;
    `};

    ${textAlign &&
    css`
      text-align: ${textAlign};
    `};

    ${textDecoration &&
    css`
      text-decoration: ${textDecoration.line ? textDecoration.line : 'none'};
      text-decoration-color: ${getCSSColorValue(textDecoration.color)};
      text-decoration-style: ${textDecoration.style
        ? textDecoration.style
        : 'solid'};
      text-decoration-thickness: ${getCSSMeasurementValue(
        textDecoration.thickness,
      )};
    `};

    ${textOverflow &&
    css`
      text-overflow: ${textOverflow};
    `};

    ${textWeight &&
    css`
      font-weight: ${textWeight};
    `};

    transition: color 0.13s ease-in-out, font-size 0.13s ease-in-out,
      font-weight 0.13s ease-in-out, text-decoration 0.13s ease-in-out,
      text-decoration-color 0.13s ease-in-out,
      text-decoration-style 0.13s ease-in-out,
      text-decoration-thickness 0.13s ease-in-out;
  `;
};

export const TextStyles = css<TextProps>`
  ${props => getTextStyles(props)};
`;
