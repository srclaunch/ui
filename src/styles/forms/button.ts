import { css } from 'styled-components';

import {
  BackgroundColors,
  BackgroundProps,
  BorderColors,
  BorderProps,
  Size,
  TextColor,
  TextProps,
} from '../../types';

export const ButtonStyles = css<
  {
    size?: Size;
    textColor?: TextColor;
  } & BackgroundProps &
    BorderProps &
    TextProps
>`
  background-color: ${BackgroundColors.Lightest};
  border: 1px solid ${BorderColors.Light};
  /* border-radius: props.borderRadius}; */
  /* box-shadow:  Shadows.Low : 'none'}; */
  padding: 0 calc(${props => props.size} / 3);

  /* props 
    props.focused &&
    css
      border 1px solid transparent !important;
    };

  props =>
    props.error &&
    css
      border: 1px solid rgb({BorderColors.Error});
    }; */
`;
