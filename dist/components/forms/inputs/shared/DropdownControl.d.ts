import { ComponentRef, ReactElement } from 'react';
import { IconProps } from '../../../media/Icon';
import { TextProps } from '../../../typography/Text';
import { InputContainerProps } from './InputContainer';
declare type DropdownControlProps = {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly placeholder?: string;
    readonly menuVisible: boolean;
    readonly ref?: ComponentRef<any>;
} & InputContainerProps & TextProps;
export declare const DropdownControl: import("react").MemoExoticComponent<({ alignment, background, border, borderRadius, className, component, depth, error, focused, icon, label, menuVisible, onFocus, onBlur, onClick, placeholder, size, textSize, textColor, ...props }: DropdownControlProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownControl.d.ts.map