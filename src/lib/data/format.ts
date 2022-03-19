import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';

export enum Formatter {
  Currency = 'currency',
}

export type FormatterProps = {
  formatter: Formatter;
  options?: FormatterOptions;
};

export type FormatterOptions = {
  currency?: CurrencyCode;
};

export function formatValue(
  value: any,
  { formatter, options }: FormatterProps,
) {
  switch (formatter) {
    case Formatter.Currency:
      return formatCurrency({
        amount: value,
        currency: options?.currency ?? CurrencyCode.UnitedStatesDollar,
      });
    default:
      return value;
  }
}
