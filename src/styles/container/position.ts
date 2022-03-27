import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Overflow, Position } from '../../types';

export function getPositionStyles(position?: Position): SimpleInterpolation {
  const { behavior, bottom, left, right, top } = position || {};

  return css`
    position: relative;

    ${behavior &&
    css`
      position: ${behavior};
    `}

    ${(bottom || bottom === 0) &&
    css`
      bottom: ${getCSSMeasurementValue(bottom)};
    `}

    ${(left || left === 0) &&
    css`
      left: ${getCSSMeasurementValue(left)};
    `}

    ${(right || right === 0) &&
    css`
      right: ${getCSSMeasurementValue(right)};
    `}

    ${(top || top === 0) &&
    css`
      top: ${getCSSMeasurementValue(top)};
    `}
  `;
}

export const PositionStyles = css<{
  position?: Position;
}>`
  ${props => getPositionStyles(props.position)}
`;
