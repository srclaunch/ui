import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, NavigationLink, Size, UnorderedList, Workspace, } from '../../..';
import { Documentation } from '../../layouts/Documentation';
export const Authentication = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'Authentication',
        }, layout: Documentation, padding: Amount.Most, title: "Authentication", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Smaller, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { to: "/authentication/code-verification-form", label: "CodeVerificationForm" }, void 0),
                        _jsx(NavigationLink, { to: "/authentication/forgot-password-form", label: "ForgotPasswordForm" }, void 0),
                        _jsx(NavigationLink, { to: "/authentication/login-form", label: "LoginForm" }, void 0),
                        _jsx(NavigationLink, { to: "/authentication/signup-form", label: "SignupForm" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map