import { ReactElement } from 'react';
import { LinkProps, Size } from '../../types';
import { IconProps } from '../media/Icon';
import { MenuItemProps } from '../menus/MenuItem';
import { LabelProps } from '../typography/Label';
export declare type NavigationLinkProps = {
    readonly activeClassName?: string;
    readonly icon?: IconProps;
    readonly inline?: boolean;
    readonly label?: string;
    readonly menu?: readonly MenuItemProps[];
    readonly size?: Size;
} & LabelProps<HTMLAnchorElement> & LinkProps;
export declare const NavigationLink: import("react").MemoExoticComponent<({ active, activeClassName, alignContent, alignItems, backgroundColor, borderRadius, children, className, focus, grow, hover, icon, label, margin, marginBottom, marginLeft, marginRight, marginTop, menu, onClick, onMouseEnter, onMouseLeave, orientation, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, rel, size, target, textColor, textSize, textWeight, to, width, ...props }: NavigationLinkProps) => ReactElement>;
//# sourceMappingURL=NavigationLink.d.ts.map