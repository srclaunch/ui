import { MouseEvent, ReactElement } from 'react';
import { MenuItemProps } from './MenuItem';
import { ContainerProps } from '../layout/Container';
export declare type MenuProps<E = HTMLElement, T = any, P = {}> = Omit<ContainerProps<E, {
    menu?: MenuItemProps<T>[];
    menuItemProps?: MenuItemProps;
}>, 'onClick'> & {
    onClick?: (menuItem?: MenuItemProps, event?: MouseEvent) => void;
} & P;
export declare const Menu: import("react").MemoExoticComponent<({ as, backgroundColor, borderRadius, boxShadow, className, menu, menuItemProps, maxHeight, onClick, orientation, minWidth, padding, ...props }: MenuProps) => ReactElement>;
//# sourceMappingURL=Menu.d.ts.map