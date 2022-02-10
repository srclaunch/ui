import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, BackgroundColors } from '../../../types';
import { Documentation } from '../../layouts/Documentation';
import { Workspace } from '../../../components/containers/Workspace';
import { MoreMenu } from '../../../components/menus/MoreMenu';
import { Container } from '../../..';
export const MoreMenuPage = memo(() => {
    return (_jsxs(Workspace, { header: {
            title: 'MoreMenu',
        }, layout: Documentation, title: "MoreMenu", children: [_jsx(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.More, grow: false, padding: Amount.Most, children: _jsx(MoreMenu, { menu: [
                        {
                            label: 'Hello',
                        },
                        {
                            label: 'World',
                        },
                    ] }, void 0) }, void 0), _jsx(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.More, grow: false, padding: Amount.Most, children: _jsx(MoreMenu, { alignContent: Align.Left, menu: [
                        {
                            label: 'Hello',
                        },
                        {
                            label: 'World',
                        },
                    ] }, void 0) }, void 0), _jsx(Container, { alignItems: Align.Right, backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.More, grow: false, padding: Amount.Most, children: _jsx(MoreMenu, { alignContent: Align.Right, menu: [
                        {
                            label: 'Hello',
                        },
                        {
                            label: 'World',
                        },
                    ] }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=MoreMenu.js.map