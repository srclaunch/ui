import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, Orientation, Overflow, Size, TextColors, TextOverflow, TextSize, TextWeight, WhiteSpace, } from '../../types';
import { Container } from '../layout/Container';
import { Icon } from '../media/Icon';
import { Text } from '../typography/Text';
export const Label = memo(({ alignItems = Align.Center, alignContent = Align.Stretch, as = 'label', children, className = '', grow = false, icon, orientation = Orientation.Horizontal, size = Size.Default, textColor = TextColors.Default, textOverflow = TextOverflow.Ellipsis, textSize = TextSize.Default, textWeight = TextWeight.Default, underline = false, whiteSpace = WhiteSpace.NoWrap, ...props }) => {
    return (_jsxs(Container, { alignItems: alignItems, alignContent: alignContent, as: as, className: `${className} label`, grow: grow, orientation: orientation, ...props, children: [icon &&
                (icon.component ||
                    icon.name ||
                    icon.path ||
                    icon.url ||
                    icon.svg) && _jsx(Icon, { marginRight: Amount.Least, ...icon }, void 0), _jsx(Text, { lineHeight: size, overflow: Overflow.Hidden, textColor: textColor, textOverflow: textOverflow, textSize: textSize, textWeight: textWeight, underline: underline, whiteSpace: whiteSpace, children: children }, void 0)] }, void 0));
});
//# sourceMappingURL=Label.js.map