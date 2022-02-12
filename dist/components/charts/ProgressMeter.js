import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, BackgroundColors, Size, TextColors, TextSize, TextWeight, } from '../../types';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
export const ProgressMeter = memo(({ amount, borderRadius = Amount.Less, children, color = BackgroundColors.Primary, height = Size.Default, label, margin, marginBottom, marginLeft, marginRight, marginTop, padding = Amount.None, total, ...props }) => {
    const progressPercent = amount === 0
        ? 0
        : Number.parseInt((((amount ?? 0) / (total ?? 0)) * 100).toFixed(0));
    return (_jsx(Container, { backgroundColor: BackgroundColors.Lighter, borderRadius: borderRadius, grow: false, margin: margin, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop, padding: padding, style: {
            borderRadius: `calc(${borderRadius} + 3px)`,
        }, children: _jsxs(Container, { backgroundColor: color, borderRadius: borderRadius, boxShadow: {
                blurRadius: 8,
                color,
                offsetX: 0,
                offsetY: 2,
                opacity: 35,
                spreadRadius: 4,
            }, height: height, width: `${progressPercent}%`, ...props, children: [children, label && (_jsx(Label, { alignText: Align.Center, textSize: TextSize.Larger, textColor: TextColors.Darkest, textWeight: TextWeight.More, children: label }, void 0))] }, void 0) }, void 0));
});
//# sourceMappingURL=ProgressMeter.js.map