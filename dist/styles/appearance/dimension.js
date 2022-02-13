import { css } from 'styled-components';
const getDimension = (dimension) => {
    if (typeof dimension === 'number') {
        return `${dimension}px`;
    }
    return dimension;
};
export const DimensionStyles = css `
  ${props => props.height &&
    css `
      max-height: ${getDimension(props.height)};
      min-height: ${getDimension(props.height)};
      height: ${getDimension(props.height)};
    `};

  ${props => props.width &&
    css `
      max-width: ${getDimension(props.width)};
      min-width: ${getDimension(props.width)};
      width: ${getDimension(props.width)};
    `};

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
      min-height: ${getDimension(props.minHeight)};
    `};

  ${props => props.minWidth &&
    css `
      min-width: ${getDimension(props.minWidth)};
    `};

  ${props => props.size &&
    css `
      max-height: ${props.size};
      min-height: ${props.size};
      height: ${props.size};
      max-width: ${props.size};
      min-width: ${props.size};
      width: ${props.size};
    `};
`;
//# sourceMappingURL=dimension.js.map