import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, DepthShadow, Orientation, Overflow, TextColors, TextSize, } from '../../types';
import { Container } from '../layout/Container';
import { MenuItem } from './MenuItem';
export const Menu = memo(({ as = 'nav', backgroundColor = BackgroundColors.Lightest, borderRadius = Amount.Less, boxShadow = DepthShadow.Surface, className = '', menu, menuItemProps = {
    active: {
        backgroundColor: BackgroundColors.Primary,
        boxShadow: {
            blurRadius: 7,
            color: BackgroundColors.Primary,
            offsetX: 0,
            offsetY: 2,
            opacity: 35,
            spreadRadius: 4,
        },
        textColor: TextColors.PrimaryContrast,
    },
    borderRadius: Amount.Least,
    focus: {
        textColor: TextColors.PrimaryContrast,
    },
    hover: {
        backgroundColor: BackgroundColors.Primary,
        textColor: TextColors.PrimaryContrast,
    },
    padding: Amount.None,
    paddingLeft: Amount.Less,
    paddingRight: Amount.Less,
    textSize: TextSize.Small,
}, maxHeight = 120, onClick, onItemClick, orientation = Orientation.Vertical, minWidth = 80, padding = Amount.Least, ...props }) => {
    return (_jsx(Container, { as: as, backgroundColor: backgroundColor, boxShadow: boxShadow, borderRadius: borderRadius, className: `${className} menu`, maxHeight: maxHeight, minWidth: minWidth, orientation: orientation, overflow: Overflow.ScrollVertical, padding: padding, ...props, children: menu &&
            menu.map((item, key) => {
                return (_jsx(MenuItem, { onClick: () => {
                        if (onItemClick) {
                            onItemClick(item);
                        }
                    }, ...menuItemProps, ...item }, key));
            }) }, void 0));
});
//# sourceMappingURL=Menu.js.map