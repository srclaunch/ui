import { css } from 'styled-components';

import { Position } from '../../types';

export const PositionStyles = css<{
  position?: Position;
}>`
  position: relative;

  ${props =>
    props.position?.behavior &&
    css`
      position: ${props.position.behavior};
    `};

  ${props =>
    (props.position?.bottom || props.position?.bottom === 0) &&
    css`
      bottom: ${props.position.bottom}px;
    `};

  ${props =>
    (props.position?.left || props.position?.left === 0) &&
    css`
      left: ${props.position.left}px;
    `};

  ${props =>
    (props.position?.right || props.position?.right === 0) &&
    css`
      right: ${props.position.right}px;
    `};

  ${props =>
    (props.position?.top || props.position?.top === 0) &&
    css`
      top: ${props.position.top}px;
    `};
`;

/*
bottom: ${props => getPositionProperty(props.bottom) ?? 'auto'};
  left: ${props => getPositionProperty(props.left) ?? 'auto'};
  position: ${props => props.position ?? 'relative'};
  right: ${props => getPositionProperty(props.right) ?? 'auto'};
  top: ${props => getPositionProperty(props.top) ?? 'auto'};
  */
