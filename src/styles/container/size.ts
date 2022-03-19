import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Alignment, Size } from '../../types';

// function getFlexGrowStyle(
//   alignment?: Alignment,
//   size?: Size,
// ): SimpleInterpolation {
//   const { maxHeight, minHeight, maxWidth, minWidth, width, height } =
//     size ?? {};

// if (maxHeight || minHeight || height) {
//   return css`
//     flex-grow: 0;
//   `;
// }

// if (maxWidth || minWidth || width) {

// }
// }

export function getSizeStyles(size?: Size): SimpleInterpolation {
  const { maxHeight, minHeight, maxWidth, minWidth, width, height } =
    size ?? {};

  return css`
    ${maxHeight &&
    css`
      max-height: ${getCSSMeasurementValue(maxHeight)};
    `};

    ${minHeight &&
    css`
      min-height: ${getCSSMeasurementValue(minHeight)};
    `};

    ${height &&
    css`
      height: ${getCSSMeasurementValue(height)};
    `};

    ${maxWidth &&
    css`
      max-width: ${getCSSMeasurementValue(maxWidth)};
    `};

    ${minWidth &&
    css`
      min-width: ${getCSSMeasurementValue(minWidth)};
    `};

    ${width &&
    css`
      width: ${getCSSMeasurementValue(width)};
    `};
  `;
}
export const SizeStyles = css<{
  size?: Size;
}>`
  ${props => getSizeStyles(props.size)};
`;

// const getDimension = (dimension: DimensionValue) => {
//   if (typeof dimension === 'number') {
//     return `${dimension}px`;
//   }

//   return dimension;
// };

// export const DimensionStyles = css<HeightProps & SizeProps & WidthProps>`
//   ${props =>
//     props.height &&
//     css`
//       max-height: ${getDimension(props.height)};
//       min-height: ${getDimension(props.height)};
//       height: ${getDimension(props.height)};
//     `};

//   ${props =>
//     props.width &&
//     css`
//       max-width: ${getDimension(props.width)};
//       min-width: ${getDimension(props.width)};
//       width: ${getDimension(props.width)};
//     `};

//   ${props =>
//     props.maxHeight &&
//     css`
//       max-height: ${getDimension(props.maxHeight)};
//     `};

//   ${props =>
//     props.maxWidth &&
//     css`
//       max-width: ${getDimension(props.maxWidth)};
//     `};

//   ${props =>
//     props.minHeight &&
//     css`
//       min-height: ${getDimension(props.minHeight)};
//     `};

//   ${props =>
//     props.minWidth &&
//     css`
//       min-width: ${getDimension(props.minWidth)};
//     `};

//   ${props =>
//     props.size &&
//     css`
//       max-height: ${props.size};
//       min-height: ${props.size};
//       height: ${props.size};
//       max-width: ${props.size};
//       min-width: ${props.size};
//       width: ${props.size};
//     `};
// `;
