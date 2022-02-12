import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NotificationType } from '@srclaunch/types';
import { memo } from 'react';
import { Align, Amount, BackgroundColors, Orientation, Size, TextColors, TextWeight, } from '../../types';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
import { Orb } from './Orb';
export const NotificationLabel = memo(({ backgroundColor = BackgroundColors.Dark, children, className = '', grow = false, label = '', orientation, showOrb = true, type, ...props }) => {
    const getBackgroundColor = () => {
        if (!type)
            return backgroundColor;
        switch (type) {
            case NotificationType.Error:
                return BackgroundColors.Error;
            case NotificationType.Info:
                return BackgroundColors.Info;
            case NotificationType.Success:
                return BackgroundColors.Success;
            case NotificationType.Warning:
                return BackgroundColors.Warning;
        }
    };
    const getTextColor = () => {
        if (!type)
            return TextColors.Default;
        switch (type) {
            case NotificationType.Error:
                return TextColors.Error;
            case NotificationType.Info:
                return TextColors.Info;
            case NotificationType.Success:
                return TextColors.Success;
            case NotificationType.Warning:
                return TextColors.Warning;
        }
    };
    const bgColor = getBackgroundColor();
    const textColor = getTextColor();
    return (_jsxs(Container, { alignItems: Align.Center, alignContent: Align.Center, backgroundColor: bgColor, backgroundOpacity: type ? 10 : 100, borderRadius: Amount.All, className: `${className} notification-label`, 
        // depth={!type ? Depth.Low : undefined}
        orientation: Orientation.Horizontal, padding: Amount.More, paddingBottom: Amount.Less, paddingTop: Amount.Less, grow: grow, ...props, children: [showOrb && _jsx(Orb, { color: bgColor, marginRight: Amount.Less }, void 0), label && (_jsx(Label, { textColor: textColor, lineHeight: Size.Small, textWeight: TextWeight.Default, children: label }, void 0)), children] }, void 0));
});
//# sourceMappingURL=NotificationLabel.js.map