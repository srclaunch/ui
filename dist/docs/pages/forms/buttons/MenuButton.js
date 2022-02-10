import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors } from '../../../../types';
import { Documentation } from '../../../layouts/Documentation';
import { Container } from '../../../../components/layout/Container';
import { Workspace } from '../../../../components/containers/Workspace';
import { InputRow } from '../../../../components/forms/layout/InputRow';
import { MenuButton } from '../../../../components/forms/buttons/MenuButton';
export const MenuButtonPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'MenuButton' }, layout: Documentation, padding: Amount.Most, title: "MenuButton", children: _jsxs(InputRow, { children: [_jsx(MenuButton, { label: "Choose an action", menu: [{ label: 'Hello' }, { label: 'World' }], width: 250 }, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx(Container, { backgroundColor: BackgroundColors.Default, children: "This should be placed behing the menu" }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=MenuButton.js.map