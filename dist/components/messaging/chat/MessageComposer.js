import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../../layout/Container';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, } from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Label } from '../../..';
export const MessageComposer = memo(({ ...props }) => {
    return (_jsxs(Container, { backgroundColor: BackgroundColors.Default, ...props, children: [_jsx(Container, { alignContent: Align.Center, border: {
                    bottom: {
                        color: BorderColors.Dark,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, grow: false, padding: Amount.More, children: _jsx(Label, { children: "Title" }, void 0) }, void 0), _jsx(Container, { alignContent: Align.Center, border: {
                    bottom: {
                        color: BorderColors.Dark,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, grow: false, padding: Amount.More, children: _jsx(Label, { children: "Recipients" }, void 0) }, void 0), _jsx(Container, { alignContent: Align.Center, border: {
                    bottom: {
                        color: BorderColors.Dark,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, grow: false, padding: Amount.More, children: _jsx(Label, { children: "Subject" }, void 0) }, void 0), _jsx(Container, { alignItems: Align.Top, alignContent: Align.Top, padding: Amount.More, children: _jsx(Label, { grow: false, children: "Message" }, void 0) }, void 0), _jsx(Container, { alignItems: Align.Left, alignContent: Align.Top, grow: false, padding: Amount.More, children: _jsx(Button, { grow: false, type: ButtonType.Primary, children: "Send" }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=MessageComposer.js.map