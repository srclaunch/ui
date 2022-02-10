import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { ThemeSelector } from '../../../components/themes/ThemeSelector';
export const ThemeSelectorPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'ThemeSelector' }, layout: Documentation, title: "ThemeSelector", children: _jsx(ThemeSelector, { width: 200 }, void 0) }, void 0));
});
//# sourceMappingURL=ThemeSelector.js.map