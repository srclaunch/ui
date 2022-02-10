import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Label } from '../../../typography/Label';
import { Size, TextColors, TextSize } from '../../../../types';
export const MenuItemLabel = memo(({ fieldName, icon, lineHeight = Size.Default, model, textColor = TextColors.Lighter, textSize = TextSize.Default, value, ...props }) => {
    return (_jsx(Label, { icon: icon, lineHeight: lineHeight, textColor: textColor, textSize: textSize, ...props, children: !fieldName || !model
            ? value
            : // @ts-ignore
                model.fields[fieldName]?.items?.find(i => i.value === value)
                    ?.label ?? value }, void 0));
});
//# sourceMappingURL=MenuItemLabel.js.map