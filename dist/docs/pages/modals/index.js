import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
export const Modals = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Modals" }, void 0));
});
//# sourceMappingURL=index.js.map