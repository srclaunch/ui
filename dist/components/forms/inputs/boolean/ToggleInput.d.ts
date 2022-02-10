/// <reference types="react" />
import { AppearanceProps, InputProps } from '../../../../types';
export declare type ToggleInputProps<E = HTMLInputElement, P = {}> = InputProps<E, boolean, AppearanceProps<{
    readonly trueLabel?: string;
    readonly falseLabel?: string;
}>> & P;
export declare const ToggleInput: import("react").MemoExoticComponent<({ backgroundColor, border, className, defaultValue, falseLabel, label, onChange, trueLabel, size, width, }: ToggleInputProps) => React.ReactElement>;
//# sourceMappingURL=ToggleInput.d.ts.map