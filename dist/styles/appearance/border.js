import { css } from 'styled-components';
import { getCSSBorderValue } from '../../lib/css/properties';
const isBorderStyleProps = (border) => {
    return border.hasOwnProperty('color');
};
export const BorderStyles = css `
  ${props => props.flat
    ? css `
          border: 1px solid transparent;
        `
    : css `
          ${props.border && isBorderStyleProps(props.border)
        ? css `
                border: ${getCSSBorderValue(props.border) ?? 'none'};
              `
        : css `
                border-bottom: ${getCSSBorderValue(props.border?.bottom) ??
            'initial'};
                border-left: ${getCSSBorderValue(props.border?.left) ??
            'initial'};
                border-right: ${getCSSBorderValue(props.border?.right) ??
            'initial'};
                border-top: ${getCSSBorderValue(props.border?.top) ??
            'initial'};
              `};

          ${props.hover &&
        props.hover.border &&
        css `
            &:hover {
              ${props.hover.border && isBorderStyleProps(props.hover.border)
            ? css `
                    border: ${getCSSBorderValue(props.hover.border) ?? 'none'};
                  `
            : css `
                    border-bottom: ${getCSSBorderValue(props.hover.border?.bottom) ?? 'initial'};
                    border-left: ${getCSSBorderValue(props.hover.border?.left) ?? 'initial'};
                    border-right: ${getCSSBorderValue(props.hover.border?.right) ?? 'initial'};
                    border-top: ${getCSSBorderValue(props.hover.border?.top) ??
                'initial'};
                  `};
            }
          `};

          ${props.active &&
        props.active.border &&
        css `
            &:active,
            &.active {
              ${props.active.border && isBorderStyleProps(props.active.border)
            ? css `
                    border: ${getCSSBorderValue(props.active.border) ?? 'none'};
                  `
            : css `
                    border-bottom: ${getCSSBorderValue(props.active.border?.bottom) ?? 'initial'};
                    border-left: ${getCSSBorderValue(props.active.border?.left) ?? 'initial'};
                    border-right: ${getCSSBorderValue(props.active.border?.right) ?? 'initial'};
                    border-top: ${getCSSBorderValue(props.active.border?.top) ??
                'initial'};
                  `};
            }
          `};

          ${props.focus &&
        props.focus.border &&
        css `
            &:focus {
              ${props.focus.border && isBorderStyleProps(props.focus.border)
            ? css `
                    border: ${getCSSBorderValue(props.focus.border) ?? 'none'};
                  `
            : css `
                    border-bottom: ${getCSSBorderValue(props.focus.border?.bottom) ?? 'initial'};
                    border-left: ${getCSSBorderValue(props.focus.border?.left) ?? 'initial'};
                    border-right: ${getCSSBorderValue(props.focus.border?.right) ?? 'initial'};
                    border-top: ${getCSSBorderValue(props.focus.border?.top) ??
                'initial'};
                  `};
            }
          `};
        `};
`;
//# sourceMappingURL=border.js.map