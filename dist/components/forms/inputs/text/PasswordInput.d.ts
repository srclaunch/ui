import { Condition, Password } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AutoComplete } from '../../../../types';
import { TextInputProps } from './TextInput';
export declare type PasswordInputProps = {
    readonly autoComplete?: AutoComplete.CurrentPassword | AutoComplete.NewPassword;
    readonly confirmPasswordLabel?: string;
    readonly showConfirmPassword?: boolean;
    readonly showPasswordStrength?: boolean;
} & TextInputProps<Password>;
export declare const PasswordInput: import("react").MemoExoticComponent<({ autoComplete, confirmPasswordLabel, label, name, onChange, showConfirmPassword, showPasswordStrength, validation, ...props }: PasswordInputProps) => ReactElement>;
//# sourceMappingURL=PasswordInput.d.ts.map