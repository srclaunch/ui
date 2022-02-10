import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Depth } from '../../../types';
import { Documentation } from '../../layouts/Documentation';
import { Workspace } from '../../../components/containers/Workspace';
export const Forms = memo(() => {
    return (_jsx(Workspace, { backgroundColor: BackgroundColors.Default, depth: Depth.Low, layout: Documentation, padding: Amount.Most, title: "Forms" }, void 0));
});
//# sourceMappingURL=index.js.map