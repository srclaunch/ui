import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, NavigationLink, Size, UnorderedList, Workspace, } from '../../..';
import { Documentation } from '../../layouts/Documentation';
export const Forms = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'Forms',
        }, layout: Documentation, padding: Amount.Most, title: "Forms", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Smaller, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { to: "/forms/buttons", label: "Buttons" }, void 0),
                        _jsx(NavigationLink, { to: "/forms/inputs", label: "Inputs" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map