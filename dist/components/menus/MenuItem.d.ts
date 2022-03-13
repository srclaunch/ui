import { ReactElement } from 'react';
import { IconProps } from '../media/Icon';
import { LabelProps } from '../typography/Label';
export declare type MenuItemProps = {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly title?: string;
    readonly to?: string;
    readonly value?: any;
} & LabelProps<HTMLAnchorElement | HTMLButtonElement>;
export declare const MenuItem: import("react").MemoExoticComponent<({ active, as, background, borderRadius, className, component, focus, hover, icon, label, lineHeight, onClick, shadow, title, to, value, ...props }: MenuItemProps) => ReactElement>;
//# sourceMappingURL=MenuItem.d.ts.map