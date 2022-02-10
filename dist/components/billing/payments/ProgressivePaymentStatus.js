import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../../layout/Container';
import { Align, Amount, BackgroundColors, Formatter, Orientation, Size, } from '../../../types';
import { ProgressMeter } from '../../charts/ProgressMeter';
import { LinearGauge } from '../../charts/LinearGauge';
import { formatCurrency } from '@srclaunch/i18n';
import { CurrencyCode } from '@srclaunch/types';
export const ProgressivePaymentStatus = memo(({ amountPaid = 0, currency = CurrencyCode.UnitedStatesDollar, totalDue = 0, size = Size.Default, }) => {
    const backgroundColor = amountPaid >= totalDue
        ? BackgroundColors.Success
        : BackgroundColors.Warning;
    return (_jsxs(Container, { orientation: Orientation.Vertical, paddingBottom: Amount.Default, grow: false, children: [_jsx(ProgressMeter, { alignContent: Align.Center, alignItems: Align.Center, amount: amountPaid, color: backgroundColor, borderRadius: Amount.Default, height: size, label: formatCurrency({ amount: amountPaid, currency }), marginBottom: Amount.Less, total: totalDue }, void 0), _jsx(LinearGauge, { amount: amountPaid, color: BackgroundColors.Warning, formatter: {
                    formatter: Formatter.Currency,
                    options: {
                        currency,
                    },
                }, total: totalDue }, void 0)] }, void 0));
});
//# sourceMappingURL=ProgressivePaymentStatus.js.map