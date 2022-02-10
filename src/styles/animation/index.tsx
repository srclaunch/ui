import { css } from 'styled-components';

import { AnimationProps } from '../../types';

export const AnimationStyles = css<AnimationProps>`
  ${props =>
    props.transform?.rotate &&
    css`
      transform: rotate(${`${props.transform?.rotate}deg` ?? 'none'});
    `};
`;
