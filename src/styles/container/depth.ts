import { css, SimpleInterpolation } from 'styled-components';

import { Depth } from '../../types';

export function getZIndexValue(depth?: Depth): SimpleInterpolation {
  switch (depth) {
    case Depth.Lowest:
      return css`
        z-index: -3;
      `;
    case Depth.Lower:
      return css`
        z-index: -2;
      `;
    case Depth.Low:
      return css`
        z-index: -1;
      `;
    case Depth.Surface:
      return css`
        z-index: 0;
      `;
    case Depth.High:
      return css`
        z-index: 1;
      `;
    case Depth.Higher:
      return css`
        z-index: 2;
      `;
    case Depth.Highest:
      return css`
        z-index: 3;
      `;
    default:
      return;
  }
}

export const DepthStyles = css<{
  readonly depth?: Depth;
}>`
  ${props => getZIndexValue(props.depth)}
`;
