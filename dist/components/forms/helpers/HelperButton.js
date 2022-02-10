import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';
import { Icon } from '../../media/Icon';
export const HelperButton = memo(({ content }) => {
    const [contentVisible, setContentVisible] = useState(false);
    return (_jsxs(Container, { children: [_jsx(Button, { onClick: () => { }, secondary: true, onMouseEnter: () => setContentVisible(true), onMouseLeave: () => setContentVisible(false), children: _jsx(Icon, { name: BasicIcons.HelpBubble }, void 0) }, void 0), _jsx(Content, { visible: contentVisible, children: content }, void 0)] }, void 0));
});
const Container = styled.div `
  position: relative;

  &:hover {
    z-index: 50000;
  }
`;
const Button = styled.button `
  background: transparent;
  border: none;
  line-height: 22px;

  svg {
    fill: rgba(162, 192, 80, 1);
    height: 24px;
    vertical-align: middle;
    width: 24px;
  }
`;
const Content = styled.div `
  background: white;
  border: 10px solid rgba(203, 226, 90, 1);
  border-radius: 25px;
  bottom: 30px;
  box-shadow: 0 15px 25px rgba(65, 146, 64, 0.3);
  // color: rgba(65, 146, 64, 1);
  color: rgba(120, 120, 120, 1);
  font-size: 14px;
  opacity: 0;
  padding: 15px;
  pointer-events: none;
  position: absolute;
  transition: all 0.2s ease-in;
  transform: translateX(-100px);
  width: 220px;

  b {
    font-weight: 700;
  }

  ${props => props.visible &&
    css `
      opacity: 1;
      pointer-events: all;
    `}
`;
//# sourceMappingURL=HelperButton.js.map