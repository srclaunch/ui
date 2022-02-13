import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, Size, Workspace, } from '../../..';
import { Documentation } from '../../layouts/Documentation';
export const Animation = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'Animation',
        }, layout: Documentation, padding: Amount.Most, title: "Animation", children: _jsx(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: _jsx(Heading, { lineHeight: Size.Smaller, children: "Components" }, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map