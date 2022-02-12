import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, TextColors, TextSize, TextWeight } from '../../types';
import { Label } from './Label';
export const Heading = memo(({ as = 'h3', alignText = Align.Left, children, className = '', grow = false, marginBottom = Amount.More, textWeight = TextWeight.More, textColor = TextColors.Dark, textSize = TextSize.Large, ...props }) => {
    return (_jsx(Label, { alignText: alignText, as: as, className: `${className} heading`, grow: grow, marginBottom: marginBottom, textColor: textColor, textWeight: textWeight, textSize: textSize, ...props, children: children }, void 0));
});
//# sourceMappingURL=Heading.js.map