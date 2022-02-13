import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Heading,
  Icon,
  NavigationLink,
  Size,
  TextColors,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../..';
import { Documentation } from '../../../layouts/Documentation';

export const BillingPayments = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/forms"
              hover={{
                underline: true,
              }}
              underline={false}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Billing
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              marginLeft={Amount.Less}
              marginRight={Amount.Less}
              size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Payments
            </Title>
          </>
        ),
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
            <NavigationLink
              to="/billing/payments"
              label="AddPaymentMethodForm"
            />,
            <NavigationLink
              to="/billing/subscription"
              label="PaymentMethodModal"
            />,
            <NavigationLink
              to="/billing/subscription"
              label="ProgressivePaymentStatus"
            />,
          ]}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
        />
      </Container>
    </Workspace>
  );
});
