import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
// import moment from 'moment';
import { Label } from '../../../typography/Label';
import { Size, TextColors, TextSize } from '../../../../types';
export const DateTimeLabel = memo(({ icon, lineHeight = Size.Default, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    return (_jsx(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props }, void 0));
});
//# sourceMappingURL=DateTimeLabel.js.map