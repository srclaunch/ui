import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import { Container } from '../../layout/Container';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Depth, DepthShadow, Orientation, Size, TextColors, } from '../../../types';
import { HoverPanel } from '../../modals/HoverPanel';
import { Menu } from '../../menus/Menu';
import { DropdownControl } from '../inputs/shared/DropdownControl';
export const MenuButton = memo(({ backgroundColor = BackgroundColors.MenuButton, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, borderRadius = Amount.Least, className = '', menu, label, padding = 5, size = Size.Default, textColor = TextColors.MenuButton, width, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [item, setItem] = useState();
    useEffect(() => {
        setFocused(menuVisible);
    }, [menuVisible]);
    return (_jsxs(Container, { boxShadow: menuVisible ? DepthShadow.Higher : DepthShadow.Surface, borderRadius: borderRadius, className: `${className} menu-button`, depth: Depth.Higher, grow: false, orientation: Orientation.Vertical, onMouseLeave: () => {
            setMenuVisible(false);
        }, width: width, ...props, children: [_jsx(DropdownControl, { backgroundColor: backgroundColor, borderRadius: borderRadius, border: border, depth: Depth.High, label: label ?? item?.label ?? '', focused: focused, lineHeight: size, menuVisible: menuVisible, name: "menu-button-dropdown-control", onBlur: () => {
                    if (!menuVisible)
                        setFocused(false);
                }, onFocus: () => setFocused(true), 
                // onBlur={() => setMenuVisible(false)}
                onClick: () => setMenuVisible(!menuVisible), textColor: textColor }, void 0), _jsx(HoverPanel, { backgroundColor: backgroundColor, borderRadius: borderRadius, detached: false, focused: focused, padding: padding, visible: menuVisible, setMenuVisible: setMenuVisible, width: width, children: _jsx(Menu, { backgroundColor: BackgroundColors.Light, borderRadius: borderRadius, 
                    // invertedColors={true}
                    menu: menu, onClick: i => {
                        // setItem(i);
                        setMenuVisible(false);
                    } }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=MenuButton.js.map