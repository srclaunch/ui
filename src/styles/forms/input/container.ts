import { css } from 'styled-components';

import {
  BorderColors,
  DepthShadow,
  InputContainerProps,
  // BorderColor
} from '../../../types';
import { AppearanceStyles } from '../../appearance';
import { FocusedStyles } from '../../focused';
import { LayoutStyles } from '../../layout';

export const InputContainerStyles = css<InputContainerProps>`
  ${LayoutStyles};
  ${FocusedStyles};
  ${AppearanceStyles};

  ${props =>
    props.flat &&
    css`
      background-color: transparent;
      border: 1px solid transparent;
      box-shadow: none;
    `};

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
    props.error && (Array.isArray(props.error) && props.error.length > 0) &&
    css`
      &:before {
        border-color: rgb(${BorderColors.Error});
      }
    `};
`;
