import { css, SimpleInterpolation } from 'styled-components';

import { getCSSMeasurementValue } from '../../lib/css/properties';
import { BorderRadius } from '../../types';

// export function getBorderRadius(
//   borderRadius: BorderRadius
// ): string | null | undefined {
//   if (!borderRadius) return null;

//   if (typeof borderRadius === 'number') {
//     return getCSSMeasurementValue(borderRadius);
//   }

//   if (typeof borderRadius === 'object') {
//     const topLeft =
//       typeof borderRadius.topLeft === 'number'
//         ? getCSSMeasurementValue(borderRadius.topLeft)
//         : borderRadius.topLeft ?? 'initial';
//     const topRight =
//       typeof borderRadius.topRight === 'number'
//         ? getCSSMeasurementValue(borderRadius.topRight)
//         : borderRadius.topRight ?? 'initial';
//     const bottomRight =
//       typeof borderRadius.bottomRight === 'number'
//         ? getCSSMeasurementValue(borderRadius.bottomRight)
//         : borderRadius.bottomRight ?? 'initial';
//     const bottomLeft =
//       typeof borderRadius.bottomLeft === 'number'
//         ? getCSSMeasurementValue(borderRadius.bottomLeft)
//         : borderRadius.bottomLeft ?? 'initial';

//     return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
//   }

//   return borderRadius;
// }

export function getBorderRadiusStyles(
  borderRadius?: BorderRadius,
): SimpleInterpolation {
  return css`
    ${borderRadius &&
    borderRadius.all &&
    css`
      border-radius: ${getCSSMeasurementValue(borderRadius.all)};
    `};

    ${borderRadius &&
    borderRadius.bottomLeft &&
    css`
      border-bottom-left-radius: ${getCSSMeasurementValue(
        borderRadius.bottomLeft,
      )};
    `};

    ${borderRadius &&
    borderRadius.bottomRight &&
    css`
      border-bottom-right-radius: ${getCSSMeasurementValue(
        borderRadius.bottomRight,
      )};
    `};

    ${borderRadius &&
    borderRadius.topLeft &&
    css`
      border-top-left-radius: ${getCSSMeasurementValue(borderRadius.topLeft)};
    `};

    ${borderRadius &&
    borderRadius.topRight &&
    css`
      border-top-right-radius: ${getCSSMeasurementValue(borderRadius.topRight)};
    `};
  `;
}

export const BorderRadiusStyles = css<{ readonly borderRadius?: BorderRadius }>`
  ${props => getBorderRadiusStyles(props.borderRadius)};
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
