import { css } from 'styled-components';
const getDimension = (dimension) => {
    if (typeof dimension === 'number') {
        return `${dimension}px`;
    }
    return dimension;
};
export const DimensionStyles = css `
  ${props => props.maxHeight &&
    css `
      max-height: ${getDimension(props.maxHeight)};
    `};

  ${props => props.maxWidth &&
    css `
      max-width: ${getDimension(props.maxWidth)};
    `};

  ${props => props.minHeight &&
    css `
      /* flex-basis: ${getDimension(props.minHeight)}; */
      min-height: ${getDimension(props.minHeight)};
    `};

  ${props => props.minWidth &&
    css `
      /* flex-basis: ${getDimension(props.minWidth)}; */
      min-width: ${getDimension(props.minWidth)};
    `};

  ${props => props.height &&
    css `
      /* flex-basis: ${getDimension(props.height)}; */
      height: ${getDimension(props.height)};
      max-height: ${getDimension(props.height)};
      min-height: ${getDimension(props.height)};
    `};

  ${props => props.width &&
    css `
      /* flex-basis: ${getDimension(props.width)}; */
      width: ${getDimension(props.width)};
      max-width: ${getDimension(props.width)};
      min-width: ${getDimension(props.width)};
    `};

  ${props => props.size &&
    css `
      /* flex-basis: ${getDimension(props.size)}; */
      height: ${getDimension(props.size)};
      max-height: ${getDimension(props.size)};
      min-height: ${getDimension(props.size)};
      width: ${getDimension(props.size)};
      max-width: ${getDimension(props.size)};
      min-width: ${getDimension(props.size)};
    `};
`;
//# sourceMappingURL=dimension.js.map