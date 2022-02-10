import { Condition, SSN } from '@srclaunch/types';
import { ReactElement } from 'react';
import { BackgroundProps, BorderProps, ClipboardEventProps, FocusEventProps, InputProps, KeyboardEventProps, MouseEventProps, SizeProps } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { TextProps } from '../../../typography/Text';
export declare type SSNInputProps<E = HTMLInputElement, V = SSN, P = Record<string, unknown>> = InputProps<E, V, {
    readonly icon?: typeof Icon;
} & BackgroundProps & BorderProps & ClipboardEventProps<HTMLInputElement> & FocusEventProps<HTMLInputElement> & KeyboardEventProps<HTMLInputElement> & MouseEventProps<HTMLInputElement> & SizeProps & TextProps> & P;
export declare const SSNInput: import("react").MemoExoticComponent<({ as, backgroundColor, boxShadow, border, className, cursor, defaultValue, error, hidden, icon, inProgress, label, name, onChange, onKeyPress, placeholder, size, textColor, textWeight, validation, ...props }: SSNInputProps) => ReactElement>;
//# sourceMappingURL=SSNInput.d.ts.map