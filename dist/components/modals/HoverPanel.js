import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../styles/appearance';
import { VisibilityStyles } from '../../styles/appearance/visibility';
import { FocusedStyles } from '../../styles/focused';
import { LayoutStyles } from '../../styles/layout';
import { Align, Amount, BackgroundColors, BorderStyle, Depth, DepthShadow, Orientation, } from '../../types';
export const HoverPanel = memo(({ alignItems = Align.Stretch, alignContent = Align.Stretch, backgroundColor = BackgroundColors.Lightest, border = {
    color: BackgroundColors.Transparent,
    style: BorderStyle.Solid,
    width: 1,
}, borderRadius = Amount.Less, children, className = '', depth = Depth.Higher, detached = true, focused, grow = false, orientation = Orientation.Vertical, visible = true, setMenuVisible, ...props }) => {
    return (_jsx(Wrapper, { alignItems: alignItems, alignContent: alignContent, backgroundColor: backgroundColor, border: border, borderRadius: borderRadius, boxShadow: visible ? DepthShadow.Higher : DepthShadow.Surface, className: `${className} hover-panel`, depth: depth, grow: grow, detached: detached, focused: focused, marginTop: 0, orientation: orientation, visible: visible, ...props, children: children }, void 0));
});
const Wrapper = styled.div `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${VisibilityStyles};

  border-radius: ${props => (props.detached
    ? props.borderRadius
    : `0 0 ${props.borderRadius} ${props.borderRadius}`)};
  left: ${props => (props.detached
    ? props.alignContent === Align.Left
        ? '-10px'
        : 'auto'
    : 0)};
  position: absolute;
  right: ${props => (props.detached
    ? props.alignContent === Align.Right
        ? '-10px'
        : 'auto'
    : 0)};
  top: ${props => (props.detached ? '80%' : 'calc(100% - 3px)')};

  &:before {
    border-top: 0;
    border-top-left-radius: ${props => (props.detached
    ? props.borderRadius
    : `0 0 ${props.borderRadius} ${props.borderRadius}`)};
    border-top-right-radius: ${props => (props.detached
    ? props.borderRadius
    : `0 0 ${props.borderRadius} ${props.borderRadius}`)};
  }
`;
//# sourceMappingURL=HoverPanel.js.map