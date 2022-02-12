import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type CodeVerificationFormProps = {
    readonly onVerificationSuccess?: () => unknown;
    readonly userId: string;
} & ContainerProps<HTMLDivElement>;
export declare const CodeVerificationForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onVerificationSuccess, userId, }: CodeVerificationFormProps) => ReactElement>;
export {};
//# sourceMappingURL=CodeVerificationForm.d.ts.map