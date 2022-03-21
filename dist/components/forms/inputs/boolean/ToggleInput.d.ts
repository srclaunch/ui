/// <reference types="react" />
import { ContainerProps } from '../../../layout/Container';
import { InputProps } from '../shared/Input';
export declare type ToggleInputProps = ContainerProps & InputProps<boolean> & {
    readonly trueLabel?: string;
    readonly falseLabel?: string;
};
export declare const ToggleInput: import("react").MemoExoticComponent<({ className, defaultValue, events, falseLabel, label, trueLabel, size, }: ToggleInputProps) => React.ReactElement>;
//# sourceMappingURL=ToggleInput.d.ts.map