import { ReactElement } from 'react';
import { AppearanceProps, ClipboardEventProps, FocusEventProps, InputProps, KeyboardEventProps, MouseEventProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
import { TextProps } from '../../../typography/Text';
export declare enum TextInputType {
    EmailAddress = "email",
    Text = "text",
    Password = "password",
    Search = "search"
}
export declare type TextInputProps<E = HTMLInputElement, T = string, P = Record<string, unknown>> = InputProps<E, T, TextProps<E, ClipboardEventProps<E, FocusEventProps<E, KeyboardEventProps<E, MouseEventProps<E, AppearanceProps<{
    readonly icon?: IconProps;
    readonly inputType?: TextInputType;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
}>>>>>>> & P;
export declare const TextInput: import("react").MemoExoticComponent<({ autoComplete, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, flat, hidden, icon, inProgress, inputType, label, name, onChange, prefix, placeholder, size, spellCheck, suffix, textColor, textWeight, validation, ...props }: TextInputProps) => ReactElement>;
//# sourceMappingURL=TextInput.d.ts.map