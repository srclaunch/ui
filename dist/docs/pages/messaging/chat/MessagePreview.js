import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { MessagePreview } from '../../../../components/messaging/chat/MessagePreview';
export const MessagePreviewPage = memo(() => {
    return (_jsxs(Workspace, { header: { title: 'MessagePreview' }, layout: Documentation, title: "MessagePreview", children: [_jsx(MessagePreview, { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: new Date().toISOString(), sender: {
                    id: '0',
                    name: 'Susan Williams',
                }, subject: "Lorem ipsum" }, void 0), _jsx("br", {}, void 0), _jsx(MessagePreview, { body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: new Date().toISOString(), sender: {
                    id: '0',
                    name: 'Jimbo McGee',
                }, subject: "Lorem ipsum" }, void 0)] }, void 0));
});
//# sourceMappingURL=MessagePreview.js.map