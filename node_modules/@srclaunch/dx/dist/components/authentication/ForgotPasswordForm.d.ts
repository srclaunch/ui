import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type ForgotPasswordFormProps = {
    readonly title?: string;
    readonly showSignupLink?: boolean;
    readonly signUpLinkLabel?: ReactElement;
    readonly signInButtonLabel?: ReactElement;
    readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps;
export declare const ForgotPasswordForm: import("react").MemoExoticComponent<({ background, borderRadius, size, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, ...props }: ForgotPasswordFormProps) => ReactElement>;
export {};
//# sourceMappingURL=ForgotPasswordForm.d.ts.map