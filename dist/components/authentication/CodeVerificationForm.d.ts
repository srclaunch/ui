import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type CodeVerificationFormProps = ContainerProps<HTMLDivElement, {
    onVerificationSuccess?: () => unknown;
    userId: string;
}>;
export declare const CodeVerificationForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onVerificationSuccess, userId, }: CodeVerificationFormProps) => ReactElement>;
export {};
//# sourceMappingURL=CodeVerificationForm.d.ts.map