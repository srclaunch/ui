import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { TextStyles } from '../../styles/typography';
import { Align, Amount, Orientation, Overflow, Size, TextColors, TextOverflow, TextSize, TextWeight, WhiteSpace, } from '../../types';
import { Container } from '../layout/Container';
import { Icon } from '../media/Icon';
const TextContainer = styled.span `
  ${TextStyles};
`;
export const Label = memo(({ alignItems = Align.Center, alignContent = Align.Stretch, as = 'label', children, className = '', grow = false, icon, inline = true, lineHeight = Size.Default, orientation = Orientation.Horizontal, selectable = true, size = Size.Default, textColor = TextColors.Default, textOverflow = TextOverflow.Ellipsis, textSize = TextSize.Default, textWeight = TextWeight.Default, underline = false, whiteSpace = WhiteSpace.NoWrap, ...props }) => {
    return (_jsxs(Container, { alignItems: alignItems, alignContent: alignContent, as: as, className: `${className} label`, grow: grow, orientation: orientation, ...props, children: [icon &&
                (icon.component ||
                    icon.name ||
                    icon.path ||
                    icon.url ||
                    icon.svg) && _jsx(Icon, { marginRight: Amount.Least, ...icon }, void 0), _jsx(TextContainer, { as: as, className: `${className} text`, grow: grow, inline: inline, selectable: selectable, lineHeight: lineHeight, overflow: Overflow.Hidden, textColor: textColor, textOverflow: textOverflow, textSize: textSize, textWeight: textWeight, underline: underline, whiteSpace: whiteSpace, ...props, children: children }, void 0)] }, void 0));
});
//# sourceMappingURL=Label.js.map