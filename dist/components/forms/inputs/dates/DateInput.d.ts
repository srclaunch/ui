import { Condition, ISO8601String } from '@srclaunch/types';
import { ReactElement } from 'react';
import { AppearanceProps, InputProps, TextProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
export declare type DateInputProps = {
    readonly resetIcon?: IconProps;
} & AppearanceProps & InputProps<HTMLInputElement, ISO8601String> & TextProps;
export declare const DateInput: import("react").MemoExoticComponent<({ backgroundColor, boxShadow, border, className, error, resetIcon, defaultValue, label, onChange, size, validation, ...props }: DateInputProps) => ReactElement>;
//# sourceMappingURL=DateInput.d.ts.map