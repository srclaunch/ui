import { memo, ReactElement, useEffect } from 'react';
import { signUp, useDispatch, useSelector } from '@srclaunch/state';
import { Condition, Primitives } from '@srclaunch/types';

import { ErrorNotification } from '../errors/ErrorNotification';
import { Form } from '../forms/Form';
import { Container, ContainerProps } from '../layout/Container';
import { NotificationLabel } from '../notifications/NotificationLabel';
import { Paragraph } from '../typography/Paragraph';
import { Link } from '../typography/Link';
import { Small } from '../typography/Small';
import { Title } from '../typography/Title';
import { LoadingOverlay } from '../progress/LoadingOverlay';

import {
  Align,
  Amount,
  AutoComplete,
  BackgroundColors,
  DepthShadow,
  Orientation,
} from '../../types';

type SignupFormProps = ContainerProps<
  HTMLDivElement,
  {
    onSignupSuccess?: ({ userId }: { userId: string }) => unknown;
    title?: string;
  }
>;

export const SignupForm = memo(
  ({
    backgroundColor = BackgroundColors.Darker,
    borderRadius = Amount.More,
    onSignupSuccess,
    title = 'Sign up',
  }: SignupFormProps): ReactElement => {
    const dispatch = useDispatch();
    const signUpState = useSelector(state => state.user.authentication?.signup);
    const { error, inProgress, success } = signUpState;

    useEffect(() => {
      if (onSignupSuccess && success) {
        onSignupSuccess({ userId: signUpState.userId });
      }
    }, [success]);

    return (
      <Container
        className="signup-form"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={DepthShadow.Highest}
        grow={false}
        padding={Amount.Most}
        paddingBottom={Amount.Default}
        width={420}
      >
        <LoadingOverlay borderRadius={borderRadius} visible={inProgress} />

        {/* 
      <Illustration>
        <img alt="Sign in" src="/illustrations/net_worth.svg" />
      </Illustration> */}

        <Title alignText={Align.Center}>{title}</Title>

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
            Already have an account?
            <br />
            <Link to="/login" hover={{ underline: true }} underline={false}>
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
                [Condition.IsRequired]: true,
              },
            },
            {
              autoComplete: AutoComplete.FamilyName,
              label: 'Last name',
              name: 'lastName',
              type: Primitives.String,
              validation: {
                [Condition.IsRequired]: true,
              },
            },
            {
              autoComplete: AutoComplete.Username,
              label: 'Email address',
              name: 'username',
              type: Primitives.EmailAddress,
              validation: {
                [Condition.IsRequired]: true,
                [Condition.IsEmailAddress]: true,
                // [Condition.IsUsernameAvailable]: true,
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
          name="signup-form"
          onSubmit={({ fields, validated }) => {
            if (validated)
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
            fullWidth: true,
            label: 'Sign up',
          }}
        />

        <Container
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
          paddingTop={Amount.Default}
        >
          <Small alignText={Align.Center}>
            By clicking the "Sign up" button you agree to the{' '}
            {/* <Link to="https://budgetbloom.com/terms-of-use">Terms of use</Link> and{' '} */}
            <Link
              // name="Privacy Policy Link [ Sign Up Form ]"

              hover={{ underline: true }}
              to="/privacy"
              underline={false}
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
