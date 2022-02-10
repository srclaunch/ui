import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
import { AppearanceStyles } from '../../../../styles/appearance';
import { VisibilityStyles } from '../../../../styles/appearance/visibility';
import { FocusedStyles } from '../../../../styles/focused';
// import { FocusedStyles } from '../../../../styles/focused';
import { LayoutStyles } from '../../../../styles/layout';
import { Align, Amount, BackgroundColors, BorderStyle, Depth, Orientation, } from '../../../../types';
export const DropdownPanel = memo(({ alignItems = Align.Stretch, backgroundColor = BackgroundColors.Lightest, border = {
    color: BackgroundColors.Transparent,
    style: BorderStyle.Solid,
    width: 1,
}, borderRadius = Amount.Less, children, className = '', depth = Depth.Higher, focused, orientation = Orientation.Vertical, visible = false, ...props }) => {
    return (_jsx(Wrapper, { alignItems: alignItems, backgroundColor: backgroundColor, border: border, borderRadius: borderRadius, className: `${className} dropdown-panel`, depth: depth, focused: focused, orientation: orientation, visible: visible, ...props, children: children }, void 0));
});
const Wrapper = styled.div `
  ${LayoutStyles};
  ${AppearanceStyles};
  ${FocusedStyles};
  ${VisibilityStyles};

  border-radius: ${props => `0 0 ${props.borderRadius} ${props.borderRadius}`}; //flex-basis: 115px;
  left: 0;
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  right: 0;
  top: calc(100% - 3px);

  &:before {
    border-radius: 0 0 calc(${Amount.Least} + 3px) calc(${Amount.Least} + 3px);
    border-top-color: transparent;
  }
`;
//# sourceMappingURL=DropdownPanel.js.map