import { css, SimpleInterpolation } from 'styled-components';
import { Animation } from '../../types/index';

export function getAnimationStyles(
  animations?: Animation[],
): SimpleInterpolation {
  if (!animations || !animations.length) return;
  return css`
    animation: ${animations
      .map(
        animation =>
          `${animation.name} ${animation.timing?.duration} ${animation.timing?.easing} ${animation.timing?.delay}`,
      )
      .join(', ')};
  `;
}

// ${animation?.timing?.duration} ${animation?.timing?.easing}
// ${animation?.timing?.delay} ${animation?.timing?.iterations};
export const AnimationStyles = css<{
  readonly animations?: Animation[];
}>`
  ${props => getAnimationStyles(props.animations)};
`;

// ${props =>
//   props.transform?.rotate &&
//   css`
//     transform: rotate(${`${props.transform?.rotate}deg` ?? 'none'});
//   `};
