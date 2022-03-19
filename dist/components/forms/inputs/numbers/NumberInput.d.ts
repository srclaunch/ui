/// <reference types="react" />
import { InputProps, TextColor } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type NumberInputProps = InputContainerProps & InputProps<number> & TextProps & {
    readonly icon?: typeof Icon;
    readonly placeholderTextColor?: TextColor;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
};
export declare const NumberInput: import("react").MemoExoticComponent<({ as, background, border, className, cursor, defaultValue, events, icon, label, name, placeholder, prefix, shadow, textSize, states, suffix, textColor, textWeight, validation, ...props }: NumberInputProps) => React.ReactElement>;
//# sourceMappingURL=NumberInput.d.ts.map