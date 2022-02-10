import { ReactElement } from 'react';
import { ContainerProps } from '../../types';
declare type LoginFormProps = ContainerProps<HTMLDivElement, {
    onLoginSuccess?: () => unknown;
    title?: string;
    showSignupLink?: boolean;
    signUpLinkLabel?: ReactElement;
    signInButtonLabel?: ReactElement;
    forgotPasswordLinkLabel?: ReactElement;
}>;
export declare const LoginForm: import("react").MemoExoticComponent<({ backgroundColor, borderRadius, onLoginSuccess, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, ...props }: LoginFormProps) => ReactElement>;
export {};
//# sourceMappingURL=LoginForm.d.ts.map