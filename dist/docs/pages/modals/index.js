import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth, NavigationLink, Workspace, } from '../../..';
import { Documentation } from '../../layouts/Documentation';
export const Modals = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Modals", children: _jsx("ul", { children: _jsx("li", { children: _jsx(NavigationLink, { to: "/modals/slide-panel", label: "SlidePanel" }, void 0) }, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map