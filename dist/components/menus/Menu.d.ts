import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MenuItemProps } from './MenuItem';
export declare type MenuProps = ContainerProps & {
    readonly onItemClick?: (item: MenuItemProps) => void;
    readonly menu?: readonly MenuItemProps[];
    readonly menuItemProps?: MenuItemProps;
};
export declare const Menu: import("react").MemoExoticComponent<({ as, background, borderRadius, className, menu, menuItemProps, events, onItemClick, padding, shadow, ...props }: MenuProps) => ReactElement>;
//# sourceMappingURL=Menu.d.ts.map