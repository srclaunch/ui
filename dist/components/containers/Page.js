import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, memo } from 'react';
import { Align } from '../../types';
import { Container } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
export const Page = memo(({ alignContent = Align.Top, children, className = '', grow = false, layout: Layout, loading = false, title, ...props }) => {
    useTitle(title);
    const PageComp = () => (_jsxs(Container, { alignContent: alignContent, className: `${className} page`, grow: grow, ...props, children: [_jsx(LoadingOverlay, { visible: loading }, void 0), children] }, void 0));
    const Child = () => Layout ? (cloneElement(_jsx(Layout, { ...props }, void 0), props, _jsx(PageComp, {}, void 0))) : (_jsx(PageComp, {}, void 0));
    return _jsx(Child, {}, void 0);
});
//# sourceMappingURL=Page.js.map