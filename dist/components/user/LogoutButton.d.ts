import { ReactElement } from 'react';
import { LabelProps } from '../typography/Label';
import { ButtonProps } from '../forms/buttons/Button';
export declare type LogoutButtonProps<T = {}> = ButtonProps<HTMLButtonElement, LabelProps<HTMLLabelElement, {
    label?: string;
    onLogoutSuccess?: () => unknown;
    showArrow?: boolean;
    showUnderline?: boolean;
} & T>>;
export declare const LogoutButton: import("react").MemoExoticComponent<({ icon, onLogoutSuccess, label, showArrow, textColor, ...props }: LogoutButtonProps) => ReactElement>;
//# sourceMappingURL=LogoutButton.d.ts.map