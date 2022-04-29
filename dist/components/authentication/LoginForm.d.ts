import { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type LoginFormProps = {
    readonly onLoginSuccess?: () => unknown;
    readonly title?: string;
    readonly showSignupLink?: boolean;
    readonly signUpLinkLabel?: ReactElement;
    readonly signInButtonLabel?: ReactElement;
    readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps;
export declare const LoginForm: import("react").MemoExoticComponent<({ background, borderRadius, onLoginSuccess, size, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, ...props }: LoginFormProps) => ReactElement>;
export {};
//# sourceMappingURL=LoginForm.d.ts.map