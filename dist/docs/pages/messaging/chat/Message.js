import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Workspace } from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';
import { Message } from '../../../../components/messaging/chat/Message';
export const MessagePage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'ChatMessage' }, layout: Documentation, title: "ChatMessage", children: _jsx(Message, { body: "Lorem ipsum ", date: new Date().toISOString(), sender: {
                id: '0',
                name: 'Serena Williams',
            } }, void 0) }, void 0));
});
//# sourceMappingURL=Message.js.map