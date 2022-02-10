import { ReactElement } from 'react';
import { ButtonProps } from '../forms/buttons/Button';
import { LabelProps } from '../typography/Label';
export declare type LogoutButtonProps<T = {}> = ButtonProps<HTMLButtonElement, LabelProps<HTMLLabelElement, {
    readonly label?: string;
    readonly onLogoutSuccess?: () => unknown;
    readonly showArrow?: boolean;
    readonly showUnderline?: boolean;
} & T>>;
export declare const LogoutButton: import("react").MemoExoticComponent<({ icon, onLogoutSuccess, label, showArrow, textColor, ...props }: LogoutButtonProps) => ReactElement>;
//# sourceMappingURL=LogoutButton.d.ts.map