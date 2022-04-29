import { ReactElement } from 'react';
import { ContainerProps } from '../../../layout/Container';
export declare enum VerificationCodeType {
    Alpha = "alpha",
    AlphaNumeric = "alphanumeric",
    Numeric = "numeric"
}
import { InputProps } from '../shared/Input';
declare type VerificationCodeInputProps = ContainerProps & InputProps<string> & {
    readonly length?: number;
    readonly codeType?: VerificationCodeType;
};
export declare const VerificationCodeInput: import("react").MemoExoticComponent<({ as, className, defaultValue, events, length, name, placeholder, states, textSize, textColor, codeType, ...props }: VerificationCodeInputProps) => ReactElement>;
export {};
//# sourceMappingURL=VerificationCodeInput.d.ts.map