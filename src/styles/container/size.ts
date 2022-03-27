import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Size } from '../../types';

export function getSizeStyles(size?: Size): SimpleInterpolation {
  const { maxHeight, minHeight, maxWidth, minWidth, width, height } =
    size ?? {};

  return css`
    ${maxHeight &&
    css`
      max-height: ${getCSSMeasurementValue(maxHeight)};
    `}

    ${minHeight &&
    css`
      min-height: ${getCSSMeasurementValue(minHeight)};
    `}

    ${height &&
    css`
      height: ${getCSSMeasurementValue(height)};
    `}

    ${maxWidth &&
    css`
      max-width: ${getCSSMeasurementValue(maxWidth)};
    `}

    ${minWidth &&
    css`
      min-width: ${getCSSMeasurementValue(minWidth)};
    `}

    ${width &&
    css`
      width: ${getCSSMeasurementValue(width)};
    `}
  `;
}
export const SizeStyles = css<{
  size?: Size;
}>`
  ${props => getSizeStyles(props.size)}
`;
