import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, BackgroundColors, Container, Depth, Heading, NavigationLink, Size, UnorderedList, Workspace, } from '../../..';
import { Documentation } from '../../layouts/Documentation';
export const Billing = memo(() => {
    return (_jsx(Workspace, { header: {
            title: 'Billing',
        }, layout: Documentation, padding: Amount.Most, title: "Billing", children: _jsxs(Container, { backgroundColor: BackgroundColors.Lightest, borderRadius: Amount.Least, depth: Depth.High, grow: false, padding: Amount.Most, children: [_jsx(Heading, { lineHeight: Size.Small, children: "Components" }, void 0), _jsx(UnorderedList, { items: [
                        _jsx(NavigationLink, { to: "/billing/payments", label: "Payments" }, void 0),
                        _jsx(NavigationLink, { to: "/billing/subscription", label: "SubscriptionModal" }, void 0),
                    ], paddingLeft: Amount.Default, paddingRight: Amount.Default }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=index.js.map