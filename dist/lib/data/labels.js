import { jsx as _jsx } from "react/jsx-runtime";
import { CurrencyCode, Primitives } from '@srclaunch/types';
import { StringLabel } from '../../components/data/labels/text/StringLabel';
import { NumberLabel } from '../../components/data/labels/numbers/NumberLabel';
import { CurrencyAmountLabel } from '../../components/data/labels/finance/currency/CurrencyAmountLabel';
import { PercentLabel } from '../../components/data/labels/numbers/PercentLabel';
import { DateLabel } from '../../components/data/labels/dates/DateLabel';
import { MenuItemLabel } from '../../components/data/labels/menu/MenuItemLabel';
import { BooleanLabel } from '../..';
export function getLabelByFieldType({ fieldName, model, props, type, value, }) {
    switch (type) {
        case Primitives.Boolean:
            return _jsx(BooleanLabel, { grow: false, value: value, ...props }, void 0);
        case Primitives.CurrencyAmount:
            return (_jsx(CurrencyAmountLabel, { amount: value, currency: CurrencyCode.UnitedStatesDollar, ...props }, void 0));
        case Primitives.Date:
            return _jsx(DateLabel, { value: value, ...props }, void 0);
        case Primitives.Percent:
            return _jsx(PercentLabel, { value: value, ...props }, void 0);
        case Primitives.Menu:
            return (_jsx(MenuItemLabel, { fieldName: fieldName, model: model, value: value, ...props }, void 0));
        case Primitives.Number:
            return _jsx(NumberLabel, { value: value, ...props }, void 0);
        case Primitives.String:
            return _jsx(StringLabel, { grow: false, value: value, ...props }, void 0);
        default:
            return _jsx(StringLabel, { grow: false, value: value, ...props }, void 0);
    }
}
//# sourceMappingURL=labels.js.map