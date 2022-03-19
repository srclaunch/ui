import { memo, ReactElement, useEffect } from 'react';
import { Condition, Primitives } from '@srclaunch/types';
import {
  login,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Fill,
  FormField,
  Orientation,
  TextAlign,
  TextDecorationLine,
} from '../../types';
import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container, ContainerProps } from '../layout/Container';
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
} & ContainerProps;

export const LoginForm = memo(
  ({
    background = {},
    borderRadius = {},
    onLoginSuccess,
    size = {},
    title = 'Login',
    showSignupLink,
    signUpLinkLabel,
    signInButtonLabel,
    forgotPasswordLinkLabel,
    ...props
  }: LoginFormProps): ReactElement => {
    const dispatch = useDispatch();
    const loginState = useSelector(
      (s: RootState) => s.user.authentication?.login,
    );
    const { error, inProgress, success } = loginState;

    useEffect(() => {
      if (onLoginSuccess && success) {
        onLoginSuccess();
      }
    }, [success]);

    return (
      <Container
        className="login-form"
        background={{ color: BackgroundColors.Lighter, ...background }}
        borderRadius={{ all: Amount.More, ...borderRadius }}
        padding={{ all: Amount.Most, bottom: Amount.None }}
        shadow={DepthShadow.Highest}
        size={{
          width: 420,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={inProgress} />

        {/* <Illustration>
        <img alt={'Login'} src="/illustrations/total_debt.svg" />
      </Illustration> */}

        <Title alignment={{ horizontal: AlignHorizontal.Center }}>
          {title}
        </Title>

        <NotificationLabel
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          // background={{
          //   color: BackgroundColors.Darkest,
          // }}
          margin={{
            bottom: Amount.Default,
          }}
          showOrb={false}
        >
          <Paragraph
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
            textAlign={TextAlign.Center}
          >
            Don't have an account yet?
            <br />
            <Link
              to="/signup"
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
            >
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
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.CurrentPassword,
              label: 'Password',
              name: 'password',
              type: Primitives.Password,
              validation: {
                conditions: {
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
            alignment: {
              fill: Fill.Both,
              horizontal: AlignHorizontal.Center,
            },
            borderRadius: { all: Amount.Least },
            label: 'Login',
          }}
        />

        <Container padding={{ all: Amount.Default }}>
          <Small textAlign={TextAlign.Center}>
            <Link
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
              to="/forgot-password"
            >
              Forgot your password?
            </Link>
          </Small>
        </Container>
      </Container>
    );
  },
);
