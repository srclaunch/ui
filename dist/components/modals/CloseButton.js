import { jsx as _jsx } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { memo, useState } from 'react';
import { Align, Amount, BackgroundColors, Depth, ForegroundColors, Size, } from '../../types';
import { Container } from '../layout/Container';
import { Icon } from '../media/Icon';
export const CloseButton = memo(({ backgroundColor = BackgroundColors.CloseButton, iconColor = ForegroundColors.CloseButton, className = '', onClick, size = Size.Default, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const iconHoverColor = hovered
        ? ForegroundColors.PrimaryContrast
        : iconColor;
    return (_jsx(Container, { alignContent: Align.Center, alignItems: Align.Center, as: "button", backgroundColor: hovered ? BackgroundColors.Primary : backgroundColor, borderRadius: Amount.All, className: `${className} close-button`, depth: Depth.Higher, focused: focused, form: "null", grow: false, height: size, onClick: onClick, onFocus: () => setFocused(true), onBlur: () => setFocused(false), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), width: size, ...props, children: _jsx(Icon, { color: iconHoverColor, name: BasicIcons.Close, size: Size.Smallest }, void 0) }, void 0));
});
//# sourceMappingURL=CloseButton.js.map