import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  Size,
  UnorderedList,
  Workspace,
} from '../../..';
import { Documentation } from '../../layouts/Documentation';

export const Authentication = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Authentication',
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Authentication"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Smaller}>Components</Heading>

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
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
