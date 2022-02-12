import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Exception } from '@srclaunch/exceptions';
import { memo } from 'react';
import { Align, Amount, Orientation, Size, TextColors, TextSize, } from '../../../types';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Container } from '../../layout/Container';
import { Label } from '../../typography/Label';
export const InputLabel = memo(({ alignContent = Align.Left, children, className = '', error, lineHeight = Size.Smaller, marginBottom = Amount.Least, size = Size.Small, textColor = TextColors.InputLabel, textSize = TextSize.Small, ...props }) => {
    return (_jsxs(Container, { grow: false, orientation: Orientation.Horizontal, children: [_jsx(Label, { alignContent: alignContent, className: `${className} input-label`, grow: false, lineHeight: lineHeight, textSize: textSize, textColor: textColor, marginBottom: marginBottom, size: size, ...props, children: children }, void 0), error && (_jsx(ErrorLabel, { alignContent: Align.Right, size: size, children: error instanceof Exception
                    ? error.message
                    : error.length > 0
                        ? error[0]?.message.long
                        : null }, void 0))] }, void 0));
});
//# sourceMappingURL=InputLabel.js.map