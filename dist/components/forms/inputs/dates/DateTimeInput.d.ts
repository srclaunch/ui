import { ReactElement } from 'react';
import { Condition, DateTime } from '@srclaunch/types';
import { Icon } from '../../../media/Icon';
import { InputContainerProps } from '../shared/InputContainer';
import { InputProps } from '../../../../types';
declare type DateTimeInputProps = InputContainerProps & InputProps<DateTime> & {
    resetIcon?: typeof Icon;
};
export declare const DateTimeInput: import("react").MemoExoticComponent<({ events, defaultValue, states, resetIcon, validation, }: DateTimeInputProps) => ReactElement>;
export {};
//# sourceMappingURL=DateTimeInput.d.ts.map