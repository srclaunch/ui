import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Workspace } from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { SlidePanel } from '../../../components/modals/SlidePanel';
export const SlidePanelPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'SlidePanel' }, layout: Documentation, title: "SlidePanel", children: _jsx(SlidePanel, { visible: true }, void 0) }, void 0));
});
//# sourceMappingURL=SlidePanel.js.map