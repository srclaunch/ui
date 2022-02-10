import { MouseEvent, ReactElement } from 'react';
import { IconProps } from '../media/Icon';
import { LabelProps } from '../typography/Label';
export declare type MenuItemProps<E = HTMLAnchorElement | HTMLButtonElement, P = {}> = Omit<LabelProps<E, {
    component?: ReactElement;
    icon?: IconProps;
    label?: string;
    title?: string;
    to?: string;
    value?: any;
}>, 'onClick'> & {
    onClick?: (menuItem?: MenuItemProps, event?: MouseEvent) => void;
} & P;
export declare const MenuItem: import("react").MemoExoticComponent<({ active, as, backgroundColor, borderRadius, boxShadow, className, component, focus, hover, icon, label, onClick, title, to, value, ...props }: MenuItemProps) => ReactElement>;
//# sourceMappingURL=MenuItem.d.ts.map