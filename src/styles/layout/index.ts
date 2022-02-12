import { css } from 'styled-components';

import { LayoutProps } from '../../types';
import { AlignmentStyles } from './alignment';
import { BehaviorStyles } from './behavior';
import { DepthStyles } from './depth';
import { MarginStyles } from './margin';
import { PaddingStyles } from './padding';
import { PositionStyles } from './position';

export const LayoutStyles = css<LayoutProps>`
  ${AlignmentStyles};
  ${BehaviorStyles};
  ${DepthStyles};
  ${MarginStyles};
  ${PaddingStyles};
  ${PositionStyles}
`;
