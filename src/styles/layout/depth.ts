import { css } from 'styled-components';

import { getDepthZIndex } from '../../lib/css/depth/z-index';
import { DepthProps } from '../../types';

export const DepthStyles = css<DepthProps>`
  z-index: ${props =>
    getDepthZIndex(props.depth) === 0 ? 'auto' : getDepthZIndex(props.depth)};
`;
