import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type SignupFormProps = ContainerProps<HTMLDivElement, {
    readonly onSignupSuccess?: ({ userId, }: {
        readonly userId: string;
    }) => unknown;
    readonly title?: string;
}>;
export declare const SignupForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onSignupSuccess, title, }: SignupFormProps) => ReactElement>;
export {};
//# sourceMappingURL=SignupForm.d.ts.map