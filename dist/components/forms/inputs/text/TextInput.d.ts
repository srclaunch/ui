import { ReactElement } from 'react';
import { AppearanceProps, InputProps, TextProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
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
} & InputProps<HTMLInputElement, V> & AppearanceProps & TextProps;
export declare const TextInput: import("react").MemoExoticComponent<({ autoComplete, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, flat, hidden, icon, inProgress, inputType, label, name, onChange, prefix, placeholder, size, spellCheck, suffix, textColor, textWeight, validation, ...props }: TextInputProps) => ReactElement>;
//# sourceMappingURL=TextInput.d.ts.map