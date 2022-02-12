import { css } from 'styled-components';
import { AlignmentStyles } from './alignment';
import { BehaviorStyles } from './behavior';
import { DepthStyles } from './depth';
import { MarginStyles } from './margin';
import { PaddingStyles } from './padding';
import { PositionStyles } from './position';
export const LayoutStyles = css `
  ${AlignmentStyles};
  ${BehaviorStyles};
  ${DepthStyles};
  ${MarginStyles};
  ${PaddingStyles};
  ${PositionStyles}
`;
//# sourceMappingURL=index.js.map