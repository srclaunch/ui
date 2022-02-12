import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MenuItemProps } from './MenuItem';
export declare type MenuProps = {
    readonly menu?: readonly MenuItemProps[];
    readonly menuItemProps?: MenuItemProps;
    readonly onClick?: (i?: MenuItemProps) => void;
} & Omit<ContainerProps, 'onClick'>;
export declare const Menu: import("react").MemoExoticComponent<({ as, backgroundColor, borderRadius, boxShadow, className, menu, menuItemProps, maxHeight, onClick, orientation, minWidth, padding, ...props }: MenuProps) => ReactElement>;
//# sourceMappingURL=Menu.d.ts.map