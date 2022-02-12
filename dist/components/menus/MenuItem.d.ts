import { ReactElement } from 'react';
import { ButtonProps } from '../forms/buttons/Button';
import { IconProps } from '../media/Icon';
import { NavigationLinkProps } from '../navigation/NavigationLink';
import { LabelProps } from '../typography/Label';
export declare type MenuItemProps = {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly onClick?: (menuItem?: MenuItemProps) => void;
    readonly title?: string;
    readonly to?: string;
    readonly value?: any;
} & Omit<LabelProps<NavigationLinkProps | ButtonProps>, 'onClick'> & {
    readonly onClick?: (menuItem?: MenuItemProps) => void;
};
export declare const MenuItem: import("react").MemoExoticComponent<({ active, as, backgroundColor, borderRadius, boxShadow, className, component, focus, hover, icon, label, onClick, title, to, value, ...props }: MenuItemProps) => ReactElement>;
//# sourceMappingURL=MenuItem.d.ts.map