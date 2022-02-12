import { jsx as _jsx } from "react/jsx-runtime";
import { Link as RouterLink } from '@srclaunch/web-application-state';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import { Align, Amount, Size, TextColors, TextWeight, } from '../../types';
import { Label } from './Label';
export const Link = memo(({ children, hover, size = Size.Small, textColor = TextColors.Link, textWeight = TextWeight.Default, to, underline = true, underlineColor = TextColors.Link, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    return (_jsx(RouterLink, { to: to, onFocus: () => setFocused(true), onBlur: () => setFocused(false), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: {
            alignItems: Align.Center,
            color: textColor,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: Align.Center,
            outline: 'none',
            textDecoration: (underline || (hovered && hover?.underline)) && !focused
                ? 'underline'
                : 'none',
        }, children: _jsx(Container, { alignContent: Align.Center, alignItems: Align.Center, focused: focused, grow: false, height: size, children: _jsx(Label, { lineHeight: size, textColor: textColor, textWeight: textWeight, underline: (underline || (hovered && hover?.underline)) && !focused, underlineColor: textColor, ...props, children: children }, void 0) }, void 0) }, void 0));
});
const Container = styled.span `
  ${LayoutStyles};
  ${FocusedStyles};

  cursor: pointer;
  position: relative;

  &:before {
    border-radius: ${Amount.All};
    left: -9px;
    right: -9px;
  }
`;
//# sourceMappingURL=Link.js.map