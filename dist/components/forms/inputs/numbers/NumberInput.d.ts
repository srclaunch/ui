/// <reference types="react" />
import { AppearanceProps, InputProps, SizeProps, TextColor, TextProps } from '../../../../types';
import { Icon } from '../../../media/Icon';
export declare type NumberInputProps<T = HTMLInputElement, V = number> = {
    readonly icon?: typeof Icon;
    readonly placeholderTextColor?: TextColor;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
} & AppearanceProps & SizeProps & TextProps & InputProps<T, V>;
export declare const NumberInput: import("react").MemoExoticComponent<({ as, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, prefix, size, suffix, textColor, textWeight, validation, ...props }: NumberInputProps) => React.ReactElement>;
//# sourceMappingURL=NumberInput.d.ts.map