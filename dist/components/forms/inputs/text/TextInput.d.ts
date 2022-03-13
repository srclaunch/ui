import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare enum TextInputType {
    EmailAddress = "email",
    Text = "text",
    Password = "password",
    Search = "search"
}
export declare type TextInputProps<V = string> = {
    readonly icon?: IconProps;
    readonly inputType?: TextInputType;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
} & InputProps<HTMLInputElement, V> & InputContainerProps & TextProps;
export declare const TextInput: import("react").MemoExoticComponent<({ autoComplete, background, border, className, cursor, defaultValue, error, hidden, icon, inProgress, inputType, label, lineHeight, name, onChange, prefix, placeholder, shadow, spellCheck, suffix, textColor, textWeight, validation, ...props }: TextInputProps) => ReactElement>;
//# sourceMappingURL=TextInput.d.ts.map