import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  Sizes,
  UnorderedList,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const Authentication = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Authentication',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Authentication"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading lineHeight={Sizes.Smaller}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink
              to="/authentication/code-verification-form"
              label="CodeVerificationForm"
            />,
            <NavigationLink
              to="/authentication/forgot-password-form"
              label="ForgotPasswordForm"
            />,
            <NavigationLink
              to="/authentication/login-form"
              label="LoginForm"
            />,
            <NavigationLink
              to="/authentication/signup-form"
              label="SignupForm"
            />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
