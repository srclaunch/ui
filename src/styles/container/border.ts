import { css, SimpleInterpolation } from 'styled-components';
import {
  getCSSColorValue,
  getCSSMeasurementValue,
} from '../../lib/css/properties';

import { Border, BorderColors, BorderStyle, Color } from '../../types';

export function getBorderDirectionProperty(
  direction: 'all' | 'top' | 'right' | 'bottom' | 'left',
) {
  return `border${direction === 'all' ? '' : `-${direction}`}`;
}

export function getBorderColorStyle(
  color: Color,
  direction: 'all' | 'top' | 'right' | 'bottom' | 'left',
): SimpleInterpolation {
  return css`
    ${getBorderDirectionProperty(direction)}-color: ${getCSSColorValue(
      color ?? BorderColors.Default,
    )};
  `;
}

export function getBorderStyleStyle(
  style: BorderStyle,
  direction: 'all' | 'top' | 'right' | 'bottom' | 'left',
): SimpleInterpolation {
  return css`
    ${getBorderDirectionProperty(direction)}-style: ${style};
  `;
}

export function getBorderWidthStyle(
  width: string | number,
  direction: 'all' | 'top' | 'right' | 'bottom' | 'left',
) {
  return css`
    ${getBorderDirectionProperty(direction)}-width: ${getCSSMeasurementValue(
      width ?? 0,
    )};
  `;
}

export function getBorderStyle(
  border: Border['all'],
  direction?: 'all' | 'bottom' | 'left' | 'right' | 'top',
): SimpleInterpolation {
  if (!border || !direction) return;

  return css`
    ${border.color && getBorderColorStyle(border.color, direction)}
    ${border.style && getBorderStyleStyle(border.style, direction)}
    ${border.width !== undefined &&
    getBorderWidthStyle(border.width, direction)}
  `;
}

export function getBorderStyles(border?: Border): SimpleInterpolation {
  return css`
    ${border?.all && getBorderStyle(border.all, 'all')}
    ${border?.bottom && getBorderStyle(border.bottom, 'bottom')}
    ${border?.left && getBorderStyle(border.left, 'left')}
    ${border?.right && getBorderStyle(border.right, 'right')}
    ${border?.top && getBorderStyle(border.top, 'top')}
  `;
}

export const BorderStyles = css<{ readonly border?: Border }>`
  ${props => getBorderStyles(props.border)}
`;
