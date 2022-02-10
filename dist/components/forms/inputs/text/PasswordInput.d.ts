import { Condition, Password } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from './TextInput';
export declare type PasswordInputProps = TextInputProps<HTMLInputElement, Password, {
    autoComplete?: AutoComplete.CurrentPassword | AutoComplete.NewPassword;
    confirmPasswordLabel?: string;
    showConfirmPassword?: boolean;
    showPasswordStrength?: boolean;
}>;
export declare const PasswordInput: import("react").MemoExoticComponent<({ autoComplete, confirmPasswordLabel, label, name, onChange, showConfirmPassword, showPasswordStrength, validation, ...props }: PasswordInputProps) => ReactElement>;
//# sourceMappingURL=PasswordInput.d.ts.map