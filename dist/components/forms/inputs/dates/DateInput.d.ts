import { Condition, ISO8601String } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { IconProps } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { TextProps } from '../../../typography/Text';
export declare type DateInputProps = InputContainerProps & InputProps<ISO8601String> & TextProps & {
    readonly resetIcon?: IconProps;
};
export declare const DateInput: import("react").MemoExoticComponent<({ background, border, className, events, defaultValue, label, resetIcon, states, shadow, textSize, validation, ...props }: DateInputProps) => ReactElement>;
//# sourceMappingURL=DateInput.d.ts.map