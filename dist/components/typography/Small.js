import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Size, TextColors, TextSize } from '../../types';
import { Label } from './Label';
export const Small = memo(({ as = 'small', className = '', children, lineHeight = Size.Small, textColor = TextColors.Light, textSize = TextSize.Small, ...props }) => {
    return (_jsx(Label, { as: as, className: `${className} small`, textColor: textColor, lineHeight: lineHeight, ...props, children: children }, void 0));
});
//# sourceMappingURL=Small.js.map