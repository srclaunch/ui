import { Condition, Primitives } from '@srclaunch/types';
import { useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
} from '../../types';
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
} & ContainerProps<HTMLDivElement>;

export const ForgotPasswordForm = memo(
  ({
    backgroundColor = BackgroundColors.Darker,
    title = 'Forgot your password?',
    showSignupLink,
    signUpLinkLabel,
    signInButtonLabel,
    forgotPasswordLinkLabel,
  }: ForgotPasswordFormProps): ReactElement => {
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
        backgroundColor={backgroundColor}
        borderRadius={Amount.More}
        boxShadow={DepthShadow.Highest}
        grow={false}
        padding={Amount.Most}
        paddingBottom={Amount.Default}
        width={420}
      >
        <LoadingOverlay visible={inProgress} />
        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignText={Align.Center}>{title}</Title>

        <Container marginBottom={Amount.More} marginTop={Amount.More}>
          <Paragraph alignText={Align.Center}>
            Enter the email address associated with your account and we'll send
            instructions on how to reset your password.
          </Paragraph>
        </Container>

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
          name="forgot-password-form"
          fields={[
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
          ]}
          inProgress={inProgress}
          onSubmit={({ fields, validated }) => {
            // @ts-ignore
            if (validated) startPasswordReset(fields.emailAddress.value);
          }}
          submitButton={{
            fullWidth: true,
            label: 'Send instructions',
          }}
        />

        <Container
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
          paddingTop={Amount.Default}
        >
          <Small alignText={Align.Center}>
            <Link hover={{ underline: true }} to="/login" underline={false}>
              Login
            </Link>
          </Small>
        </Container>
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
