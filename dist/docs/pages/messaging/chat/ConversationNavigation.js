import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { Container } from '../../../../components/layout/Container';
import { ConversationNavigation } from '../../../../components/messaging/chat/ConversationNavigation';
export const ConversationNavigationPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'ConversationNavigation' }, layout: Documentation, title: "ConversationNavigation", children: _jsx(Container, { width: 300, children: _jsx(ConversationNavigation, {}, void 0) }, void 0) }, void 0));
});
//# sourceMappingURL=ConversationNavigation.js.map