import { css } from 'styled-components';
import { getOverflowStyle } from '../../lib/layout/overflow';
import { FillBehavior, Orientation } from '../../types';
export const BehaviorStyles = css `
  ${props => props.fillBehavior === FillBehavior.FillVertical &&
    Orientation.Vertical &&
    css `
      flex: 1 1 auto;
    `};

  ${props => props.fillBehavior === FillBehavior.FillHorizontal &&
    Orientation.Horizontal &&
    css `
      flex: 1 1 auto;
    `};

  ${props => props.fillBehavior === FillBehavior.FillBoth &&
    css `
      flex: 1 1 auto;
    `};

  ${props => props.fillScreen &&
    css `
      display: flex;
      bottom: 0 !important;
      left: 0 !important;
      position: fixed !important;
      right: 0 !important;
      top: 0 !important;
    `};

  ${props => getOverflowStyle(props.overflow)};

  ${props => props.scrollable &&
    css `
      bottom: 0 !important;
      overflow: hidden !important;
      overflow-y: scroll !important;
      left: 0 !important;
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
    `};
`;
//# sourceMappingURL=behavior.js.map