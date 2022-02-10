import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { LayoutStyles } from '../../styles/layout';
import { TextStyles } from '../../styles/typography';
import { Size, TextColors, TextSize, } from '../../types';
export const Text = memo(({ as = 'span', children, className = '', grow = false, inline = true, lineHeight = Size.Default, selectable = true, textColor = TextColors.Text, textSize = TextSize.Default, width, ...props }) => {
    return (_jsx(Container, { as: as, className: `${className} text`, grow: grow, inline: inline, lineHeight: lineHeight, selectable: selectable, textColor: textColor, textSize: textSize, ...props, children: children }, void 0));
});
const Container = styled.span `
  ${LayoutStyles};
  ${TextStyles};
`;
//# sourceMappingURL=Text.js.map