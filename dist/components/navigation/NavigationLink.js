import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink, useLocation, useMatch, useResolvedPath, } from '@srclaunch/web-application-state';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import { Align, Amount, Orientation } from '../../types';
import { Label } from '../typography/Label';
export const NavigationLink = memo(({ active, activeClassName = 'active', alignContent, alignItems = Align.Left, backgroundColor, borderRadius = Amount.Less, children, className = '', focus, grow = true, hover, icon, margin, marginBottom, marginLeft, marginRight, marginTop, menu, onClick, onMouseEnter, onMouseLeave, orientation = Orientation.Horizontal, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, rel, size, target, textColor, textSize, textWeight, to, width, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [updatedBackgroundColor, setUpdatedBackgroundColor] = useState(backgroundColor);
    const [updatedTextColor, setUpdatedTextColor] = useState(textColor);
    const resolved = useResolvedPath(to);
    const exactMatch = useMatch({ end: true, path: resolved.pathname });
    const pathMatch = useMatch({ end: false, path: resolved.pathname });
    const location = useLocation();
    const setTextColor = () => {
        if (focused && focus?.textColor) {
            setUpdatedTextColor(focus.textColor);
        }
        else if (exactMatch && active?.textColor) {
            setUpdatedTextColor(active.textColor);
        }
        else if (hovered && hover?.textColor) {
            setUpdatedTextColor(hover.textColor);
        }
        else {
            setUpdatedTextColor(textColor);
        }
    };
    const setBackgroundColor = () => {
        if (focused && focus?.backgroundColor) {
            setUpdatedBackgroundColor(focus.backgroundColor);
        }
        else if (exactMatch && active?.backgroundColor) {
            setUpdatedBackgroundColor(active.backgroundColor);
        }
        else if (hovered && hover?.backgroundColor) {
            setUpdatedBackgroundColor(hover.backgroundColor);
        }
        else {
            setUpdatedBackgroundColor(backgroundColor);
        }
    };
    useEffect(() => {
        setTextColor();
        setBackgroundColor();
    }, [hovered, focused, exactMatch]);
    const content = typeof children === 'string' ? (_jsx(Label, { grow: true, icon: { ...icon, color: updatedTextColor }, lineHeight: size, 
        // padding={Amount.None}
        // paddingLeft={Amount.Less}
        // paddingRight={Amount.Less}
        textColor: updatedTextColor, textSize: textSize, textWeight: textWeight, children: children }, void 0)) : (children);
    return (_jsx(NavLink, { className: `${className} navigation-link`, onBlur: () => setFocused(false), onClick: onClick, onFocus: () => setFocused(true), 
        // @ts-ignore
        onMouseEnter: e => {
            setHovered(true);
            if (onMouseEnter)
                onMouseEnter(e);
        }, 
        // @ts-ignore
        onMouseLeave: e => {
            setHovered(false);
            if (onMouseLeave)
                onMouseLeave(e);
        }, rel: rel, style: {
            display: 'inline-block',
            textDecoration: 'none',
            width,
        }, target: target, to: to + location.search, children: _jsx(Container, { alignContent: alignContent, alignItems: menu ? Align.Stretch : alignItems, active: active, backgroundColor: updatedBackgroundColor, borderRadius: borderRadius, boxShadow: {
                blurRadius: 8,
                color: backgroundColor,
                offsetX: 0,
                offsetY: 3,
                opacity: 35,
                spreadRadius: 3,
            }, className: `${className} ${exactMatch ? activeClassName : ''} link`, focused: focused, grow: grow, hover: hover, margin: margin, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop, orientation: menu ? Orientation.Vertical : orientation, padding: padding, paddingBottom: menu ? paddingLeft : paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, paddingTop: paddingTop, children: content }, void 0) }, void 0));
});
const Container = styled.span `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};

  cursor: pointer;
  text-decoration: none;

  * {
    cursor: pointer;
  }

  &:before {
    border-radius: calc(${props => props.borderRadius} + 3px);
  }
`;
//# sourceMappingURL=NavigationLink.js.map