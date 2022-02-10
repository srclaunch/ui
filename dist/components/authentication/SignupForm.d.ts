import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type SignupFormProps = ContainerProps<HTMLDivElement, {
    onSignupSuccess?: ({ userId }: {
        userId: string;
    }) => unknown;
    title?: string;
}>;
export declare const SignupForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onSignupSuccess, title, }: SignupFormProps) => ReactElement>;
export {};
//# sourceMappingURL=SignupForm.d.ts.map