import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { NavigationLink, Workspace } from '../../..';
import { Amount, BackgroundColors, Depth } from '../../../types';
import { Documentation } from '../../layouts/Documentation';
export const Forms = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Forms", children: _jsx("ul", { children: _jsx("li", { children: _jsx(NavigationLink, { to: "/forms/button", children: "Buttons" }, void 0) }, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map