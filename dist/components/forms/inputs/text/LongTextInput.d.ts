import { LongText } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type LongTextInputProps<V = LongText> = {
    readonly spellCheck?: boolean;
} & InputProps<HTMLTextAreaElement, V> & InputContainerProps & TextProps;
export declare const LongTextInput: import("react").MemoExoticComponent<({ background, border, className, defaultValue, error, hidden, inProgress, label, lineHeight, name, onChange, placeholder, shadow, spellCheck, textColor, validation, }: LongTextInputProps) => ReactElement>;
//# sourceMappingURL=LongTextInput.d.ts.map