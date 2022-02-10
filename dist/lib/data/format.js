import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';
import { Formatter } from '../../types';
export function formatValue(value, { formatter, options }) {
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
//# sourceMappingURL=format.js.map