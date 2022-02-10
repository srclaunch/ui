import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { DateTime } from 'luxon';
import { Label } from '../../../typography/Label';
import { TextColors, TextSize } from '../../../../types';
export const DateLabel = memo(({ className = '', grow = false, format = DateTime.DATE_MED, icon, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    return (_jsx(Label, { className: `${className} date-label`, grow: false, icon: icon, textColor: textColor, textSize: textSize, ...props, children: DateTime.fromISO(value).toLocaleString(format) }, void 0));
});
//# sourceMappingURL=DateLabel.js.map