import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Orientation, Overflow, } from '../../../types';
import { Container } from '../../../components/layout/Container';
import { MessagePreview } from './MessagePreview';
export const Conversation = memo(({ borderRadius = Amount.Less, className = '', }) => {
    const items = new Array(5).fill(0);
    return (_jsx(Container, { borderRadius: borderRadius, className: `${className} conversation-list`, grow: false, orientation: Orientation.Vertical, overflow: Overflow.Hidden, width: 350, children: items.map((_, index) => {
            return (_jsx(MessagePreview, { backgroundColor: BackgroundColors.Lightest, body: "Lorem ipsum ", border: {
                    bottom: {
                        color: BorderColors.Light,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, borderRadius: Amount.None, date: new Date().toISOString(), sender: {
                    id: '0',
                    name: 'Yippy James',
                }, subject: "Lorem ipsum " }, void 0));
        }) }, void 0));
});
//# sourceMappingURL=Conversation.js.map