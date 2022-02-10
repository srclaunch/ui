import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { DateTime } from 'luxon';
import { getActivityLabel } from '../../lib/activity';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Orientation, Size, TextSize, } from '../../types';
import { DateLabel } from '../data/labels/dates/DateLabel';
import { UserLabel } from '../data/labels/people/UserLabel';
import { Button, ButtonType } from '../forms/buttons/Button';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
import { Link } from '../typography/Link';
import { convertSizeToAmount } from '../../lib/proportions/conversions';
const ActivityFeedItem = memo(({ dateFormat = DateTime.DATE_FULL, who, when, what, where, }) => {
    return (_jsxs(Container, { className: "activity-item", grow: false, orientation: Orientation.Horizontal, children: [who && (_jsx(UserLabel, { grow: false, image: who.image, menu: null, name: who.name, size: Size.Small, to: who.to }, void 0)), what && (_jsxs(Container, { grow: false, marginLeft: -2, orientation: Orientation.Horizontal, children: [_jsx(Label, { textSize: TextSize.Default, children: getActivityLabel(what.name) }, void 0), what.to ? (_jsx(Link, { to: what.to, hover: {
                            underline: true,
                        }, marginLeft: 3, underline: false, children: what.label }, void 0)) : (what.label)] }, void 0)), where && (_jsx(Label, { alignItems: Align.Center, grow: false, marginLeft: -2, textSize: TextSize.Default, children: where }, void 0)), _jsx(Label, { grow: false, marginLeft: 3, children: "on" }, void 0), when && (_jsx(DateLabel, { format: dateFormat, grow: false, marginLeft: 3, textSize: TextSize.Default, value: when }, void 0))] }, void 0));
});
export const ActivityFeed = memo(({ activities, className = '', dateFormat = DateTime.DATE_MED, ...props }) => {
    return (_jsxs(Container, { className: `${className} activity-feed`, ...props, children: [activities.map((activity, key) => {
                return (_jsxs(Container, { children: [key !== 0 && key !== activities.length && (_jsx(Container, { backgroundColor: BackgroundColors.Lighter, borderRadius: Amount.Default, height: 12, marginLeft: convertSizeToAmount(Size.Default), marginBottom: 5, marginTop: 5, style: {
                                transform: 'translateX(-2px)',
                            }, width: 5 }, void 0)), _jsx(ActivityFeedItem, { ...activity }, void 0)] }, key));
            }), _jsx(Container, { alignContent: Align.Center, alignItems: Align.Center, border: {
                    top: {
                        color: BorderColors.Light,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, marginTop: Amount.Default, padding: Amount.Default, paddingBottom: Amount.None, children: _jsx(Button, { type: ButtonType.Primary, size: Size.Small, children: "Load more" }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=ActivityFeed.js.map