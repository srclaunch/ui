import { LongText } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AppearanceProps, InputProps, TextProps } from '../../../../types';
export declare type LongTextInputProps<V = LongText> = {
    readonly spellCheck?: boolean;
} & InputProps<HTMLTextAreaElement, V> & AppearanceProps & TextProps;
export declare const LongTextInput: import("react").MemoExoticComponent<({ backgroundColor, border, boxShadow, className, defaultValue, error, flat, hidden, inProgress, label, lineHeight, name, onChange, placeholder, size, spellCheck, textColor, validation, }: LongTextInputProps) => ReactElement>;
//# sourceMappingURL=LongTextInput.d.ts.map