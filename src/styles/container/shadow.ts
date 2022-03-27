import { css, SimpleInterpolation } from 'styled-components';

import { DepthShadow, Shadow } from '../../types';

export function getShadowStyles(
  shadow?: DepthShadow | Shadow,
): SimpleInterpolation {
  if (!shadow) {
    return null;
  }

  if (typeof shadow === 'string') {
    return css`
      box-shadow: ${shadow};
    `;
  }

  if (Array.isArray(shadow)) {
    return css`
      box-shadow: ${shadow.map(getShadowStyles).join(', ')};
    `;
  }

  if (typeof shadow === 'object') {
    const { color, x, y, blur, spread } = shadow;

    return css`
      box-shadow: ${blur} ${x} ${y} ${spread} ${color};
    `;
  }
}

export const ShadowStyles = css<{
  shadow?: DepthShadow | Shadow;
}>`
  ${props => getShadowStyles(props.shadow)}
`;
