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

export const Billing = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Billing',
      }}
      layout={Documentation}
      padding={Amount.Most}
      title="Billing"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.Least}
        depth={Depth.High}
        grow={false}
        padding={Amount.Most}
      >
        <Heading lineHeight={Size.Small}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink to="/billing/payments" label="Payments" />,
            <NavigationLink
              to="/billing/subscription"
              label="SubscriptionModal"
            />,
          ]}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
