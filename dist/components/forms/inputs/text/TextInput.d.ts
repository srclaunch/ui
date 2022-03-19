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
export declare type TextInputProps = InputContainerProps & InputProps<string> & TextProps & {
    readonly icon?: IconProps;
    readonly inputType?: TextInputType;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
};
export declare const TextInput: import("react").MemoExoticComponent<({ autoComplete, background, border, className, cursor, defaultValue, events, icon, inputType, label, lineHeight, name, prefix, placeholder, shadow, spellCheck, states, suffix, textColor, textWeight, validation, ...props }: TextInputProps) => ReactElement>;
//# sourceMappingURL=TextInput.d.ts.map