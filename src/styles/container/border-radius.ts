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

export function getBorderRadiusValue(
  borderRadius?: BorderRadius,
): SimpleInterpolation {
  if (typeof borderRadius === 'number') {
    return `${borderRadius}px`;
  }

  if (typeof borderRadius === 'string') {
    return borderRadius;
  }

  // TODO: We should return border-radius: {props.all}
  // But also continue and add the rest of the directional
  // border-radius properties
  if (typeof borderRadius === 'object') {
    if (borderRadius.all) {
      const all =
        typeof borderRadius.all === 'number'
          ? getCSSMeasurementValue(borderRadius.all)
          : borderRadius.all ?? 'initial';

      return all;
    }

    const topLeft =
      typeof borderRadius.topLeft === 'number'
        ? getCSSMeasurementValue(borderRadius.topLeft)
        : borderRadius.topLeft ?? 'initial';
    const topRight =
      typeof borderRadius.topRight === 'number'
        ? getCSSMeasurementValue(borderRadius.topRight)
        : borderRadius.topRight ?? 'initial';
    const bottomRight =
      typeof borderRadius.bottomRight === 'number'
        ? getCSSMeasurementValue(borderRadius.bottomRight)
        : borderRadius.bottomRight ?? 'initial';
    const bottomLeft =
      typeof borderRadius.bottomLeft === 'number'
        ? getCSSMeasurementValue(borderRadius.bottomLeft)
        : borderRadius.bottomLeft ?? 'initial';

    return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
  }
}

export const BorderRadiusStyles = css<{ readonly borderRadius?: BorderRadius }>`
  ${props =>
    props.borderRadius &&
    css`
      border-radius: ${getBorderRadiusValue(props.borderRadius)};
    `};
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
