import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Label } from '../../../../typography/Label';
export const CurrencyAmountLabel = memo(({ amount, currency, ...props }) => {
    return (_jsx(Label, { ...props, children: amount === 0
            ? '$0'
            : amount
                ? `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                : '' }, void 0));
});
//# sourceMappingURL=CurrencyAmountLabel.js.map