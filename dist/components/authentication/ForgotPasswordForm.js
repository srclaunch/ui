import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Condition, Primitives } from '@srclaunch/types';
import { useSelector } from '@srclaunch/state';
import { Container } from '../layout/Container';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Link } from '../typography/Link';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Paragraph } from '../typography/Paragraph';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';
import { Align, Amount, AutoComplete, BackgroundColors, DepthShadow, } from '../../types';
export const ForgotPasswordForm = memo(({ backgroundColor = BackgroundColors.Darker, title = 'Forgot your password?', showSignupLink, signUpLinkLabel, signInButtonLabel, forgotPasswordLinkLabel, }) => {
    // const dispatch = useDispatch();
    // const [emailAddress, setEmailAddress] = useState<string>();
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState<Exception | null | undefined>();
    // const [canSubmit, setCanSubmit] = useState(false);
    const inProgress = useSelector(state => state.authentication?.in_progress);
    const authError = useSelector(state => state.authentication?.error);
    // const queryStrings = useSelector(state => state.router.location.search);
    // const confirmed = queryString.parse(queryStrings).c === '1';
    // const medium = queryString.parse(queryStrings).m;
    const startPasswordReset = async (email) => {
        // dispatch(login({ email_address: emailAddress, password }));
    };
    // useEffect(() => {
    //   if (emailAddress) {
    //     setCanSubmit(true);
    //   }
    // }, [emailAddress]);
    return (_jsxs(Container, { className: "forgot-password-form", backgroundColor: backgroundColor, borderRadius: Amount.More, boxShadow: DepthShadow.Highest, grow: false, padding: Amount.Most, paddingBottom: Amount.Default, width: 420, children: [_jsx(LoadingOverlay, { visible: inProgress }, void 0), _jsx(Title, { alignText: Align.Center, children: title }, void 0), _jsx(Container, { marginBottom: Amount.More, marginTop: Amount.More, children: _jsx(Paragraph, { alignText: Align.Center, children: "Enter the email address associated with your account and we'll send instructions on how to reset your password." }, void 0) }, void 0), authError && (_jsx(ErrorNotification, { label: authError.userFriendlyMessage }, void 0)), _jsx(Form, { name: "forgot-password-form", fields: [
                    {
                        autoComplete: AutoComplete.Username,
                        label: 'Email address',
                        name: 'emailAddress',
                        type: Primitives.EmailAddress,
                        validation: {
                            [Condition.IsRequired]: true,
                            [Condition.IsEmailAddress]: true,
                        },
                    },
                ], inProgress: inProgress, onSubmit: ({ fields, validated }) => {
                    // @ts-ignore
                    if (validated)
                        startPasswordReset(fields.emailAddress.value);
                }, submitButton: {
                    fullWidth: true,
                    label: 'Send instructions',
                } }, void 0), _jsx(Container, { paddingLeft: Amount.Default, paddingRight: Amount.Default, paddingTop: Amount.Default, children: _jsx(Small, { alignText: Align.Center, children: _jsx(Link, { hover: { underline: true }, to: "/login", underline: false, children: "Login" }, void 0) }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=ForgotPasswordForm.js.map