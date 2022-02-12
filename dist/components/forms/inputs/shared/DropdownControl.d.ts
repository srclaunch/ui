import { ComponentRef, ReactElement } from 'react';
import { IconProps, InputContainerProps, TextProps } from '../../../../types';
declare type DropdownControlProps = {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly placeholder?: string;
    readonly menuVisible: boolean;
    readonly ref?: ComponentRef<any>;
} & InputContainerProps & TextProps;
export declare const DropdownControl: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, className, component, error, focused, icon, label, menuVisible, onFocus, onBlur, onClick, placeholder, ref, size, textColor, ...props }: DropdownControlProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownControl.d.ts.map