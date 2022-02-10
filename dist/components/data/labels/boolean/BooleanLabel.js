import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { Label } from '../../../typography/Label';
import { Icon } from '../../../media/Icon';
import { Colors, Size, TextColors, TextSize, } from '../../../../types';
export const BooleanLabel = memo(({ icon, lineHeight = Size.Default, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    return (_jsxs(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props, children: [_jsx(Icon, { color: value ? Colors.Primary : Colors.Error, name: value ? BasicIcons.Checkmark2 : BasicIcons.Close, size: Size.Smaller }, void 0), value] }, void 0));
});
//# sourceMappingURL=BooleanLabel.js.map