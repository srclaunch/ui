import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Label } from '../../../typography/Label';
import { Size, TextColors, TextSize } from '../../../../types';
export const HSLColorLabel = memo(({ icon, lineHeight = Size.Default, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    return (_jsx(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props, children: value }, void 0));
});
//# sourceMappingURL=HSLColorLabel.js.map