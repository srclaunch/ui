import { ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { InputValueChangeHandler } from '../../../../types/events/input';
declare type EmojiInputProps<T = {}> = InputProps<{
    defaultValue?: string;
    onChange?: InputValueChangeHandler<string>;
} & T>;
export declare const EmojiInput: import("react").MemoExoticComponent<({ defaultValue }: EmojiInputProps) => ReactElement>;
export {};
//# sourceMappingURL=EmojiInput.d.ts.map