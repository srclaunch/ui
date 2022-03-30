import { ReactElement } from 'react';
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
export declare type ButtonProps = ContainerProps & LabelProps & {
    readonly form?: string;
    readonly label?: string;
    readonly type?: ButtonType;
};
export declare const Button: import("react").MemoExoticComponent<({ alignment, as, background, border, borderRadius, children, className, cursor, form, icon, label, lineHeight, padding, states, textAlign, textColor, textDecoration, textSize, textWeight, type, ...props }: ButtonProps) => ReactElement>;
//# sourceMappingURL=Button.d.ts.map