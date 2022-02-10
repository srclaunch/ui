import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, Colors, Size, TextColors, TextSize, } from '../../types';
import { BasicIcons } from '@srclaunch/icons';
import { Label } from '../typography/Label';
export const ErrorLabel = memo(({ alignContent = Align.Center, alignText = Align.Center, children, className = '', grow = true, icon = {
    color: Colors.Error,
    name: BasicIcons.Alert,
    size: Size.Smaller,
}, lineHeight = Size.Smaller, marginBottom = Amount.Least, size = Size.Default, textColor = TextColors.Error, textSize = TextSize.Small, }) => {
    return (_jsx(Label, { alignContent: alignContent, alignText: alignText, className: `${className} error-label`, grow: grow, icon: icon, lineHeight: lineHeight, marginBottom: marginBottom, size: size, textColor: textColor, textSize: textSize, children: children }, void 0));
});
//# sourceMappingURL=ErrorLabel.js.map