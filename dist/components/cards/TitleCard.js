import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Align, Amount, BackgroundColors, DepthShadow, Orientation, Overflow, Position, Size, } from '../../types';
import { Icon } from '../media/Icon';
import { Title } from '../typography/Title';
import { Small } from '../typography/Small';
export const TitleCards = memo(({ children, className = 'title-cards', grow = false, minHeight = 82, orientation = Orientation.Horizontal, ...props }) => {
    return (_jsx(Container, { className: `${className} title-cards`, grow: grow, minHeight: minHeight, overflow: Overflow.ScrollHorizontal, paddingBottom: Amount.Default, ...props, children: _jsx(Container, { orientation: orientation, overflow: Overflow.ScrollHorizontal, position: Position.Absolute, children: children }, void 0) }, void 0));
});
export const TitleCard = memo(({ backgroundColor = BackgroundColors.Card, borderRadius = Amount.Least, boxShadow = DepthShadow.High, className = '', grow = true, flat = false, label, loading = false, marginRight = Amount.Default, orientation = Orientation.Horizontal, padding = Amount.Default, value, icon, width = 260, ...props }) => {
    return (_jsxs(Container, { backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: boxShadow, className: `${className} title-card`, flat: flat, grow: grow, marginRight: marginRight, orientation: orientation, padding: padding, width: width, ...props, children: [_jsx(LoadingOverlay, { visible: loading, spinnerSize: Size.Small }, void 0), icon && (_jsx(Container, { alignItems: Align.Center, alignContent: Align.Center, borderRadius: Amount.All, grow: false, marginRight: Amount.Default, paddingLeft: Amount.Less, paddingRight: Amount.Less, children: _jsx(Icon, { ...icon }, void 0) }, void 0)), !loading && (_jsxs(Container, { alignContent: Align.Center, alignItems: Align.Left, orientation: Orientation.Vertical, children: [_jsx(Small, { children: label }, void 0), _jsx(Title, { children: value }, void 0)] }, void 0))] }, void 0));
});
//# sourceMappingURL=TitleCard.js.map