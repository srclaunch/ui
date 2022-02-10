import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, Orientation } from '../../../../types';
import { Workspace } from '../../../../components/containers/Workspace';
import { Container } from '../../../../components/layout/Container';
import { ConversationNavigation } from '../../../../components/messaging/chat/ConversationNavigation';
import { ConversationList } from '../../../../components/messaging/chat/ConversationList';
import { MessageComposer } from '../../../../components/messaging/chat/MessageComposer';
import { Documentation } from '../../../layouts/Documentation';
// import { SlidePanel } from '../../../../components/modals/SlidePanel';
export const ChatMessagingPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'Chat Messaging' }, layout: Documentation, title: "Chat Messaging", children: _jsxs(Container, { orientation: Orientation.Horizontal, children: [_jsx(ConversationNavigation, { borderRadius: Amount.More, width: 200 }, void 0), _jsx(ConversationList, { marginLeft: Amount.More, width: 360 }, void 0), _jsx(MessageComposer, { borderRadius: Amount.Least, marginLeft: Amount.More }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map