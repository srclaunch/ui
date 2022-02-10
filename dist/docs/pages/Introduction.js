import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '../../index';
import { Documentation } from '../layouts/Documentation';
export const Introduction = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, header: {
            title: 'Introduction',
        }, layout: Documentation, padding: Amount.Most, title: "Introduction" }, void 0));
});
//# sourceMappingURL=Introduction.js.map