import { css, SimpleInterpolation } from 'styled-components';

import { Border, BorderColors } from '../../types';

// const isBorderStyleProps = (
//   border: BorderDirectionProps | BorderStyleProps,
// ): border is BorderStyleProps => {
//   return border.hasOwnProperty('color');
// };

export function getBorderValue(border?: Border): SimpleInterpolation {
  if (!border) {
    return;
  }

  let borderValue = '';

  if (border.all) {
    borderValue += `border: ${border.all.width ?? 1}px ${
      border.all.style ?? 'solid'
    } ${border.all.color ? `rgb(${border.all.color})` : BorderColors.Default}`;
  }

  if (border.bottom) {
    borderValue += `border-bottom: ${border.bottom.width ?? 1}px ${
      border.bottom.style ?? 'solid'
    } ${
      border.bottom.color ? `rgb(${border.bottom.color})` : BorderColors.Default
    }`;
  }

  if (border.left) {
    borderValue += `border-left: ${border.left.width ?? 1}px ${
      border.left.style ?? 'solid'
    } ${
      border.left.color ? `rgb(${border.left.color})` : BorderColors.Default
    }`;
  }

  if (border.right) {
    borderValue += `border-right: ${border.right.width ?? 1}px ${
      border.right.style ?? 'solid'
    } ${
      border.right.color ? `rgb(${border.right.color})` : BorderColors.Default
    }`;
  }

  if (border.top) {
    borderValue += `border-top: ${border.top.width ?? 1}px ${
      border.top.style ?? 'solid'
    } ${border.top.color ? `rgb(${border.top.color})` : BorderColors.Default}`;
  }

  return css`
    ${borderValue}
  `;
}

export const BorderStyles = css<{ readonly border?: Border }>`
  ${props =>
    props.border &&
    css`
      ${getBorderValue(props.border)};
    `};
`;
