import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { getIcon } from '@srclaunch/icons';
import { memo } from 'react';
import { ForegroundColors, Size, } from '../../types';
import { Image } from './Image';
import { Svg } from './Svg';
export const Icon = memo(({ color = ForegroundColors.Default, className = '', component, name, path, svg, url, ...props }) => {
    if (name) {
        const Ico = getIcon(name);
        if (Ico)
            return (_jsx(Svg, { className: `${className} icon`, color: color, size: Size.Default, ...props, children: _jsx(Ico, {}, void 0) }, void 0));
    }
    if (component) {
        return component;
    }
    if (path) {
        return (_jsx(Image, { alt: "icon", className: `${className} icon`, path: path, ...props }, void 0));
    }
    if (url) {
        return (_jsx(Image, { alt: "icon", className: `${className} icon`, url: url, ...props }, void 0));
    }
    return _jsx(_Fragment, {}, void 0);
});
//# sourceMappingURL=Icon.js.map