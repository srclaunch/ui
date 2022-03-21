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
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
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
    size = {},
    title = 'Sign up',
    ...props
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

        {/* 
      <Illustration>
        <img alt="Sign in" src="/illustrations/net_worth.svg" />
      </Illustration> */}

        <Title
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          textAlign={TextAlign.Center}
        >
          {title}
        </Title>

        <NotificationLabel
          alignment={{
            horizontal: AlignHorizontal.Center,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          margin={{
            all: Amount.Most,
            bottom: Amount.All,
          }}
          showOrb={false}
          textAlign={TextAlign.Center}
        >
          <Paragraph lineHeight={Sizes.Small} textAlign={TextAlign.Center}>
            Already have an account?
            <br />
            <Link
              lineHeight={Sizes.Small}
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
          events={{
            form: {
              onSubmitted: ({ fields, validation }) => {
                if ((validation && validation.validated) || !validation)
                  dispatch(
                    signUp({
                      firstName: fields.firstName?.value as string,
                      lastName: fields.lastName?.value as string,
                      password: fields.password?.value as string,
                      username: fields.username?.value as string,
                    }),
                  );
              },
            },
          }}
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
          submitButton={{
            alignment: {
              fill: Fill.Both,
              horizontal: AlignHorizontal.Center,
            },
            borderRadius: { all: Amount.Least },
            label: 'Sign up',
            lineHeight: Sizes.Large,
          }}
        />

        <Container padding={{ all: Amount.Most }}>
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
