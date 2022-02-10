import { ReactElement } from 'react';
import { IconProps, InputContainerProps, InputProps, MouseEventProps, TextProps } from '../../../../types';
declare type DropdownControlProps = InputContainerProps<HTMLDivElement, InputProps<HTMLInputElement, any, TextProps<HTMLSpanElement, {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly placeholderText?: string;
    readonly menuVisible: boolean;
} & MouseEventProps<HTMLButtonElement>>>>;
export declare const DropdownControl: import("react").MemoExoticComponent<({ backgroundColor, border, borderRadius, className, component, error, focused, icon, label, menuVisible, onFocus, onBlur, onClick, placeholder, ref, size, textColor, ...props }: DropdownControlProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownControl.d.ts.map