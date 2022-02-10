import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Text } from './Text';
import { Align, Amount, TextColors, TextSize, TextWeight, } from '../../types';
import { Container } from '../layout/Container';
export const Heading = memo(({ as = 'h3', alignText = Align.Left, children, className = '', grow = false, marginBottom = Amount.More, textWeight = TextWeight.More, textColor = TextColors.Dark, textSize = TextSize.Large, ...props }) => {
    return (_jsx(Container, { as: as, className: `${className} heading`, grow: grow, marginBottom: marginBottom, ...props, children: _jsx(Text, { alignText: alignText, textColor: textColor, textWeight: textWeight, textSize: textSize, ...props, children: children }, void 0) }, void 0));
});
//# sourceMappingURL=Heading.js.map