import { css } from 'styled-components';
import { BorderColors } from '../types/appearance/border';
export const FocusedStyles = css `
  outline: none;

  &:before {
    bottom: -4px;
    border-radius: calc(${props => props.borderRadius} + 3px);
    content: '';
    display: block;
    border-color: rgb(${BorderColors.Primary});
    border-style: solid;
    border-width: 2px;
    opacity: ${props => (props.focused ? 1 : 0)};
    left: -4px;
    position: absolute;
    pointer-events: none;
    right: -4px;
    top: -4px;
    transition: opacity 0.2s ease-in-out;
    z-index: 0;
  }

  &:focus {
    &:before {
      opacity: 1;
    }
  }
`;
//# sourceMappingURL=focused.js.map