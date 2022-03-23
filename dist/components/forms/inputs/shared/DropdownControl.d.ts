import { ComponentRef, ReactElement } from 'react';
import { IconProps } from '../../../media/Icon';
import { InputContainerProps } from './InputContainer';
declare type DropdownControlProps = InputContainerProps<string> & {
    readonly component?: ReactElement;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly placeholder?: string;
    readonly ref?: ComponentRef<any>;
};
export declare const DropdownControl: import("react").MemoExoticComponent<({ alignment, background, border, borderRadius, className, component, cursor, icon, label, placeholder, states, size, textSize, textColor, ...props }: DropdownControlProps) => ReactElement>;
export {};
//# sourceMappingURL=DropdownControl.d.ts.map