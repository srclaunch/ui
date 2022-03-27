import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Padding } from '../../types';

export function getPaddingStyles(padding?: Padding): SimpleInterpolation {
  if (!padding) return;

  const { all, bottom, left, right, top } = padding;

  return css`
    ${all &&
    css`
      padding: ${getCSSMeasurementValue(padding.all)};
    `}

    ${bottom &&
    css`
      padding-bottom: ${getCSSMeasurementValue(padding.bottom)};
    `}

    ${left &&
    css`
      padding-left: ${getCSSMeasurementValue(padding.left)};
    `}

    ${right &&
    css`
      padding-right: ${getCSSMeasurementValue(padding.right)};
    `}

    ${top &&
    css`
      padding-top: ${getCSSMeasurementValue(padding.top)};
    `}
  `;
}

export const PaddingStyles = css<{
  padding?: Padding;
}>`
  ${props => getPaddingStyles(props.padding)}
`;
