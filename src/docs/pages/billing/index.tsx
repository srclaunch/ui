import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  NavigationLink,
  UnorderedList,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const Billing = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'Billing',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Billing"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink to="/billing/payments" label="Payments" />,
            <NavigationLink
              to="/billing/subscriptions"
              label="Subscriptions"
            />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
