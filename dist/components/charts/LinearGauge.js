import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { formatValue } from '../../lib/data/format';
import { Align, Amount, BackgroundColors, BorderStyle, Orientation, TextColors, TextSize, TextWeight, } from '../../types';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
export const LinearGauge = memo(({ amount, color, formatter, showTicks = true, showTickLabels = true, showValue = true, tickCount = 5, total, }) => {
    const progressPercent = amount === 0 ? 0 : Number.parseInt(((amount / total) * 100).toFixed(0));
    const tickPercent = total / tickCount;
    return (_jsxs(Container, { children: [showTicks && (_jsxs(Container, { orientation: Orientation.Horizontal, children: [showValue && (_jsx(Container, { border: {
                            left: {
                                color,
                                style: BorderStyle.Solid,
                                width: 3,
                            },
                        }, height: 9, style: {
                            left: `calc(${progressPercent}% - 3px)`,
                            position: 'absolute',
                            top: '-3px',
                        }, children: _jsx(Label, { alignText: Align.Center, lineHeight: Amount.None, textColor: color, textSize: TextSize.Small, textWeight: TextWeight.More, style: {
                                background: `linear-gradient(45deg, transparent 20%, rgba(var(--bg-color-darker-rgb), 0.5) 80%, transparent 20%)`,
                                position: 'absolute',
                                top: 19,
                                transform: 'translateX(-50%)',
                                zIndex: 5,
                            }, children: formatter ? formatValue(amount, formatter) : amount }, void 0) }, void 0)), new Array(tickCount).fill(0).map((_, index) => {
                        const tickValue = tickPercent * index;
                        const tickValueFormatted = formatter
                            ? formatValue(tickValue, formatter)
                            : tickValue;
                        return (_jsx(Container, { border: {
                                left: {
                                    color: amount >= tickValue ? color : BackgroundColors.Lightest,
                                    style: BorderStyle.Solid,
                                    width: 1,
                                },
                            }, height: 6, children: showTickLabels && (_jsx(Label, { alignText: Align.Left, textColor: amount >= tickValue ? color : TextColors.Dark, textSize: TextSize.Smallest, textWeight: TextWeight.More, style: {
                                    position: 'absolute',
                                    transform: 'translateX(calc(100% / 2 - 100%))',
                                }, children: tickValueFormatted }, void 0)) }, index));
                    }), _jsx(Container, { border: {
                            right: {
                                color: amount >= total ? color : BackgroundColors.Lightest,
                                style: BorderStyle.Solid,
                                width: 1,
                            },
                        }, height: 6, style: {
                            position: 'absolute',
                            right: 0,
                        }, children: showTickLabels && (_jsx(Label, { alignText: Align.Right, textColor: TextColors.Dark, textSize: TextSize.Small, textWeight: TextWeight.More, children: formatter ? formatValue(total, formatter) : total }, void 0)) }, void 0)] }, void 0)), _jsx(Container, { backgroundColor: BackgroundColors.Lightest, grow: false, height: 1, children: _jsx(Container, { backgroundColor: color, height: 1, grow: false, width: `${progressPercent}%` }, void 0) }, void 0)] }, void 0));
});
//# sourceMappingURL=LinearGauge.js.map