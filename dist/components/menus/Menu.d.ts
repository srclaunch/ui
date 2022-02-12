import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MenuItemProps } from './MenuItem';
export declare type MenuProps = {
    readonly onItemClick?: (item: MenuItemProps) => void;
    readonly menu?: readonly MenuItemProps[];
    readonly menuItemProps?: MenuItemProps;
} & ContainerProps;
export declare const Menu: import("react").MemoExoticComponent<({ as, backgroundColor, borderRadius, boxShadow, className, menu, menuItemProps, maxHeight, onClick, onItemClick, orientation, minWidth, padding, ...props }: MenuProps) => ReactElement>;
//# sourceMappingURL=Menu.d.ts.map