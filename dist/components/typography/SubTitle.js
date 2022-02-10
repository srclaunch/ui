import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Amount, Size, TextColors, TextSize, TextWeight } from '../../types';
import { Text } from './Text';
export const SubTitle = memo(({ as = 'h2', children, className = '', lineHeight = Size.Small, marginBottom = Amount.More, marginTop = Amount.Default, textSize = TextSize.Large, textColor = TextColors.SubTitle, textWeight = TextWeight.More, ...props }) => {
    return (_jsx(Text, { as: as, className: `${className} title`, inline: false, lineHeight: lineHeight, marginBottom: marginBottom, marginTop: marginTop, textWeight: textWeight, textColor: textColor, textSize: textSize, ...props, children: children ?? '' }, void 0));
});
//# sourceMappingURL=SubTitle.js.map