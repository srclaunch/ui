import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
export function getBorderRadius(borderRadius) {
    if (!borderRadius)
        return null;
    if (typeof borderRadius === 'number') {
        return getCSSMeasurementValue(borderRadius);
    }
    if (typeof borderRadius === 'object') {
        const topLeft = typeof borderRadius.topLeft === 'number'
            ? getCSSMeasurementValue(borderRadius.topLeft)
            : borderRadius.topLeft ?? 'initial';
        const topRight = typeof borderRadius.topRight === 'number'
            ? getCSSMeasurementValue(borderRadius.topRight)
            : borderRadius.topRight ?? 'initial';
        const bottomRight = typeof borderRadius.bottomRight === 'number'
            ? getCSSMeasurementValue(borderRadius.bottomRight)
            : borderRadius.bottomRight ?? 'initial';
        const bottomLeft = typeof borderRadius.bottomLeft === 'number'
            ? getCSSMeasurementValue(borderRadius.bottomLeft)
            : borderRadius.bottomLeft ?? 'initial';
        return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }
    return borderRadius;
}
export const BorderRadiusStyles = css `
  ${props => props.borderRadius &&
    css `
      border-radius: ${getBorderRadius(props.borderRadius)};
    `}

  ${props => props.active &&
    css `
      &:active,
      &.active {
        border-radius: ${getBorderRadius(props.active?.borderRadius)};
      }
    `}

  ${props => props.focus &&
    css `
      &:focus {
        border-radius: ${getBorderRadius(props.focus?.borderRadius)};
      }
    `}

  ${props => props.hover &&
    css `
      &:hover {
        border-radius: ${getBorderRadius(props.hover?.borderRadius)};
      }
    `}
`;
//# sourceMappingURL=border-radius.js.map