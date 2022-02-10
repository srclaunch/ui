/// <reference types="react" />
import { VerificationCode } from '@srclaunch/types';
export declare enum VerificationCodeType {
    Alpha = "alpha",
    AlphaNumeric = "alphanumeric",
    Numeric = "numeric"
}
import { TextInputProps } from '../text/TextInput';
declare type VerificationCodeInputProps = TextInputProps<HTMLInputElement, VerificationCode, {
    length?: number;
    codeType?: VerificationCodeType;
}>;
export declare const VerificationCodeInput: import("react").MemoExoticComponent<({ as, className, defaultValue, hidden, length, name, onChange, onKeyPress, placeholder, size, textColor, codeType, ...props }: VerificationCodeInputProps) => React.ReactElement>;
export {};
//# sourceMappingURL=VerificationCodeInput.d.ts.map