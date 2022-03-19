import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Padding } from '../../types';

export function getPaddingStyles(padding?: Padding): SimpleInterpolation {
  return css`
    ${padding?.all &&
    css`
      padding: ${getCSSMeasurementValue(padding.all)};
    `};

    ${padding?.bottom &&
    css`
      padding-bottom: ${getCSSMeasurementValue(padding.bottom)};
    `};

    ${padding?.left &&
    css`
      padding-left: ${getCSSMeasurementValue(padding.left)};
    `};

    ${padding?.right &&
    css`
      padding-right: ${getCSSMeasurementValue(padding.right)};
    `};

    ${padding?.top &&
    css`
      padding-top: ${getCSSMeasurementValue(padding.top)};
    `};
  `;
}
export const PaddingStyles = css<{
  padding?: Padding;
}>`
  ${props => getPaddingStyles(props.padding)}
`;
