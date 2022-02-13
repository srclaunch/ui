import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink, useLocation, useMatch, useResolvedPath, } from '@srclaunch/web-application-state';
import { memo, useEffect, useState } from 'react';
import { Align, Amount, Orientation, Size, TextColors, } from '../../types';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
export const NavigationLink = memo(({ active, activeClassName = 'active', alignContent, alignItems = Align.Left, as = 'span', backgroundColor, borderRadius = Amount.Less, children, className = '', focus, grow = true, hover, inline = false, label, lineHeight = Size.Smaller, margin, marginBottom, marginLeft, marginRight, marginTop, menu, onClick, onMouseEnter, onMouseLeave, orientation = Orientation.Horizontal, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, rel, target, textColor = TextColors.Primary, textSize, textWeight, to, ...props }) => {
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
    return (_jsx(NavLink, { className: `${className} navigation-link`, onBlur: () => setFocused(false), onFocus: () => setFocused(true), rel: rel, target: target, to: to + location.search, style: {
            display: inline ? 'inline-flex' : 'flex',
            lineHeight: inline ? Size.Smaller : lineHeight,
            textDecoration: 'none',
        }, children: _jsx(Container, { alignContent: alignContent, alignItems: menu ? Align.Stretch : alignItems, active: active, as: as, backgroundColor: updatedBackgroundColor, borderRadius: borderRadius, boxShadow: {
                blurRadius: 8,
                color: backgroundColor,
                offsetX: 0,
                offsetY: 3,
                opacity: 35,
                spreadRadius: 3,
            }, className: `${className} ${exactMatch ? activeClassName : ''} link`, focus: focus, focused: focused, grow: grow, hover: hover, margin: margin, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop, onClick: onClick, onMouseEnter: e => {
                setHovered(true);
                // @ts-ignore
                if (onMouseEnter)
                    onMouseEnter(e);
            }, onMouseLeave: e => {
                setHovered(false);
                // @ts-ignore
                if (onMouseLeave)
                    onMouseLeave(e);
            }, orientation: menu ? Orientation.Vertical : orientation, padding: padding, paddingBottom: menu ? paddingLeft : paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, paddingTop: paddingTop, ...props, children: label ? (_jsx(Label, { lineHeight: lineHeight, textColor: updatedTextColor, textSize: textSize, textWeight: textWeight, ...props, children: label }, void 0)) : (children) }, void 0) }, void 0));
});
//# sourceMappingURL=NavigationLink.js.map