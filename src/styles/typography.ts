import { css } from 'styled-components';
import { TextProps } from '../components/typography/Text';

import { TextColors, TextSize } from '../types';

export const TextStyles = css<TextProps>`
  color: rgb(${props => props.textColor ?? TextColors.Default});
  display: inline-block;
  font-size: ${props => props.textSize ?? TextSize.Default};
  transition: color 0.15s ease-in;

  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `};

  ${props =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};

  ${props =>
    props.textDecoration?.color &&
    css`
      text-decoration-color: ${props.textDecoration?.color};
    `};

  ${props =>
    props.textDecoration?.line &&
    css`
      text-decoration-line: ${props.textDecoration?.line};
    `};

  ${props =>
    props.textDecoration?.style &&
    css`
      text-decoration-style: ${props.textDecoration?.style};
    `};

  ${props =>
    props.textDecoration?.thickness &&
    css`
      text-decoration-thickness: ${props.textDecoration?.thickness};
    `};

  ${props =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `};

  ${props =>
    props.textOverflow &&
    css`
      text-overflow: ${props.textOverflow};
    `};

  ${props =>
    !props.selectable &&
    css`
      user-select: none;
    `};

  ${props =>
    props.textWeight &&
    css`
      font-weight: ${props.textWeight};
    `};
`;
