import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { getVerificationDetails, resendVerificationCode, useDispatch, useSelector, verifyCode, useNavigate, } from '@srclaunch/state';
import { UserVerificationStatus, } from '@srclaunch/types';
// import ErrorContainer from '../errors/ErrorContainer';
import { Button, ButtonType } from '../forms/buttons/Button';
import { VerificationCodeInput } from '../forms/inputs/authentication/VerificationCodeInput';
import { Container } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { LineBreak } from '../typography/LineBreak';
import { Paragraph } from '../typography/Paragraph';
import { Title } from '../typography/Title';
import { Label } from '../typography/Label';
import { InputRow } from '../forms/layout/InputRow';
import { Align, Amount, AutoComplete, BackgroundColors, DepthShadow, Size, TextColors, TextWeight, } from '../../types';
export const CodeVerificationForm = memo(({ backgroundColor = BackgroundColors.Darker, borderRadius = Amount.More, onVerificationSuccess, userId, }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const verificationState = useSelector((state) => state.user.authentication?.verification.code);
    const [code, setCode] = useState();
    const [problems, setProblems] = useState();
    useEffect(() => {
        if (userId) {
            dispatch(getVerificationDetails({ userId }));
        }
    }, []);
    useEffect(() => {
        if (onVerificationSuccess && verificationState.verify.success) {
            onVerificationSuccess();
        }
    }, [verificationState.verify.success]);
    return (_jsxs(Container, { className: "code-verification-form", backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: DepthShadow.Highest, fadeIn: true, grow: false, padding: Amount.Most, paddingBottom: Amount.Default, width: 420, children: [_jsx(LoadingOverlay, { borderRadius: borderRadius, visible: verificationState.status.inProgress ||
                    verificationState.resend.inProgress ||
                    verificationState.verify.inProgress }, void 0), verificationState.verify.success ||
                verificationState.status.state === UserVerificationStatus.Confirmed ? (_jsxs(Container, { padding: Amount.Default, paddingBottom: Amount.Most, children: [_jsx(Title, { alignText: Align.Center, children: "You're verified!" }, void 0), _jsx(Container, { margin: Amount.More, children: _jsx(Paragraph, { alignText: Align.Center, children: "Thank you for verifying your email address." }, void 0) }, void 0), _jsx(Button, { fullWidth: true, onClick: () => navigate('/login'), size: Size.Large, type: ButtonType.Primary, children: "Login" }, void 0)] }, void 0)) : (_jsxs(_Fragment, { children: [_jsx(Title, { alignText: Align.Center, children: "Verification" }, void 0), _jsx(Container, { margin: Amount.More, children: _jsxs(Paragraph, { alignText: Align.Center, children: ["Enter the confirmation code sent to", ' ', _jsx("b", { children: verificationState.delivery?.destination }, void 0), "."] }, void 0) }, void 0), _jsxs(Container, { padding: Amount.Default, paddingLeft: Amount.More, paddingRight: Amount.More, children: [_jsx(InputRow, { children: _jsx(VerificationCodeInput, { autoComplete: AutoComplete.OneTimeCode, length: 6, name: "verification_code", onChange: ({ value, validated, problems: problemos }) => {
                                        setProblems(problemos);
                                        if (validated && problemos && !problemos.length)
                                            setCode(value);
                                    }, size: Size.Large }, void 0) }, void 0), _jsx(LineBreak, { size: Size.Small }, void 0), _jsx(Button, { disabled: (problems && problems.length > 0) ||
                                    !code ||
                                    verificationState.verify.inProgress ||
                                    verificationState.resend.inProgress, fullWidth: true, onClick: () => {
                                    if (userId && code) {
                                        dispatch(verifyCode({ code, userId }));
                                    }
                                }, size: Size.Large, type: ButtonType.Primary, children: "Verify" }, void 0)] }, void 0), _jsx(Container, { alignItems: Align.Center, paddingLeft: Amount.Default, paddingRight: Amount.Default, paddingTop: Amount.Default, children: !verificationState.resend.success ? (_jsx(Button, { onClick: () => {
                                if (userId) {
                                    dispatch(resendVerificationCode({ userId }));
                                }
                            }, size: Size.Smaller, type: ButtonType.Link, children: "Resend verification code" }, void 0)) : (_jsx(Label, { icon: {
                                name: BasicIcons.Checkmark2,
                                size: Size.Smaller,
                            }, lineHeight: Size.Smaller, size: Size.Default, textColor: TextColors.Success, textWeight: TextWeight.More, children: "A new code has been sent" }, void 0)) }, void 0)] }, void 0))] }, void 0));
});
//# sourceMappingURL=CodeVerificationForm.js.map