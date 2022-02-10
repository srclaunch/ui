import { css } from 'styled-components';
import { Align, TextColors } from '../types/index';
const getLineHeight = (lineHeight) => {
    if (typeof lineHeight === 'number') {
        return `${lineHeight}px`;
    }
    return lineHeight;
};
export const getTextAlignmentFromAlign = (align) => {
    switch (align) {
        case Align.Center:
            return 'center';
        case Align.Justify:
            return 'justify';
        case Align.Left:
            return 'left';
        case Align.Right:
            return 'right';
        default:
            return align ?? 'left';
    }
};
export const TextStyles = css `
  color: ${props => props.textColor === TextColors.Inherit
    ? TextColors.Inherit
    : `rgb(${props.textColor ?? TextColors.Default})`};
  cursor: inherit;
  display: ${props => (props.inline ? 'inline' : 'flex')};
  font-size: ${props => props.textSize};
  font-weight: ${props => props.textWeight};
  line-height: ${props => getLineHeight(props.lineHeight)};
  text-align: ${props => getTextAlignmentFromAlign(props.alignText)};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props => props.underlineColor
    ? props.underlineColor
    : props.textColor === TextColors.Inherit
        ? TextColors.Inherit
        : `rgb(${props.textColor ?? TextColors.Default})`};
  transition: color 0.15s ease-in;

  ${props => props.overflow &&
    css `
      overflow: ${props.overflow};
    `};

  ${props => props.textOverflow &&
    css `
      text-overflow: ${props.textOverflow};
    `};

  ${props => !props.selectable &&
    css `
      user-select: none;
    `};

  ${props => props.whiteSpace &&
    css `
      white-space: ${props.whiteSpace};
    `};
`;
//# sourceMappingURL=typography.js.map