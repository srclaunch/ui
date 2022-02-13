import { css } from 'styled-components';
import { getDepthZIndex } from '../../lib/css/depth/z-index';
export const DepthStyles = css `
  z-index: ${props => getDepthZIndex(props.depth) === 0 ? 'auto' : getDepthZIndex(props.depth)};
`;
//# sourceMappingURL=depth.js.map