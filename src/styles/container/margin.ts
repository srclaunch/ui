import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Margin } from '../../types';

export function getMarginStyles(margin?: Margin): SimpleInterpolation {
  if (!margin) return;

  const { all, bottom, left, right, top } = margin;

  return css`
    ${all &&
    css`
      margin: ${getCSSMeasurementValue(margin.all)};
    `}

    ${bottom &&
    css`
      margin-bottom: ${getCSSMeasurementValue(margin.bottom)};
    `}

    ${left &&
    css`
      margin-left: ${getCSSMeasurementValue(margin.left)};
    `}

    ${right &&
    css`
      margin-right: ${getCSSMeasurementValue(margin.right)};
    `}

    ${top &&
    css`
      margin-top: ${getCSSMeasurementValue(margin.top)};
    `}
  `;
}

export const MarginStyles = css<{
  margin?: Margin;
}>`
  ${props => getMarginStyles(props.margin)}
`;
