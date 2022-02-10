import { Condition, ISO8601String } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
import { TextProps } from '../../../typography/Text';
declare type DateInputProps<E = HTMLInputElement, V = ISO8601String> = InputProps<E, V, TextProps<E, {
    readonly resetIcon?: IconProps;
}>>;
export declare const DateInput: import("react").MemoExoticComponent<({ backgroundColor, boxShadow, border, className, error, resetIcon, defaultValue, label, onChange, size, validation, ...props }: DateInputProps) => ReactElement>;
export {};
//# sourceMappingURL=DateInput.d.ts.map