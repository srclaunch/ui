import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled, { css } from 'styled-components';
export const Backdrop = memo(({ as = 'div', children, className = '', onClick, visible, ...props }) => {
    return (_jsx(Container, { as: as, className: `${className} backdrop`, onClick: onClick, visible: visible, ...props, children: children }, void 0));
});
const Container = styled.div `
  background: var(--bg-color-backdrop-hidden);
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
  transition: background 0.3s ease-in-out;
  z-index: 6000;

  ${props => props.visible &&
    css `
      background: var(--bg-color-backdrop-visible);
      pointer-events: all;
    `}
`;
//# sourceMappingURL=Backdrop.js.map