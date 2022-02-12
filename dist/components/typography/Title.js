import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Size, TextColors, TextSize, TextWeight } from '../../types';
import { Label } from './Label';
export const Title = memo(({ as = 'h1', children, className = '', lineHeight = Size.Small, textSize = TextSize.Larger, textColor = TextColors.Title, textWeight = TextWeight.Most, ...props }) => {
    return (_jsx(Label, { as: as, className: `${className} title`, inline: false, textColor: textColor, lineHeight: lineHeight, textSize: textSize, textWeight: textWeight, ...props, children: children }, void 0));
});
//# sourceMappingURL=Title.js.map