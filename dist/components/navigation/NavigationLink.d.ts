import { ReactElement } from 'react';
import { LinkProps, Size } from '../../types';
import { IconProps } from '../media/Icon';
import { MenuItemProps } from '../menus/MenuItem';
import { LabelProps } from '../typography/Label';
export declare type NavigationLinkProps = LabelProps & LinkProps & {
    readonly activeClassName?: string;
    readonly icon?: IconProps;
    readonly inline?: boolean;
    readonly label?: string;
    readonly matchExactPath?: boolean;
    readonly menu?: readonly MenuItemProps[];
    readonly size?: Size;
};
export declare const NavigationLink: import("react").MemoExoticComponent<({ activeClassName, alignment, as, background, borderRadius, children, className, cursor, events, inline, label, lineHeight, margin, matchExactPath, menu, padding, rel, states, target, textColor, textSize, textWeight, to, ...props }: NavigationLinkProps) => ReactElement>;
//# sourceMappingURL=NavigationLink.d.ts.map