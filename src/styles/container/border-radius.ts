import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurementValue } from '../../lib/css/properties';
import { BorderRadius } from '../../types';

export function getBorderRadiusStyles(
  borderRadius?: BorderRadius,
): SimpleInterpolation {
  if (!borderRadius) return;

  const { all, bottomLeft, bottomRight, topLeft, topRight } = borderRadius;

  return css`
    ${all &&
    css`
      border-radius: ${getCSSMeasurementValue(all)};
    `}

    ${bottomLeft &&
    css`
      border-bottom-left-radius: ${getCSSMeasurementValue(bottomLeft)};
    `}

    ${bottomRight &&
    css`
      border-bottom-right-radius: ${getCSSMeasurementValue(bottomRight)};
    `}

    ${topLeft &&
    css`
      border-top-left-radius: ${getCSSMeasurementValue(topLeft)};
    `}

    ${topRight &&
    css`
      border-top-right-radius: ${getCSSMeasurementValue(topRight)};
    `}
  `;
}

export const BorderRadiusStyles = css<{ readonly borderRadius?: BorderRadius }>`
  ${props => getBorderRadiusStyles(props.borderRadius)}
`;

// ${props =>
//   props.active &&
//   css`
//     &:active,
//     &.active {
//       border-radius: ${getBorderRadius(props.active?.borderRadius)};
//     }
//   `}

// ${props =>
//   props.focus &&
//   css`
//     &:focus {
//       border-radius: ${getBorderRadius(props.focus?.borderRadius)};
//     }
//   `}

// ${props =>
//   props.hover &&
//   css`
//     &:hover {
//       border-radius: ${getBorderRadius(props.hover?.borderRadius)};
//     }
//   `}
