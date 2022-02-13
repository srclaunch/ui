import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DualLightIcons } from '@srclaunch/icons';
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, Icon, NavigationLink, Size, TextColors, TextSize, TextWeight, Title, UnorderedList, Workspace, } from '../../../..';
import { Documentation } from '../../../layouts/Documentation';
export const BillingPayments = memo(() => {
    return (_jsx(Workspace, { header: {
            title: (_jsxs(_Fragment, { children: [_jsx(NavigationLink, { to: "/forms", hover: {
                            underline: true,
                        }, underline: false, children: _jsx(Title, { textColor: TextColors.Primary, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Billing" }, void 0) }, void 0), _jsx(Icon, { name: DualLightIcons.ChevronDoubleForward, marginLeft: Amount.Less, marginRight: Amount.Less, size: Size.Smaller }, void 0), _jsx(Title, { textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "Payments" }, void 0)] }, void 0)),
        }, layout: Documentation, padding: Amount.Most, title: "Billing", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Small, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { to: "/billing/payments", label: "AddPaymentMethodForm" }, void 0),
                        _jsx(NavigationLink, { to: "/billing/subscription", label: "PaymentMethodModal" }, void 0),
                        _jsx(NavigationLink, { to: "/billing/subscription", label: "ProgressivePaymentStatus" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map