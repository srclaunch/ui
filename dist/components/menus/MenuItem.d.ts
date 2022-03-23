import { ReactElement } from 'react';
import { ButtonProps } from '../forms/buttons/Button';
import { IconProps } from '../media/Icon';
export declare type MenuItemProps = ButtonProps & {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly title?: string;
    readonly to?: string;
    readonly value?: any;
};
export declare const MenuItem: import("react").MemoExoticComponent<({ alignment, as, background, borderRadius, className, component, events, icon, label, lineHeight, shadow, states, to, value, ...props }: MenuItemProps) => ReactElement>;
//# sourceMappingURL=MenuItem.d.ts.map