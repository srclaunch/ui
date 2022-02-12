import { Condition, Primitives } from '@srclaunch/types';
import {
  login,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';

import {
  Align,
  Amount,
  AutoComplete,
  BackgroundColors,
  ContainerProps,
  DepthShadow,
  FormField,
  Orientation,
} from '../../types';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container } from '../layout/Container';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { Link } from '../typography/Link';
import { Paragraph } from '../typography/Paragraph';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';

type LoginFormProps = {
  readonly onLoginSuccess?: () => unknown;
  readonly title?: string;
  readonly showSignupLink?: boolean;
  readonly signUpLinkLabel?: ReactElement;
  readonly signInButtonLabel?: ReactElement;
  readonly forgotPasswordLinkLabel?: ReactElement;
} & ContainerProps<HTMLDivElement>;

export const LoginForm = memo(
  ({
    backgroundColor = BackgroundColors.Darker,
    borderRadius = Amount.More,
    onLoginSuccess,
    title = 'Login',
    showSignupLink,
    signUpLinkLabel,
    signInButtonLabel,
    forgotPasswordLinkLabel,
    ...props
  }: LoginFormProps): ReactElement => {
    const dispatch = useDispatch();

    const loginState = useSelector(
      (state: RootState) => state.user.authentication?.login,
    );

    const state = useSelector((state: RootState) => state);

    console.log('state2', state);

    const { error, inProgress, success } = loginState;

    useEffect(() => {
      if (onLoginSuccess && success) {
        onLoginSuccess();
      }
    }, [success]);

    return (
      <Container
        className="login-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={DepthShadow.Highest}
        grow={false}
        padding={Amount.Most}
        paddingBottom={Amount.Default}
        width={420}
        {...props}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={inProgress} />

        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignContent={Align.Center}>{title}</Title>

        <NotificationLabel
          alignItems={Align.Center}
          alignSelf={Align.Center}
          backgroundColor={BackgroundColors.Darkest}
          marginTop={Amount.Default}
          marginBottom={Amount.All}
          orientation={Orientation.Vertical}
          grow={false}
          showOrb={false}
        >
          <Paragraph alignText={Align.Center}>
            Don't have an account yet?
            <br />
            <Link to="/signup" hover={{ underline: true }} underline={false}>
              Sign up for free!
            </Link>
          </Paragraph>
        </NotificationLabel>

        {/* {confirmed && medium && (
        <ConfirmationContainer>
          <Heading text="Thank you for confirming your email address." />
        </ConfirmationContainer>
      )} */}

        {error && (
          <ErrorNotification
            label={error?.friendlyMessage ?? 'An error occurred unfortunately.'}
          />
        )}

        <Form
          fields={[
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
          ]}
          inProgress={inProgress}
          name="login-form"
          onSubmit={({
            fields,
            validated,
          }: {
            fields: { [field: string]: FormField };
            validated?: boolean;
          }) => {
            console.log('fields', fields);

            if (validated)
              dispatch(
                login({
                  password: fields.password?.value as string,
                  username: fields.username?.value as string,
                }),
              );
          }}
          submitButton={{
            fullWidth: true,
            label: 'Login',
          }}
        />

        <Container
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
          paddingTop={Amount.Default}
        >
          <Small alignText={Align.Center}>
            <Link
              hover={{ underline: true }}
              to="/forgot-password"
              underline={false}
            >
              Forgot your password?
            </Link>
          </Small>
        </Container>
      </Container>
    );
  },
);
