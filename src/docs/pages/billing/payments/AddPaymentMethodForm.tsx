import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { AddPaymentMethodForm } from '../../../../components/billing/payments/AddPaymentMethodForm';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Icon,
  InputRow,
  MenuButton,
  NavigationLink,
  Size,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';

export const AddPaymentMethodFormPage = memo((): ReactElement => {
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

            <NavigationLink
              to="/billing/payments"
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
                Payments
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Add Payment Method Form
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="AddPaymentMethodForm"
    >
      <InputRow>
        {/* <AddPaymentMethodForm />   */}
        Placeholder, properties needed
      </InputRow>
    </Workspace>
  );
});
