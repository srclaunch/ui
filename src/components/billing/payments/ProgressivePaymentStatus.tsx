import { memo, ReactElement } from 'react';
import { Container } from '../../layout/Container';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Color,
  Formatter,
  Orientation,
  Size,
  Sizes,
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
};

export const ProgressivePaymentStatus = memo(
  ({
    amountPaid = 0,
    currency = CurrencyCode.UnitedStatesDollar,
    totalDue = 0,
  }: // size = Size.Default,
  ProgressivePaymentStatusProps): ReactElement => {
    const backgroundColor =
      amountPaid >= totalDue
        ? BackgroundColors.Success
        : BackgroundColors.Warning;
    return (
      <Container padding={{ bottom: Amount.Default }}>
        <ProgressMeter
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          amount={amountPaid}
          // color={backgroundColor}
          borderRadius={{ all: Amount.Default }}
          label={formatCurrency({ amount: amountPaid, currency })}
          margin={{ bottom: Amount.Less }}
          total={totalDue}
        />

        <LinearGauge
          amount={amountPaid}
          // color={ BackgroundColors.Warning }
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
