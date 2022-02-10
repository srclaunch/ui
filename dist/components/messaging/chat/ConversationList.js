import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Orientation, Overflow, } from '../../../types';
import { Container } from '../../layout/Container';
import { MessagePreview } from './MessagePreview';
import { NavigationLink } from '../../navigation/NavigationLink';
export const ConversationList = memo(({ backgroundColor = BackgroundColors.Default, borderRadius = Amount.Least, className = '', overflow = Overflow.ScrollVertical, width = 350, ...props }) => {
    const items = new Array(5).fill(0);
    return (_jsx(Container, { backgroundColor: backgroundColor, borderRadius: borderRadius, className: `${className} conversation-list`, grow: true, orientation: Orientation.Vertical, overflow: overflow, width: width, ...props, children: items.map((_, index) => {
            return (_jsx(NavigationLink, { to: `conversation/${index}`, children: _jsx(MessagePreview, { backgroundColor: BackgroundColors.Default, body: "Lorem ipsum", border: index !== items.length - 1
                        ? {
                            bottom: {
                                color: BorderColors.Light,
                                style: BorderStyle.Solid,
                                width: 1,
                            },
                        }
                        : undefined, borderRadius: Amount.None, date: new Date().toISOString(), sender: {
                        id: '0',
                        name: 'Yippy James',
                    }, subject: "Lorem ipsum " }, void 0) }, void 0));
        }) }, void 0));
});
//# sourceMappingURL=ConversationList.js.map