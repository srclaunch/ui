import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { Cursor } from '../../types';
import { Align, Amount, BackgroundColors, Depth, ForegroundColors, Orientation, Size, } from '../../types';
import { Container } from '../layout/Container';
import { HoverPanel } from '../modals/HoverPanel';
import { Menu } from './Menu';
export const MoreMenu = memo(({ alignContent = Align.Left, backgroundColor = BackgroundColors.MoreMenu, className = '', dotColor = ForegroundColors.MoreMenu, orientation = Orientation.Horizontal, size = Size.Default, menu, width = 150, ...props }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const dotFillColor = menuVisible || hovered ? ForegroundColors.PrimaryContrast : dotColor;
    return (
    // @ts-ignore
    _jsxs(Container, { className: `${className} more-menu`, grow: false, onMouseLeave: () => setMenuVisible(false), ...props, children: [_jsxs(Container, { alignContent: Align.Center, alignItems: Align.Center, as: "button", cursor: Cursor.Pointer, backgroundColor: menuVisible ? BackgroundColors.Primary : backgroundColor, backgroundOpacity: menuVisible ? 70 : 100, borderRadius: size, focused: focused, depth: Depth.Surface, grow: false, hover: {
                    backgroundColor: BackgroundColors.Primary,
                }, 
                // @ts-ignore
                onClick: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setMenuVisible(!menuVisible);
                }, onFocus: () => setFocused(true), onBlur: () => {
                    setFocused(false);
                    // setMenuVisible(false);
                }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), orientation: orientation, height: size, width: size, ...props, children: [_jsx(Dot, { borderRadius: Amount.All, backgroundColor: dotFillColor }, void 0), _jsx(Dot, { borderRadius: Amount.All, backgroundColor: dotFillColor }, void 0), _jsx(Dot, { borderRadius: Amount.All, backgroundColor: dotFillColor }, void 0)] }, void 0), _jsx(HoverPanel, { alignContent: alignContent, orientation: Orientation.Vertical, visible: menuVisible, setMenuVisible: setMenuVisible, width: width, children: _jsx(Menu, { menu: menu, onClick: () => setMenuVisible(false) }, void 0) }, void 0)] }, void 0));
});
const Dot = styled.span `
  ${AppearanceStyles};

  background-color: rgb(${props => props.fillColor});
  display: inline-block;
  height: 4px;
  margin: 0 1px;
  width: 4px;
`;
//# sourceMappingURL=MoreMenu.js.map