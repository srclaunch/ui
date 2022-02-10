import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Label } from '../../../typography/Label';
import { ProgressMeter } from '../../../charts/ProgressMeter';
import { Size, TextColors, TextSize, } from '../../../../types';
export const ProgressLabel = memo(({ color, icon, lineHeight = Size.Default, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    const spent = value[1];
    const total = value[2];
    return (_jsx(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props, children: _jsx(ProgressMeter, { amount: spent, backgroundColor: color, total: total }, void 0) }, void 0));
});
//# sourceMappingURL=ProgressLabel.js.map