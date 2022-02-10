import { ReactElement } from 'react';
import { Condition, DateTime } from '@srclaunch/types';
import { Icon } from '../../../media/Icon';
import { InputProps } from '../../../../types';
declare type DateTimeInputProps = InputProps<HTMLInputElement, DateTime, {
    resetIcon?: typeof Icon;
}>;
export declare const DateTimeInput: import("react").MemoExoticComponent<({ error, resetIcon, defaultValue, onChange, validation, }: DateTimeInputProps) => ReactElement>;
export {};
//# sourceMappingURL=DateTimeInput.d.ts.map