import { css, SimpleInterpolation } from 'styled-components';
import {
  getCSSColorValue,
  getCSSMeasurementValue,
} from '../../lib/css/properties';

import { Border, BorderColors } from '../../types';

// const isBorderStyleProps = (
//   border: BorderDirectionProps | BorderStyleProps,
// ): border is BorderStyleProps => {
//   return border.hasOwnProperty('color');
// };

export function getBorderStyles(border?: Border): SimpleInterpolation {
  return css`
    ${border?.all &&
    css`
      border: ${getCSSMeasurementValue(border.all.width ?? 0)}
        ${border.all.style ?? 'solid'}
        ${border.all.color
          ? getCSSColorValue(border.all.color)
          : BorderColors.Default};
    `};

    ${border?.bottom &&
    css`
      border-bottom: ${getCSSMeasurementValue(
          border.bottom.width !== undefined ? border.bottom.width : 1,
        )}
        ${border.bottom.style ?? 'solid'}
        ${border.bottom.color
          ? getCSSColorValue(border.bottom.color)
          : BorderColors.Default};
    `};

    ${border?.left &&
    css`
      border-left: ${getCSSMeasurementValue(
          border.left.width !== undefined ? border.left.width : 1,
        )}
        ${border.left.style ?? 'solid'}
        ${border.left.color
          ? getCSSColorValue(border.left.color)
          : BorderColors.Default};
    `};

    ${border?.right &&
    css`
      border-right: ${getCSSMeasurementValue(
          border.right.width !== undefined ? border.right.width : 1,
        )}
        ${border.right.style ?? 'solid'}
        ${border.right.color
          ? getCSSColorValue(border.right.color)
          : BorderColors.Default};
    `};

    ${border?.top &&
    css`
      border-top: ${getCSSMeasurementValue(
          border.top.width !== undefined ? border.top.width : 1,
        )}
        ${border.top.style ?? 'solid'}
        ${border.top.color
          ? getCSSColorValue(border.top.color)
          : BorderColors.Default};
    `};
  `;
}

export const BorderStyles = css<{ readonly border?: Border }>`
  ${props => getBorderStyles(props.border)};
`;
