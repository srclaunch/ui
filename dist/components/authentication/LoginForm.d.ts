import { ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type LoginFormProps = ContainerProps<HTMLDivElement, {
    readonly onLoginSuccess?: () => unknown;
    readonly title?: string;
    readonly showSignupLink?: boolean;
    readonly signUpLinkLabel?: ReactElement;
    readonly signInButtonLabel?: ReactElement;
    readonly forgotPasswordLinkLabel?: ReactElement;
}>;
export declare const LoginForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onLoginSuccess, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, ...props }: LoginFormProps) => ReactElement>;
export {};
//# sourceMappingURL=LoginForm.d.ts.map