/// <reference types="react" />
import { InputProps } from '../../../../types';
import { ContainerProps } from '../../../layout/Container';
export declare type ToggleInputProps = ContainerProps & InputProps<boolean> & {
    readonly trueLabel?: string;
    readonly falseLabel?: string;
};
export declare const ToggleInput: import("react").MemoExoticComponent<({ className, defaultValue, events, falseLabel, label, trueLabel, size, }: ToggleInputProps) => React.ReactElement>;
//# sourceMappingURL=ToggleInput.d.ts.map