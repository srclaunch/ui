import { BasicIcons } from '@srclaunch/icons';
import {
  UserVerificationStatus,
  ValidationProblem,
  VerificationCode,
} from '@srclaunch/types';
import {
  getVerificationDetails,
  resendVerificationCode,
  // getVerificationDetails
  RootState,
  useDispatch,
  useNavigate,
  useSelector,
  verifyCode,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Align,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Size,
  TextColors,
  TextWeight,
} from '../../types';
// import ErrorContainer from '../errors/ErrorContainer';
import { Button, ButtonType } from '../forms/buttons/Button';
import { VerificationCodeInput } from '../forms/inputs/authentication/VerificationCodeInput';
import { InputRow } from '../forms/layout/InputRow';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Label } from '../typography/Label';
import { LineBreak } from '../typography/LineBreak';
import { Paragraph } from '../typography/Paragraph';
import { Title } from '../typography/Title';

type CodeVerificationFormProps = {
  readonly onVerificationSuccess?: () => unknown;
  readonly userId: string;
} & ContainerProps<HTMLDivElement>;

export const CodeVerificationForm = memo(
  ({
    backgroundColor = BackgroundColors.Darker,
    borderRadius = Amount.More,
    onVerificationSuccess,
    userId,
  }: CodeVerificationFormProps): ReactElement => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const verificationState = useSelector(
      (state: RootState) => state.user.authentication?.verification.code,
    );
    const [code, setCode] = useState<string | undefined>();
    const [problems, setProblems] = useState<readonly ValidationProblem[]>();

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

    return (
      <Container
        className="code-verification-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={DepthShadow.Highest}
        fadeIn
        grow={false}
        padding={Amount.Most}
        paddingBottom={Amount.Default}
        width={420}
      >
        {/* <Illustration>
        <img alt="Login" src="/illustrations/total_debt.svg" />
      </Illustration> */}

        {/* {error && <ErrorContainer message={error.userFriendlyMessage} />} */}

        <LoadingOverlay
          borderRadius={borderRadius}
          visible={
            verificationState.status.inProgress ||
            verificationState.resend.inProgress ||
            verificationState.verify.inProgress
          }
        />

        {verificationState.verify.success ||
        verificationState.status.state === UserVerificationStatus.Confirmed ? (
          <Container padding={Amount.Default} paddingBottom={Amount.Most}>
            <Title alignText={Align.Center}>You're verified!</Title>

            <Container margin={Amount.More}>
              <Paragraph alignText={Align.Center}>
                Thank you for verifying your email address.
              </Paragraph>
            </Container>

            <Button
              fullWidth
              onClick={() => navigate('/login')}
              size={Size.Large}
              type={ButtonType.Primary}
            >
              Login
            </Button>
          </Container>
        ) : (
          <>
            <Title alignText={Align.Center}>Verification</Title>

            <Container margin={Amount.More}>
              <Paragraph alignText={Align.Center}>
                Enter the confirmation code sent to{' '}
                <b>{verificationState.delivery?.destination}</b>.
              </Paragraph>
            </Container>

            <Container
              padding={Amount.Default}
              paddingLeft={Amount.More}
              paddingRight={Amount.More}
            >
              <InputRow>
                <VerificationCodeInput
                  autoComplete={AutoComplete.OneTimeCode}
                  length={6}
                  name="verification_code"
                  onChange={({ value, validated, problems: problemos }) => {
                    setProblems(problemos);

                    if (validated && problemos && problemos.length === 0)
                      setCode(value);
                  }}
                  size={Size.Large}
                />
              </InputRow>

              <LineBreak size={Size.Small} />

              <Button
                disabled={
                  (problems && problems.length > 0) ||
                  !code ||
                  verificationState.verify.inProgress ||
                  verificationState.resend.inProgress
                }
                fullWidth
                onClick={() => {
                  if (userId && code) {
                    dispatch(verifyCode({ code, userId }));
                  }
                }}
                size={Size.Large}
                type={ButtonType.Primary}
              >
                Verify
              </Button>
            </Container>

            <Container
              alignItems={Align.Center}
              paddingLeft={Amount.Default}
              paddingRight={Amount.Default}
              paddingTop={Amount.Default}
            >
              {!verificationState.resend.success ? (
                <Button
                  onClick={() => {
                    if (userId) {
                      dispatch(resendVerificationCode({ userId }));
                    }
                  }}
                  size={Size.Smaller}
                  type={ButtonType.Link}
                >
                  Resend verification code
                </Button>
              ) : (
                <Label
                  icon={{
                    name: BasicIcons.Checkmark2,
                    size: Size.Smaller,
                  }}
                  lineHeight={Size.Smaller}
                  size={Size.Default}
                  textColor={TextColors.Success}
                  textWeight={TextWeight.More}
                >
                  A new code has been sent
                </Label>
              )}
            </Container>
          </>
        )}

        {/* 
          <Form>
            {error && <ErrorContainer message={errorMessage} />}

            <Row>
              <TextInput
                onChange={val => {
                  setConfirmationCode(val?.toString());
                }}
                type="text"
                placeholderText="Confirmation code"
              />
            </Row>
            <FormActions>
              <Button
                disabled={(canSubmit && !confirmationCode) || loading}
                onClick={handleConfirmSignup}
                grow={true}
              >
                Complete sign up
              </Button>

              <CodeSend>
                {resendConfirmationCodeResult === 'NOT_SENT' ? (
                  <button onClick={() => resendCode()}>Resend code</button>
                ) : (
                  <span>Code sent!</span>
                )}
              </CodeSend>
            </FormActions>
          </Form> */}
      </Container>
    );
  },
);
