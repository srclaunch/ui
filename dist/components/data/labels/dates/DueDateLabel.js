import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
// import { getDueDateLabel } from '../../../../lib/dates/labels';
import { Label } from '../../../typography/Label';
import { Size, TextColors, TextSize } from '../../../../types';
export const DueDateLabel = memo(({ icon, lineHeight = Size.Default, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    if (!value[0] && !value[1] && !value[2] && !value[3] && !value[4])
        return _jsx(_Fragment, { children: "Invalid data" }, void 0);
    return (_jsx(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props }, void 0));
});
//# sourceMappingURL=DueDateLabel.js.map