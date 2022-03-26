import { memo, ReactElement, useEffect, useState } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { UserVerificationStatus, ValidationProblem } from '@srclaunch/types';
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
import {
  AlignHorizontal,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/Button';
import { VerificationCodeInput } from '../forms/inputs/authentication/VerificationCodeInput';
import { InputRow } from '../forms/layout/InputRow';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Label } from '../typography/Label';
import { LineBreak } from '../typography/LineBreak';
import { Paragraph } from '../typography/Paragraph';
import { Title } from '../typography/Title';

type CodeVerificationFormProps = ContainerProps & {
  readonly onVerificationSuccess?: () => unknown;
  readonly userId: string;
};

export const CodeVerificationForm = memo(
  ({
    background = {},
    borderRadius = {},
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
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.More, ...borderRadius }}
        padding={{ all: Amount.Most, bottom: Amount.None }}
        shadow={DepthShadow.Highest}
        size={{
          width: 450,
        }}
      >
        {/* <Illustration>
        <img alt="Login" src="/illustrations/total_debt.svg" />
      </Illustration> */}

        {/* {error && <ErrorContainer message={error.userFriendlyMessage} />} */}

        <LoadingOverlay
          borderRadius={borderRadius}
          states={{
            state: {
              visible:
                verificationState.status.inProgress ||
                verificationState.resend.inProgress ||
                verificationState.verify.inProgress,
            },
          }}
        />

        {verificationState.verify.success ||
        verificationState.status.state === UserVerificationStatus.Confirmed ? (
          <Container padding={{ all: Amount.Default }}>
            <Title alignment={{ horizontal: AlignHorizontal.Center }}>
              You're verified!
            </Title>

            <Paragraph
              alignment={{ horizontal: AlignHorizontal.Center }}
              padding={{ all: Amount.More }}
            >
              Thank you for verifying your email address.
            </Paragraph>

            <Button
              events={{
                mouse: {
                  onClick: () => navigate('/'),
                },
              }}
              type={ButtonType.Primary}
            >
              Login
            </Button>
          </Container>
        ) : (
          <>
            <Title alignment={{ horizontal: AlignHorizontal.Center }}>
              Verification
            </Title>

            <Paragraph
              alignment={{ horizontal: AlignHorizontal.Center }}
              padding={{ all: Amount.More }}
            >
              Enter the confirmation code sent to{' '}
              <b>{verificationState.delivery?.destination}</b>.
            </Paragraph>

            <Container
            // padding={{
            //   bottom: Amount.None,
            //   left: Amount.More,
            //   right: Amount.More,
            //   top: Amount.Default,
            // }}
            >
              <InputRow>
                <VerificationCodeInput
                  autoComplete={AutoComplete.OneTimeCode}
                  events={{
                    input: {
                      onValueChange: ({ validation, value }) => {
                        setProblems(validation?.problems);

                        if (
                          (validation && validation.validated) ||
                          !validation
                        ) {
                          setCode(value);
                        }
                      },
                    },
                  }}
                  length={6}
                  name="verification_code"
                  value={code}
                  // size={Sizes.Large}
                />
              </InputRow>

              <Button
                borderRadius={{ all: Amount.Least }}
                events={{
                  mouse: {
                    onClick: () => {
                      if (userId && code) {
                        dispatch(verifyCode({ code, userId }));
                      }
                    },
                  },
                }}
                lineHeight={Sizes.Large}
                states={{
                  state: {
                    disabled:
                      (problems && problems.length > 0) ||
                      !code ||
                      code.length !== 6 ||
                      verificationState.verify.inProgress ||
                      verificationState.resend.inProgress,
                  },
                }}
                type={ButtonType.Primary}
              >
                Verify
              </Button>
            </Container>

            <Container
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              padding={{ all: Amount.Default }}
            >
              {!verificationState.resend.success ? (
                <Button
                  events={{
                    mouse: {
                      onClick: () => {
                        if (userId) {
                          dispatch(resendVerificationCode({ userId }));
                        }
                      },
                    },
                  }}
                  type={ButtonType.Link}
                >
                  Resend verification code
                </Button>
              ) : (
                <Label
                  icon={{
                    name: BasicIcons.Checkmark2,
                    size: {
                      height: Sizes.Smaller,
                      width: Sizes.Smaller,
                    },
                  }}
                  lineHeight={Sizes.Smaller}
                  textSize={TextSize.Default}
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
