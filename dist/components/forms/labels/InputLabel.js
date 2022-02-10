import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Container } from '../../layout/Container';
import { Label } from '../../typography/Label';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Align, Amount, Orientation, Size, TextColors, TextSize, } from '../../../types';
export const InputLabel = memo(({ alignContent = Align.Left, children, className = '', errorMessage, lineHeight = Size.Smaller, marginBottom = Amount.Least, size = Size.Small, textColor = TextColors.InputLabel, textSize = TextSize.Small, ...props }) => {
    return (_jsxs(Container, { grow: false, orientation: Orientation.Horizontal, children: [_jsx(Label, { alignContent: alignContent, className: `${className} input-label`, grow: false, lineHeight: lineHeight, textSize: textSize, textColor: textColor, marginBottom: marginBottom, size: size, ...props, children: children }, void 0), errorMessage && (_jsx(ErrorLabel, { alignContent: Align.Right, size: size, children: errorMessage }, void 0))] }, void 0));
});
//# sourceMappingURL=InputLabel.js.map