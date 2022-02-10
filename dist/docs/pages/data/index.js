import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
export const Data = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Data" }, void 0));
});
//# sourceMappingURL=index.js.map