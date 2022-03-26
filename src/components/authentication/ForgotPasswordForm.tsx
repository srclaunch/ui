import { Condition, Primitives } from '@srclaunch/types';
import { useSelector, RootState } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
  TextAlign,
} from '../../types';
import { TextDecorationLine } from '../../types/typography';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Link } from '../typography/Link';
import { Paragraph } from '../typography/Paragraph';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';

type ForgotPasswordFormProps = {
  readonly title?: string;
  readonly showSignupLink?: boolean;
  readonly signUpLinkLabel?: ReactElement;
  readonly signInButtonLabel?: ReactElement;
  readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps;

export const ForgotPasswordForm = memo(
  ({
    background = {},
    borderRadius = {},
    size = {},
    title = 'Forgot your password?',
    showSignupLink,
    signUpLinkLabel,
    signInButtonLabel,
    forgotPasswordLinkLabel,
    ...props
  }: ForgotPasswordFormProps): ReactElement => {
    // const dispatch = useDispatch();

    // const [emailAddress, setEmailAddress] = useState<string>();
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState<Exception | null | undefined>();
    // const [canSubmit, setCanSubmit] = useState(false);

    const inProgress = useSelector(
      (state: RootState) => state.authentication?.in_progress,
    );
    const authError = useSelector(
      (state: RootState) => state.authentication?.error,
    );
    // const queryStrings = useSelector(state => state.router.location.search);
    // const confirmed = queryString.parse(queryStrings).c === '1';
    // const medium = queryString.parse(queryStrings).m;

    const startPasswordReset = async (email: string) => {
      // dispatch(login({ email_address: emailAddress, password }));
    };

    // useEffect(() => {
    //   if (emailAddress) {
    //     setCanSubmit(true);
    //   }
    // }, [emailAddress]);

    return (
      <Container
        className="forgot-password-form"
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.More, ...borderRadius }}
        padding={{ all: Amount.Most }}
        shadow={DepthShadow.Highest}
        size={{
          width: 420,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay
          states={{
            state: {
              visible: inProgress,
            },
          }}
        />
        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignment={{ horizontal: AlignHorizontal.Center }}>
          {title}
        </Title>

        <Paragraph
          alignment={{ horizontal: AlignHorizontal.Center }}
          lineHeight={Sizes.Small}
          padding={{ all: Amount.More, bottom: Amount.Most }}
          textAlign={TextAlign.Center}
        >
          Enter the email address associated with your account and we'll send
          instructions on how to reset your password.
        </Paragraph>

        {/* {confirmed && medium && (
        <ConfirmationContainer>
          <Heading text="Thank you for confirming your email address." />
        </ConfirmationContainer>
      )} */}
        {/* {error && <ErrorContainer message={error ? 'Error occurred' : ''} />} */}
        {authError && (
          <ErrorNotification label={authError.userFriendlyMessage} />
        )}

        <Form
          events={{
            form: {
              onSubmitted: ({ fields, validation }) => {
                if ((validation && validation.validated) || !validation) {
                  startPasswordReset(fields.emailAddress?.value as string);
                }
              },
            },
          }}
          fields={[
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'emailAddress',
              type: Primitives.EmailAddress,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                  [Condition.IsEmailAddress]: true,
                },
              },
            },
          ]}
          name="forgot-password-form"
          states={{
            state: {
              loading: inProgress,
            },
          }}
          submitButton={{
            alignment: {
              fill: Fill.Both,
              horizontal: AlignHorizontal.Center,
            },
            borderRadius: { all: Amount.Least },
            label: 'Send instructions',
            lineHeight: Sizes.Large,
          }}
        />
        {/* 
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          padding={{ all: Amount.Default }}
        >
          <Small textAlign={TextAlign.Center}>
            <Link
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.None }}
              to="/login"
            >
              Login
            </Link>
          </Small>
        </Container> */}
      </Container>
    );
  },
);

// const Container = styled.div`
//   background: var(--bg-color-depth-3);
//   border-radius: 15px;
//   box-shadow: var(--shadow-depth-2);
//   margin: 0 auto;
//   padding: 25px 35px 30px 35px;
//   position: relative;
//   width: 100%;

//   p {
//     color: var(-fg-color-text-paragraph);
//     font-weight: 500;
//     font-size: 14px;
//     margin: 15px 0 35px 0;
//     line-height: 24px;
//     text-align: center;
//   }

//   @media (min-width: 480px) {
//     margin: margin;
//     width: 380px;
//   }
// `;

// const Illustration = styled.div`
//   height: 44px;
//   margin: 0 auto 25px auto;
//   text-align: center;
//   width: 44px;

//   img {
//     display: inline-block;
//     width: 100%;
//   }

/* @media (min-width: 480px) {} */

/* @media (min-width: 768px) {
    img {
      height: 56px;
      width: 56px;
    }
  } */

/* @media (min-width: 992px) {} */

/* @media (min-width: 1200px) {} */
// `;

// const ConfirmationContainer = styled.div`
//   color: #5b5b5b;
//   line-height: 32px;
//   margin: 0 0 25px 0;

//   h5 {
//     border-bottom: 4px solid rgb(255, 220, 0);
//     font-weight: 600;
//   }
// `;

// const Title = styled.h2`
//   color: #5b5b5b;
//   font-size: 22px;
//   margin: 0 0 25px 0;
//   text-align: center;

//   /* @media (min-width: 480px) {} */

//   @media (min-width: 768px) {
//     font-size: 28px;
//   }

//   /* @media (min-width: 992px) {} */

//   /* @media (min-width: 1200px) {} */
// `;

// const Form = styled.div``;

// const Row = styled.div`
//   margin: 0 0 25px 0;
//   width: 100%;

//   &:last-child {
//     margin: 0;
//   }
// `;

// const FormActions = styled.div``;

// const ForgotPassword = styled.div`
//   font-size: 14px;
//   padding: 25px 0 0 0;
//   text-align: center;
// `;
