import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type SignupFormProps = {
    readonly onSignupSuccess?: ({ userId, }: {
        readonly userId: string;
    }) => unknown;
    readonly title?: string;
} & ContainerProps;
export declare const SignupForm: import("react").MemoExoticComponent<({ background, borderRadius, onSignupSuccess, size, title, ...props }: SignupFormProps) => ReactElement>;
export {};
//# sourceMappingURL=SignupForm.d.ts.map