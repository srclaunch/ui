/// <reference types="react" />
export declare enum VerificationCodeType {
    Alpha = "alpha",
    AlphaNumeric = "alphanumeric",
    Numeric = "numeric"
}
import { TextInputProps } from '../text/TextInput';
declare type VerificationCodeInputProps = TextInputProps & {
    length?: number;
    codeType?: VerificationCodeType;
};
export declare const VerificationCodeInput: import("react").MemoExoticComponent<({ as, className, defaultValue, events, length, name, placeholder, states, textSize, textColor, codeType, ...props }: VerificationCodeInputProps) => React.ReactElement>;
export {};
//# sourceMappingURL=VerificationCodeInput.d.ts.map