import { css } from 'styled-components';

import { DepthShadow, Shadow } from '../../types';

export const ShadowStyles = css<{
  shadow?: DepthShadow | Shadow;
}>`
  ${props => props.shadow && css``};
`;

/*
  box-shadow: ${props =>
    props.boxShadow
      ? getCSSBoxShadowValue(props.boxShadow)
      : props.depth
      ? getCSSBoxShadowFromDepth(props.depth)
      : '0 0 0 0 transparent'};

  ${props =>
    props.flat
      ? css`
          box-shadow: none;
        `
      : css`
          ${props.active &&
          props.active?.boxShadow &&
          css`
            &:active,
            &.active {
              box-shadow: ${getCSSBoxShadowValue(props.active?.boxShadow) ??
              '0 0 0 0 transparent'};
            }
          `};

          ${props.focus &&
          props.focus?.boxShadow &&
          css`
            &:focus {
              box-shadow: ${getCSSBoxShadowValue(props.focus?.boxShadow) ??
              '0 0 0 0 transparent'};
            }
          `};

          ${props.hover &&
          props.hover?.boxShadow &&
          css`
            &:hover {
              box-shadow: ${getCSSBoxShadowValue(props.hover?.boxShadow) ??
              '0 0 0 0 transparent'};
            }
          `};
        `};
        */
