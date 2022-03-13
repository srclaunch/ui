import { css } from 'styled-components';

import { Border, BorderColors, ErrorProps } from '../../../types';

export const InputContainerStyles = css<
  {
    border?: Border;
    focused?: boolean;
  } & ErrorProps
>`
  ${props =>
    props.focused &&
    css`
      box-shadow: none;
    `};

  ${props =>
    props.focused &&
    props.border &&
    css`
      border: 1px solid transparent;
    `};

  ${props =>
    props.focused &&
    props.error &&
    Array.isArray(props.error) &&
    props.error.length > 0 &&
    css`
      &:before {
        border-color: rgb(${BorderColors.Error});
      }
    `};
`;
