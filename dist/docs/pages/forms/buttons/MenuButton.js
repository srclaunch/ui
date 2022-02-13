import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DualLightIcons } from '@srclaunch/icons';
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Icon, InputRow, MenuButton, NavigationLink, Size, TextColors, TextSize, TextWeight, Title, Workspace, } from '../../../../';
import { Documentation } from '../../../layouts/Documentation';
export const MenuButtonPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: (_jsxs(_Fragment, { children: [_jsx(NavigationLink, { to: "/forms", hover: {
                            underline: true,
                        }, underline: false, children: _jsx(Title, { textColor: TextColors.Primary, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Forms" }, void 0) }, void 0), _jsx(Icon, { name: DualLightIcons.ChevronDoubleForward, marginLeft: Amount.Less, marginRight: Amount.Less, size: Size.Smaller }, void 0), _jsx(NavigationLink, { to: "/forms/buttons", hover: {
                            underline: true,
                        }, underline: false, children: _jsx(Title, { textColor: TextColors.Primary, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Buttons" }, void 0) }, void 0), _jsx(Icon, { name: DualLightIcons.ChevronDoubleForward, marginLeft: Amount.Less, marginRight: Amount.Less, size: Size.Smaller }, void 0), _jsx(Title, { textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "MenuButton" }, void 0)] }, void 0)),
        }, layout: Documentation, padding: Amount.Most, title: "MenuButton", children: _jsxs(InputRow, { children: [_jsx(MenuButton, { label: "Choose an action", menu: [{ label: 'Hello' }, { label: 'World' }], width: 250 }, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx(Container, { backgroundColor: BackgroundColors.Default, children: "This should be placed behing the menu" }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=MenuButton.js.map