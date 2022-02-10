import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { ConversationList } from '../../../../components/messaging/chat/ConversationList';
export const ConversationListPage = memo(() => {
    return (_jsx(Workspace, { header: { title: 'ConversationList' }, layout: Documentation, title: "ConversationList", children: _jsx(ConversationList, {}, void 0) }, void 0));
});
//# sourceMappingURL=ConversationList.js.map