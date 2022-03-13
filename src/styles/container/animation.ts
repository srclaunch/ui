import { css } from 'styled-components';
import { ContainerAnimation } from '../../types/index';

export const ContainerAnimationStyles = css<{
  readonly animation?: ContainerAnimation;
}>`
  ${props => props.animation && css``};
`;

// ${props =>
//   props.transform?.rotate &&
//   css`
//     transform: rotate(${`${props.transform?.rotate}deg` ?? 'none'});
//   `};
