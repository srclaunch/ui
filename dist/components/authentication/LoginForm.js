import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Condition, Primitives } from '@srclaunch/types';
import { login, useDispatch, useSelector, } from '@srclaunch/web-application-state';
import { memo, useEffect } from 'react';
import { Align, Amount, AutoComplete, BackgroundColors, DepthShadow, Orientation, } from '../../types';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container } from '../layout/Container';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Link } from '../typography/Link';
import { Paragraph } from '../typography/Paragraph';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';
export const LoginForm = memo(({ backgroundColor = BackgroundColors.Darker, borderRadius = Amount.More, onLoginSuccess, title = 'Login', showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, ...props }) => {
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.user.authentication?.login);
    const state = useSelector((state) => state);
    console.log('state2', state);
    const { error, inProgress, success } = loginState;
    useEffect(() => {
        if (onLoginSuccess && success) {
            onLoginSuccess();
        }
    }, [success]);
    return (_jsxs(Container, { className: "login-form", backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: DepthShadow.Highest, grow: false, padding: Amount.Most, paddingBottom: Amount.Default, width: 420, ...props, children: [_jsx(LoadingOverlay, { borderRadius: borderRadius, visible: inProgress }, void 0), _jsx(Title, { alignContent: Align.Center, children: title }, void 0), _jsx(NotificationLabel, { alignItems: Align.Center, alignSelf: Align.Center, backgroundColor: BackgroundColors.Darkest, marginTop: Amount.Default, marginBottom: Amount.All, orientation: Orientation.Vertical, grow: false, showOrb: false, children: _jsxs(Paragraph, { alignText: Align.Center, children: ["Don't have an account yet?", _jsx("br", {}, void 0), _jsx(Link, { to: "/signup", hover: { underline: true }, underline: false, children: "Sign up for free!" }, void 0)] }, void 0) }, void 0), error && (_jsx(ErrorNotification, { label: error?.friendlyMessage ?? 'An error occurred unfortunately.' }, void 0)), _jsx(Form, { fields: [
                    {
                        autoComplete: AutoComplete.Username,
                        label: 'Email address',
                        name: 'username',
                        type: Primitives.EmailAddress,
                        validation: {
                            [Condition.IsRequired]: true,
                        },
                    },
                    {
                        autoComplete: AutoComplete.CurrentPassword,
                        label: 'Password',
                        name: 'password',
                        type: Primitives.Password,
                        validation: {
                            [Condition.IsRequired]: true,
                            [Condition.HasLetterCount]: 2,
                            [Condition.HasNumberCount]: 1,
                            [Condition.HasSymbolCount]: 1,
                            [Condition.HasUppercaseCount]: 1,
                            [Condition.HasLowercaseCount]: 1,
                            [Condition.IsLengthGreaterThanOrEqual]: 8,
                            [Condition.IsLengthLessThanOrEqual]: 99,
                        },
                    },
                ], inProgress: inProgress, name: "login-form", onSubmit: ({ fields, validated, }) => {
                    console.log('fields', fields);
                    if (validated)
                        dispatch(login({
                            password: fields.password?.value,
                            username: fields.username?.value,
                        }));
                }, submitButton: {
                    fullWidth: true,
                    label: 'Login',
                } }, void 0), _jsx(Container, { paddingLeft: Amount.Default, paddingRight: Amount.Default, paddingTop: Amount.Default, children: _jsx(Small, { alignText: Align.Center, children: _jsx(Link, { hover: { underline: true }, to: "/forgot-password", underline: false, children: "Forgot your password?" }, void 0) }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=LoginForm.js.map