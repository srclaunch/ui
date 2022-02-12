import { jsx as _jsx } from "react/jsx-runtime";
import { getIcon } from '@srclaunch/icons';
import { memo } from 'react';
import { Align, ForegroundColors, Size, } from '../../types';
import { Container } from '../layout/Container';
import { Image } from './Image';
import { Svg } from './Svg';
export const Icon = memo(({ color = ForegroundColors.Default, className = '', component, name, path, size = Size.Default, svg, url, ...props }) => {
    const getElement = () => {
        if (name) {
            const Ico = getIcon(name);
            if (Ico)
                return (_jsx(Svg, { ...props, children: _jsx(Ico, {}, void 0) }, void 0));
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
    return (_jsx(Container, { alignItems: Align.Center, alignContent: Align.Center, as: "span", height: size, width: size, ...props, children: getElement() }, void 0));
});
//# sourceMappingURL=Icon.js.map