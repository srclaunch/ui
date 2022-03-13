import { ReactElement } from 'react';
import { LinkProps, Size } from '../../types';
import { ContainerProps } from '../layout/Container';
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
} & ContainerProps<HTMLAnchorElement> & LabelProps<HTMLAnchorElement> & LinkProps;
export declare const NavigationLink: import("react").MemoExoticComponent<({ active, activeClassName, alignment, as, background, borderRadius, children, className, focus, hover, inline, label, lineHeight, margin, menu, onClick, onMouseEnter, onMouseLeave, padding, rel, target, textColor, textSize, textWeight, to, ...props }: NavigationLinkProps) => ReactElement>;
//# sourceMappingURL=NavigationLink.d.ts.map