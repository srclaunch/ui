/// <reference types="react" />
import { BackgroundProps, BorderProps, ClipboardEventProps, FocusEventProps, InputProps, MouseEventProps, KeyboardEventProps, SizeProps, TextColor } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { TextProps } from '../../../typography/Text';
export declare type NumberInputProps<E = HTMLInputElement, T = number, P = {}> = InputProps<E, number, {
    icon?: typeof Icon;
    placeholderTextColor?: TextColor;
    prefix?: string;
    spellCheck?: boolean;
    suffix?: string;
} & BackgroundProps & BorderProps & ClipboardEventProps<HTMLInputElement> & FocusEventProps<HTMLInputElement> & KeyboardEventProps<HTMLInputElement> & MouseEventProps<HTMLInputElement> & SizeProps & TextProps> & P;
export declare const NumberInput: import("react").MemoExoticComponent<({ as, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, prefix, size, suffix, textColor, textWeight, validation, ...props }: NumberInputProps) => React.ReactElement>;
//# sourceMappingURL=NumberInput.d.ts.map