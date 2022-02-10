import { memo, ReactElement } from 'react';
import { CurrencyAmount, CurrencyCode } from '@srclaunch/types';
import { Label } from '../../../../typography/Label';
import { LabelProps } from '../../../../../types';

type CurrencyAmountLabelProps = LabelProps<
  HTMLLabelElement,
  {
    amount: CurrencyAmount;
    currency: CurrencyCode;
  }
>;

export const CurrencyAmountLabel = memo(
  ({ amount, currency, ...props }: CurrencyAmountLabelProps): ReactElement => {
    return (
      <Label {...props}>
        {amount === 0
          ? '$0'
          : amount
          ? `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
          : ''}
      </Label>
    );
  },
);
