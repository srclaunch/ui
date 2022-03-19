import { memo, ReactElement, useEffect } from 'react';
import { Condition, Primitives } from '@srclaunch/types';
import {
  signUp,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import {
  AlignHorizontal,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
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

type SignupFormProps = {
  readonly onSignupSuccess?: ({
    userId,
  }: {
    readonly userId: string;
  }) => unknown;
  readonly title?: string;
} & ContainerProps;

export const SignupForm = memo(
  ({
    background = {},
    borderRadius = {},
    onSignupSuccess,
    title = 'Sign up',
  }: SignupFormProps): ReactElement => {
    const dispatch = useDispatch();
    const signUpState = useSelector(
      (state: RootState) => state.user.authentication?.signup,
    );
    const { error, inProgress, success } = signUpState;

    useEffect(() => {
      if (onSignupSuccess && success) {
        onSignupSuccess({ userId: signUpState.userId });
      }
    }, [success]);

    return (
      <Container
        className="signup-form"
        background={{ color: BackgroundColors.Darker, ...background }}
        borderRadius={{ all: Amount.More, ...borderRadius }}
        padding={{ all: Amount.Most }}
        shadow={DepthShadow.Highest}
        size={{
          width: 420,
        }}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={inProgress} />

        {/* 
      <Illustration>
        <img alt="Sign in" src="/illustrations/net_worth.svg" />
      </Illustration> */}

        <Title textAlign={TextAlign.Center}>{title}</Title>

        <NotificationLabel
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          background={{
            color: BackgroundColors.Darkest,
          }}
          showOrb={false}
        >
          <Paragraph textAlign={TextAlign.Center}>
            Already have an account?
            <br />
            <Link
              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
              to="/login"
            >
              Sign in
            </Link>
          </Paragraph>
        </NotificationLabel>

        {error && (
          <ErrorNotification
            label={error?.friendlyMessage ?? 'An error occurred unfortunately.'}
          />
        )}

        <Form
          fields={[
            {
              autoComplete: AutoComplete.GivenName,
              label: 'First name',
              name: 'firstName',
              type: Primitives.String,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.FamilyName,
              label: 'Last name',
              name: 'lastName',
              type: Primitives.String,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                },
              },
            },
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'username',
              type: Primitives.EmailAddress,
              validation: {
                conditions: {
                  [Condition.IsRequired]: true,
                  [Condition.IsEmailAddress]: true,
                  // [Condition.IsUsernameAvailable]: true,
                },
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
          name="signup-form"
          onSubmit={({ fields, validation }) => {
            if ((validation && validation.validated) || !validation)
              dispatch(
                signUp({
                  firstName: fields.firstName?.value as string,
                  lastName: fields.lastName?.value as string,
                  password: fields.password?.value as string,
                  username: fields.username?.value as string,
                }),
              );
          }}
          submitButton={{
            borderRadius: Amount.Least,

            label: 'Sign up',
          }}
        />

        <Container padding={{ all: Amount.Default }}>
          <Small textAlign={TextAlign.Center}>
            By clicking the "Sign up" button you agree to the{' '}
            {/* 
              <Link to="https://budgetbloom.com/terms-of-use">Terms of use</Link> and{' '} 
              */}
            <Link
              // name="Privacy Policy Link [ Sign Up Form ]"

              states={{
                hovered: {
                  textDecoration: { line: TextDecorationLine.Underline },
                },
              }}
              textDecoration={{ line: TextDecorationLine.Underline }}
              to="/privacy"
            >
              Privacy Policy
            </Link>
            .
            {/* You also agree to receive information and offers relevant to our
            services via email. You can opt-out of these emails in your Account
            Settings page anytime. */}
          </Small>
        </Container>
      </Container>
    );
  },
);
