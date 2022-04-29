import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from './TextInput';
export declare type PasswordInputProps = TextInputProps & {
    readonly autoComplete?: AutoComplete.CurrentPassword | AutoComplete.NewPassword;
    readonly confirmPasswordLabel?: string;
    readonly showConfirmPassword?: boolean;
    readonly showPasswordStrength?: boolean;
};
export declare const PasswordInput: import("react").MemoExoticComponent<({ autoComplete, confirmPasswordLabel, events, label, name, showConfirmPassword, showPasswordStrength, validation, ...props }: PasswordInputProps) => ReactElement>;
//# sourceMappingURL=PasswordInput.d.ts.map