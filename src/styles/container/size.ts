import { css, SimpleInterpolation } from 'styled-components';

import { Alignment, AlignHorizontal, AlignVertical, Size } from '../../types';

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
export const SizeStyles = css<{
  alignment?: Alignment;
  size?: Size;
}>`
  ${props =>
    props.size?.height &&
    css`
      height: ${props.size.height}px;
    `};

  ${props =>
    props.size?.maxHeight &&
    css`
      max-height: ${props.size.maxHeight}px;
    `};

  ${props =>
    props.size?.minHeight &&
    css`
      min-height: ${props.size.minHeight}px;
    `};

  ${props =>
    props.size?.maxWidth &&
    css`
      max-width: ${props.size.maxWidth}px;
    `};

  ${props =>
    props.size?.minWidth &&
    css`
      min-width: ${props.size.minWidth}px;
    `};

  ${props =>
    props.size?.width &&
    css`
      width: ${props.size.width}px;
    `};
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
