import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { MessageComposer } from '../../../../components/messaging/chat/MessageComposer';
// import { Message } from '../../../../components/messaging/chat/Message';
export const MessageComposerPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'ChatMessageComposer' }, layout: Documentation, title: "ChatMessageComposer", children: _jsx(MessageComposer, {}, void 0) }, void 0));
});
//# sourceMappingURL=MessageComposer.js.map