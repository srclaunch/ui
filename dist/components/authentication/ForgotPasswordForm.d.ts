import React, { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type ForgotPasswordFormProps = ContainerProps<HTMLDivElement, {
    readonly title?: string;
    readonly showSignupLink?: boolean;
    readonly signUpLinkLabel?: ReactElement;
    readonly signInButtonLabel?: ReactElement;
    readonly forgotPasswordLinkLabel?: ReactElement;
}>;
export declare const ForgotPasswordForm: React.MemoExoticComponent<({ backgroundColor, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, }: ForgotPasswordFormProps) => ReactElement>;
export {};
//# sourceMappingURL=ForgotPasswordForm.d.ts.map