/// <reference types="react" />
import { InputProps, TextColor } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type NumberInputProps<T = HTMLInputElement, V = number> = {
    readonly icon?: typeof Icon;
    readonly placeholderTextColor?: TextColor;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
} & InputContainerProps & InputProps<T, V> & TextProps;
export declare const NumberInput: import("react").MemoExoticComponent<({ as, background, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, prefix, shadow, textSize, suffix, textColor, textWeight, validation, ...props }: NumberInputProps) => React.ReactElement>;
//# sourceMappingURL=NumberInput.d.ts.map