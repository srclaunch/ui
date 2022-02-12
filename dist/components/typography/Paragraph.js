import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Size, TextColors, TextSize } from '../../types';
import { Label } from './Label';
export const Paragraph = memo(({ as = 'p', children, className = '', lineHeight = Size.Smaller, textColor = TextColors.Paragraph, textSize = TextSize.Default, ...props }) => {
    return (_jsx(Label, { as: as, className: `${className} paragraph`, textColor: textColor, lineHeight: lineHeight, textSize: textSize, ...props, children: children }, void 0));
});
//# sourceMappingURL=Paragraph.js.map