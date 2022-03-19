import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Margin } from '../../types';

export function getMarginStyles(margin?: Margin): SimpleInterpolation {
  return css`
    ${margin &&
    css`
      ${margin?.all &&
      css`
        margin: ${getCSSMeasurementValue(margin.all)};
      `};

      ${margin?.bottom &&
      css`
        margin-bottom: ${getCSSMeasurementValue(margin.bottom)};
      `};

      ${margin?.left &&
      css`
        margin-left: ${getCSSMeasurementValue(margin.left)};
      `};

      ${margin?.right &&
      css`
        margin-right: ${getCSSMeasurementValue(margin.right)};
      `};

      ${margin?.top &&
      css`
        margin-top: ${getCSSMeasurementValue(margin.top)};
      `};
    `}
  `;
}
export const MarginStyles = css<{
  margin?: Margin;
}>`
  ${props => getMarginStyles(props.margin)};
`;
