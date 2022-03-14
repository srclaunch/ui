import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

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
      bottom: ${getCSSMeasurementValue(props.position.bottom)};
    `};

  ${props =>
    (props.position?.left || props.position?.left === 0) &&
    css`
      left: ${getCSSMeasurementValue(props.position.left)};
    `};

  ${props =>
    (props.position?.right || props.position?.right === 0) &&
    css`
      right: ${getCSSMeasurementValue(props.position.right)};
    `};

  ${props =>
    (props.position?.top || props.position?.top === 0) &&
    css`
      top: ${getCSSMeasurementValue(props.position.top)};
    `};
`;

/*
bottom: ${props => getPositionProperty(props.bottom) ?? 'auto'};
  left: ${props => getPositionProperty(props.left) ?? 'auto'};
  position: ${props => props.position ?? 'relative'};
  right: ${props => getPositionProperty(props.right) ?? 'auto'};
  top: ${props => getPositionProperty(props.top) ?? 'auto'};
  */
