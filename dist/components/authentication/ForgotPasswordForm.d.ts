import React, { ReactElement } from 'react';
import { ContainerProps } from '../layout/Container';
declare type ForgotPasswordFormProps = ContainerProps<HTMLDivElement, {
    title?: string;
    showSignupLink?: boolean;
    signUpLinkLabel?: ReactElement;
    signInButtonLabel?: ReactElement;
    forgotPasswordLinkLabel?: ReactElement;
}>;
export declare const ForgotPasswordForm: React.MemoExoticComponent<({ backgroundColor, title, showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, }: ForgotPasswordFormProps) => ReactElement>;
export {};
//# sourceMappingURL=ForgotPasswordForm.d.ts.map