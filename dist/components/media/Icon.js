import { jsx as _jsx } from "react/jsx-runtime";
import { getIcon } from '@srclaunch/icons';
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import { Align, ForegroundColors, Size, } from '../../types';
import { Image } from './Image';
import { Svg } from './Svg';
const Wrapper = styled.span `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  img,
  svg {
    display: inherit;
    height: ${props => props.size};
    fill: ${props => `rgb(${props.color})`};
    transition: fill 0.1s ease-in-out;
    width: ${props => props.size};
  }
`;
export const Icon = memo(({ color = ForegroundColors.Default, className = '', component, name, path, size = Size.Default, svg, url, ...props }) => {
    const getElement = () => {
        if (name) {
            const Ico = getIcon(name);
            if (Ico)
                return (_jsx(Svg, { size: size, ...props, children: _jsx(Ico, {}, void 0) }, void 0));
        }
        if (component) {
            return component;
        }
        if (path) {
            return _jsx(Image, { alt: "icon", size: size, path: path, ...props }, void 0);
        }
        if (url) {
            return _jsx(Image, { alt: "icon", size: size, url: url, ...props }, void 0);
        }
    };
    return (_jsx(Wrapper, { alignItems: Align.Center, alignContent: Align.Center, as: "span", className: `${className} icon ${name ? `icon-${name}` : ''}`, color: color, ...props, children: getElement() }, void 0));
});
//# sourceMappingURL=Icon.js.map