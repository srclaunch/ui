import { css } from 'styled-components';

import { Border, BorderColors, States } from '../../../types';

export const InputContainerStyles = css<{
  border?: Border;
  states?: States;
}>`
  ${props =>
    props.states?.state?.focused &&
    css`
      box-shadow: none;
    `};

  ${props =>
    props.states?.state?.focused &&
    props.border &&
    css`
      border: 1px solid transparent;
    `};

  ${props =>
    props.states?.state?.focused &&
    props.states?.state?.error &&
    Array.isArray(props.states.state.error) &&
    props.states?.state?.error.length > 0 &&
    css`
      &:before {
        border-color: rgb(${BorderColors.Error});
      }
    `};
`;
