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
  Sizes,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  UnorderedList,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const BillingPayments = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/billing"
              hover={{
                textDecoration: {
                  line: TextDecorationLine.Underline,
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
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
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Payments
            </Title>
          </>
        ),
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
        <Heading lineHeight={Sizes.Small}>Components</Heading>

        <UnorderedList
          items={[
            <NavigationLink
              to="/billing/payments/add-payment-method-form"
              label="AddPaymentMethodForm"
            />,
            <NavigationLink
              to="/billing/payments/payment-method-modal"
              label="PaymentMethodModal"
            />,
            <NavigationLink
              to="/billing/payments/progressive-payment-status"
              label="ProgressivePaymentStatus"
            />,
          ]}
          padding={{ left: Amount.Default, right: Amount.Default }}
        />
      </Container>
    </Workspace>
  );
});
