import { ReactElement } from 'react';
import { CommonComponentProps, LinkProps, Size } from '../../types';
import { IconProps } from '../media/Icon';
import { MenuItemProps } from '../menus/MenuItem';
import { LabelProps } from '../typography/Label';
import { ContainerProps } from '../layout/Container';
export declare type NavigationLinkProps = {
    readonly activeClassName?: string;
    readonly icon?: IconProps;
    readonly inline?: boolean;
    readonly menu?: readonly MenuItemProps[];
    readonly size?: Size;
} & CommonComponentProps<HTMLAnchorElement> & ContainerProps<HTMLAnchorElement> & LabelProps & LinkProps;
export declare const NavigationLink: import("react").MemoExoticComponent<({ active, activeClassName, alignContent, alignItems, backgroundColor, borderRadius, children, className, focus, grow, hover, icon, margin, marginBottom, marginLeft, marginRight, marginTop, menu, onClick, onMouseEnter, onMouseLeave, orientation, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, rel, size, target, textColor, textSize, textWeight, to, width, ...props }: NavigationLinkProps) => ReactElement>;
//# sourceMappingURL=NavigationLink.d.ts.map