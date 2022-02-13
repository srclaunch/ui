import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DualLightIcons } from '@srclaunch/icons';
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, Icon, NavigationLink, Size, TextColors, TextSize, TextWeight, Title, UnorderedList, Workspace, } from '../../../..';
import { Documentation } from '../../../layouts/Documentation';
export const ButtonsPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: (_jsxs(_Fragment, { children: [_jsx(NavigationLink, { to: "/forms", hover: {
                            underline: true,
                        }, underline: false, children: _jsx(Title, { textColor: TextColors.Primary, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Forms" }, void 0) }, void 0), _jsx(Icon, { name: DualLightIcons.ChevronDoubleForward, marginLeft: Amount.Less, marginRight: Amount.Less, size: Size.Smaller }, void 0), _jsx(Title, { textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Buttons" }, void 0)] }, void 0)),
        }, layout: Documentation, padding: Amount.Most, title: "Buttons", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Smaller, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { grow: false, to: "/forms/buttons/button", label: "Button" }, void 0),
                        _jsx(NavigationLink, { grow: false, to: "/forms/buttons/menu-button", label: "MenuButton" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map