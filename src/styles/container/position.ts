import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Position } from '../../types';

export function getPositionStyles(position?: Position): SimpleInterpolation {
  return css`
    position: relative;

    ${position?.behavior &&
    css`
      position: ${position.behavior};
    `};

    ${(position?.bottom || position?.bottom === 0) &&
    css`
      bottom: ${getCSSMeasurementValue(position.bottom)};
    `};

    ${(position?.left || position?.left === 0) &&
    css`
      left: ${getCSSMeasurementValue(position.left)};
    `};

    ${(position?.right || position?.right === 0) &&
    css`
      right: ${getCSSMeasurementValue(position.right)};
    `};

    ${(position?.top || position?.top === 0) &&
    css`
      top: ${getCSSMeasurementValue(position.top)};
    `};
  `;
}

export const PositionStyles = css<{
  position?: Position;
}>`
  ${props => getPositionStyles(props.position)};
`;
