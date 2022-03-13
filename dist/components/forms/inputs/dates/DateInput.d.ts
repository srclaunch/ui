import { Condition, ISO8601String } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type DateInputProps = {
    readonly resetIcon?: IconProps;
} & InputContainerProps & InputProps<HTMLInputElement, ISO8601String> & TextProps;
export declare const DateInput: import("react").MemoExoticComponent<({ background, border, className, error, resetIcon, defaultValue, label, onChange, shadow, textSize, validation, ...props }: DateInputProps) => ReactElement>;
//# sourceMappingURL=DateInput.d.ts.map