import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { signUp, useDispatch, useSelector } from '@srclaunch/state';
import { Condition, Primitives } from '@srclaunch/types';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container } from '../layout/Container';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { Paragraph } from '../typography/Paragraph';
import { Link } from '../typography/Link';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Align, Amount, AutoComplete, BackgroundColors, DepthShadow, Orientation, } from '../../types';
export const SignupForm = memo(({ backgroundColor = BackgroundColors.Darker, borderRadius = Amount.More, onSignupSuccess, title = 'Sign up', }) => {
    const dispatch = useDispatch();
    const signUpState = useSelector(state => state.user.authentication?.signup);
    const { error, inProgress, success } = signUpState;
    useEffect(() => {
        if (onSignupSuccess && success) {
            onSignupSuccess({ userId: signUpState.userId });
        }
    }, [success]);
    return (_jsxs(Container, { className: "signup-form", backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: DepthShadow.Highest, grow: false, padding: Amount.Most, paddingBottom: Amount.Default, width: 420, children: [_jsx(LoadingOverlay, { borderRadius: borderRadius, visible: inProgress }, void 0), _jsx(Title, { alignText: Align.Center, children: title }, void 0), _jsx(NotificationLabel, { alignItems: Align.Center, alignSelf: Align.Center, backgroundColor: BackgroundColors.Darkest, marginTop: Amount.Default, marginBottom: Amount.All, orientation: Orientation.Vertical, grow: false, showOrb: false, children: _jsxs(Paragraph, { alignText: Align.Center, children: ["Already have an account?", _jsx("br", {}, void 0), _jsx(Link, { to: "/login", hover: { underline: true }, underline: false, children: "Sign in" }, void 0)] }, void 0) }, void 0), error && (_jsx(ErrorNotification, { label: error?.friendlyMessage ?? 'An error occurred unfortunately.' }, void 0)), _jsx(Form, { fields: [
                    {
                        autoComplete: AutoComplete.GivenName,
                        label: 'First name',
                        name: 'firstName',
                        type: Primitives.String,
                        validation: {
                            [Condition.IsRequired]: true,
                        },
                    },
                    {
                        autoComplete: AutoComplete.FamilyName,
                        label: 'Last name',
                        name: 'lastName',
                        type: Primitives.String,
                        validation: {
                            [Condition.IsRequired]: true,
                        },
                    },
                    {
                        autoComplete: AutoComplete.Username,
                        label: 'Email address',
                        name: 'username',
                        type: Primitives.EmailAddress,
                        validation: {
                            [Condition.IsRequired]: true,
                            [Condition.IsEmailAddress]: true,
                            // [Condition.IsUsernameAvailable]: true,
                        },
                    },
                    {
                        autoComplete: AutoComplete.NewPassword,
                        // confirmPasswordLabel: 'Confirm password',
                        label: 'Password',
                        name: 'password',
                        // showConfirmPassword: true,
                        // showPasswordStrength: false,
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
                ], inProgress: inProgress, name: "signup-form", onSubmit: ({ fields, validated }) => {
                    if (validated)
                        dispatch(signUp({
                            firstName: fields.firstName?.value,
                            lastName: fields.lastName?.value,
                            password: fields.password?.value,
                            username: fields.username?.value,
                        }));
                }, submitButton: {
                    fullWidth: true,
                    label: 'Sign up',
                } }, void 0), _jsx(Container, { paddingLeft: Amount.Default, paddingRight: Amount.Default, paddingTop: Amount.Default, children: _jsxs(Small, { alignText: Align.Center, children: ["By clicking the \"Sign up\" button you agree to the", ' ', _jsx(Link
                        // name="Privacy Policy Link [ Sign Up Form ]"
                        , { 
                            // name="Privacy Policy Link [ Sign Up Form ]"
                            hover: { underline: true }, to: "/privacy", underline: false, children: "Privacy Policy" }, void 0), "."] }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=SignupForm.js.map