import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth, Workspace, } from '../../../..';
import { Documentation } from '../../../layouts/Documentation';
export const ButtonPage = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Button", children: "Button" }, void 0));
});
//# sourceMappingURL=Button.js.map