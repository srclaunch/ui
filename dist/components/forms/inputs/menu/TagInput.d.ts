import { Primitive } from '@srclaunch/types';
import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { InputValueChangeHandler } from '../../../../types/events/input';
declare type TagInputProps<T = {}> = InputProps<{
    defaultValue?: string | number | boolean;
    onChange?: InputValueChangeHandler<Primitive>;
} & T>;
export declare const TagInput: import("react").MemoExoticComponent<({}: TagInputProps) => ReactElement>;
export {};
//# sourceMappingURL=TagInput.d.ts.map