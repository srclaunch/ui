import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, BackgroundColors, Orientation, Size, TextColors, TextSize, TextWeight, } from '../../../types';
import { Container } from '../../../components/layout/Container';
import { Title } from '../../../components/typography/Title';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Image } from '../../../components/media/Image';
import { DateLabel } from '../../data/labels/dates/DateLabel';
import { Label } from '../../..';
export const MessagePreview = memo(({ backgroundColor = BackgroundColors.Light, body, borderRadius = Amount.Least, className = '', date, subject, sender, ...props }) => {
    return (_jsxs(Container, { backgroundColor: backgroundColor, borderRadius: borderRadius, className: `${className} message-preview`, grow: true, orientation: Orientation.Vertical, padding: Amount.Default, paddingLeft: Amount.More, paddingRight: Amount.More, ...props, children: [_jsxs(Container, { alignItems: Align.Top, grow: true, orientation: Orientation.Horizontal, children: [_jsx(Image, { borderRadius: Amount.All, marginRight: Amount.More, url: "http://localhost:3000/public/assets/images/placeholders/people/person1.png", size: Size.Default }, void 0), _jsx(Label, { alignItems: Align.Left, grow: true, lineHeight: Amount.Default, marginBottom: Amount.None, textColor: TextColors.Light, textSize: TextSize.Small, textWeight: TextWeight.Default, children: "Samanatha Baskin" }, void 0), _jsx(DateLabel, { alignContent: Align.Right, grow: false, lineHeight: Amount.Default, value: date, textColor: TextColors.Lighter, textSize: TextSize.Smaller }, void 0)] }, void 0), _jsxs(Container, { grow: false, orientation: Orientation.Horizontal, children: [_jsx(Container, { borderRadius: Amount.All, marginRight: Amount.More, size: Size.Default }, void 0), _jsxs(Container, { alignContent: Align.Top, alignItems: Align.Left, orientation: Orientation.Vertical, children: [_jsx(Title, { alignItems: Align.Left, grow: true, lineHeight: Amount.Less, marginTop: Amount.None, marginBottom: Amount.Less, textSize: TextSize.Large, textWeight: TextWeight.More, children: subject }, void 0), _jsx(Paragraph, { marginBottom: Amount.None, children: body }, void 0)] }, void 0)] }, void 0)] }, void 0));
});
//# sourceMappingURL=MessagePreview.js.map