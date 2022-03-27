import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Fill, Size } from '../../types';

export function getFillStyles(fill?: Size['fill']): SimpleInterpolation {
  if (!fill) return null;

  switch (fill) {
    case Fill.Both:
    case Fill.Horizontal:
    case Fill.Vertical:
      return css`
        flex-grow: 1;
      `;
    case Fill.None:
    default:
      return css`
        flex-grow: 0;
      `;
  }
}

export function getMaxHeightStyle(
  maxHeight?: Size['maxHeight'],
): SimpleInterpolation {
  if (!maxHeight) return null;

  return css`
    max-height: ${getCSSMeasurementValue(maxHeight)};
  `;
}

export function getMinHeightStyle(
  minHeight?: Size['minHeight'],
): SimpleInterpolation {
  if (!minHeight) return null;

  return css`
    min-height: ${getCSSMeasurementValue(minHeight)};
  `;
}

export function getHeightStyle(height?: Size['height']): SimpleInterpolation {
  if (!height) return null;

  return css`
    height: ${getCSSMeasurementValue(height)};
  `;
}

export function getMaxWidthStyle(
  maxWidth?: Size['maxWidth'],
): SimpleInterpolation {
  if (!maxWidth) return null;

  return css`
    max-width: ${getCSSMeasurementValue(maxWidth)};
  `;
}

export function getMinWidthStyle(
  minWidth?: Size['minWidth'],
): SimpleInterpolation {
  if (!minWidth) return null;

  return css`
    min-width: ${getCSSMeasurementValue(minWidth)};
  `;
}

export function getWidthStyle(width?: Size['width']): SimpleInterpolation {
  if (!width) return null;

  return css`
    width: ${getCSSMeasurementValue(width)};
  `;
}

export function getSizeStyles(size?: Size): SimpleInterpolation {
  if (!size) return null;

  const { fill, maxHeight, minHeight, maxWidth, minWidth, width, height } =
    size ?? {};

  return css`
    ${fill && getFillStyles(fill)}
    ${maxHeight && getMaxHeightStyle(maxHeight)}
    ${minHeight && getMinHeightStyle(minHeight)}
    ${height && getHeightStyle(height)}
    ${maxWidth && getMaxWidthStyle(maxWidth)}
    ${minWidth && getMinWidthStyle(minWidth)}
    ${width && getWidthStyle(width)}
  `;
}
export const SizeStyles = css<{
  size?: Size;
}>`
  ${props => getSizeStyles(props.size)}
`;
