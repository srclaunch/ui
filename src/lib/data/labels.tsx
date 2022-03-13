import { ReactElement } from 'react';
import { CurrencyCode, Primitives } from '@srclaunch/types';
import { PrimitiveLabelProps } from '../../types';
import { StringLabel } from '../../components/data/labels/text/StringLabel';
import { NumberLabel } from '../../components/data/labels/numbers/NumberLabel';
import { CurrencyAmountLabel } from '../../components/data/labels/finance/currency/CurrencyAmountLabel';
import { PercentLabel } from '../../components/data/labels/numbers/PercentLabel';
import { DateLabel } from '../../components/data/labels/dates/DateLabel';
import { MenuItemLabel } from '../../components/data/labels/menu/MenuItemLabel';
import { BooleanLabel } from '../..';

export function getLabelByFieldType({
  fieldName,
  model,
  props,
  type,
  value,
}: PrimitiveLabelProps): ReactElement {
  switch (type) {
    case Primitives.Boolean:
      return <BooleanLabel value={value} {...props} />;
    case Primitives.CurrencyAmount:
      return (
        <CurrencyAmountLabel
          amount={value}
          currency={CurrencyCode.UnitedStatesDollar}
          {...props}
        />
      );
    case Primitives.Date:
      return <DateLabel value={value} {...props} />;
    case Primitives.Percent:
      return <PercentLabel value={value} {...props} />;
    case Primitives.Menu:
      return (
        <MenuItemLabel
          fieldName={fieldName}
          model={model}
          value={value}
          {...props}
        />
      );
    case Primitives.Number:
      return <NumberLabel value={value} {...props} />;
    case Primitives.String:
      return <StringLabel value={value} {...props} />;

    default:
      return <StringLabel value={value} {...props} />;
  }
}
