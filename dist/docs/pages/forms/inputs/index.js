import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DualLightIcons } from '@srclaunch/icons';
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, Icon, NavigationLink, Size, TextColors, TextSize, TextWeight, Title, UnorderedList, Workspace, } from '../../../..';
import { Documentation } from '../../../layouts/Documentation';
export const FormInputsPage = memo(() => {
    return (_jsx(Workspace, { header: {
            title: (_jsxs(_Fragment, { children: [_jsx(NavigationLink, { to: "/forms", hover: {
                            underline: true,
                        }, underline: false, children: _jsx(Title, { textColor: TextColors.Primary, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Forms" }, void 0) }, void 0), _jsx(Icon, { name: DualLightIcons.ChevronDoubleForward, marginLeft: Amount.Less, marginRight: Amount.Less, size: Size.Smaller }, void 0), _jsx(Title, { textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Inputs" }, void 0)] }, void 0)),
        }, layout: Documentation, padding: Amount.Most, title: "Inputs", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Smaller, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { to: "/forms/inputs/boolean", label: "Boolean" }, void 0),
                        _jsx(NavigationLink, { to: "/forms/inputs/locale", label: "Locale" }, void 0),
                        _jsx(NavigationLink, { to: "/forms/inputs/media", label: "Media" }, void 0),
                        _jsx(NavigationLink, { to: "/forms/inputs/menu", label: "Menu" }, void 0),
                        _jsx(NavigationLink, { to: "/forms/inputs/text", label: "Text" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map