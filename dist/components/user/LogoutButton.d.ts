import { ReactElement } from 'react';
import { ButtonProps } from '../forms/buttons/Button';
export declare type LogoutButtonProps = {
    readonly label?: string;
    readonly onLogoutSuccess?: () => unknown;
    readonly showArrow?: boolean;
    readonly showUnderline?: boolean;
} & ButtonProps;
export declare const LogoutButton: import("react").MemoExoticComponent<({ icon, onLogoutSuccess, label, showArrow, textColor, ...props }: LogoutButtonProps) => ReactElement>;
//# sourceMappingURL=LogoutButton.d.ts.map