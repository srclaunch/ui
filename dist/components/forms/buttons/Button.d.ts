import { ReactElement } from 'react';
import { SizeProps } from '../../../types/index';
import { IconProps } from '../../media/Icon';
import { ContainerProps } from '../../layout/Container';
import { LabelProps } from '../../typography/Label';
export declare enum ButtonType {
    Default = "black",
    Error = "error",
    Info = "info",
    Inline = "inline",
    Link = "link",
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Transparent = "transparent",
    Warning = "warning",
    White = "white"
}
export declare type ButtonProps = {
    readonly disabled?: boolean;
    readonly form?: string;
    readonly fullWidth?: boolean;
    readonly icon?: IconProps;
    readonly label?: string;
    readonly type?: ButtonType;
} & ContainerProps<HTMLButtonElement> & LabelProps & SizeProps;
export declare const Button: import("react").MemoExoticComponent<({ active, alignItems, alignContent, backgroundColor, borderRadius, children, className, cursor, disabled, form, fullWidth, hover, icon, label, onClick, onMouseEnter, onMouseLeave, orientation, size, textColor, textSize, textWeight, type, ...props }: ButtonProps) => ReactElement>;
//# sourceMappingURL=Button.d.ts.map