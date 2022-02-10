import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Text } from './Text';
import { Size, TextColors, TextSize, } from '../../types';
export const Paragraph = memo(({ as = 'p', children, className = '', lineHeight = Size.Smaller, textColor = TextColors.Paragraph, textSize = TextSize.Default, ...props }) => {
    return (_jsx(Text, { as: as, className: `${className} paragraph`, textColor: textColor, lineHeight: Size.Small, ...props, children: children }, void 0));
});
//# sourceMappingURL=Paragraph.js.map