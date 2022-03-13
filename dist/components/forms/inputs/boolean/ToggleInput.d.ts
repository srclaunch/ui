/// <reference types="react" />
import { InputProps } from '../../../../types';
export declare type ToggleInputProps<E = HTMLInputElement> = {
    readonly trueLabel?: string;
    readonly falseLabel?: string;
} & InputProps<E, boolean>;
export declare const ToggleInput: import("react").MemoExoticComponent<({ className, defaultValue, falseLabel, label, onChange, trueLabel, size, }: ToggleInputProps) => React.ReactElement>;
//# sourceMappingURL=ToggleInput.d.ts.map