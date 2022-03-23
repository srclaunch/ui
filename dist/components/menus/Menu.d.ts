import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
import { MenuItemProps } from './MenuItem';
export declare type MenuProps = ContainerProps & {
    readonly onItemClick?: (item: MenuItemProps) => void;
    readonly menu?: readonly MenuItemProps[];
};
export declare const Menu: import("react").MemoExoticComponent<({ as, background, borderRadius, className, menu, events, onItemClick, padding, ...props }: MenuProps) => ReactElement>;
//# sourceMappingURL=Menu.d.ts.map