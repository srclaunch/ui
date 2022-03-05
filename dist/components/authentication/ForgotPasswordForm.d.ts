import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type ForgotPasswordFormProps = {
    readonly title?: string;
    readonly showSignupLink?: boolean;
    readonly signUpLinkLabel?: ReactElement;
    readonly signInButtonLabel?: ReactElement;
    readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps<HTMLDivElement>;
export declare const ForgotPasswordForm: import("react").MemoExoticComponent<({ backgroundColor, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, }: ForgotPasswordFormProps) => ReactElement>;
export {};
//# sourceMappingURL=ForgotPasswordForm.d.ts.map