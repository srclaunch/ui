import { memo, ReactElement } from 'react';
import { Container } from '../../layout/Container';
import {
  Align,
  Amount,
  BackgroundColors,
  Color,
  Formatter,
  Orientation,
  Size,
  SizeProps,
} from '../../../types';
import { ProgressMeter } from '../../charts/ProgressMeter';
import { LinearGauge } from '../../charts/LinearGauge';
import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';

type ProgressivePaymentStatusProps = {
  amountPaid: number;
  currency?: CurrencyCode;
  color?: Color;
  totalDue: number;
} & SizeProps;

export const ProgressivePaymentStatus = memo(
  ({
    amountPaid = 0,
    currency = CurrencyCode.UnitedStatesDollar,
    totalDue = 0,
    size = Size.Default,
  }: ProgressivePaymentStatusProps): ReactElement => {
    const backgroundColor =
      amountPaid >= totalDue
        ? BackgroundColors.Success
        : BackgroundColors.Warning;
    return (
      <Container
        orientation={Orientation.Vertical}
        paddingBottom={Amount.Default}
        grow={false}
      >
        <ProgressMeter
          alignContent={Align.Center}
          alignItems={Align.Center}
          amount={amountPaid}
          color={backgroundColor}
          borderRadius={Amount.Default}
          height={size}
          label={formatCurrency({ amount: amountPaid, currency })}
          marginBottom={Amount.Less}
          total={totalDue}
        />

        <LinearGauge
          amount={amountPaid}
          color={BackgroundColors.Warning}
          formatter={{
            formatter: Formatter.Currency,
            options: {
              currency,
            },
          }}
          total={totalDue}
        />
      </Container>
    );
  },
);
