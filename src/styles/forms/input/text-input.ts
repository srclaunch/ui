import { css } from 'styled-components';

import {
  BackgroundColors,
  BackgroundProps,
} from '../../../types/appearance/background';
import { TextColor, TextColors } from '../../../types/typography/text';
import { Amount } from '../../../types/proportion';

import { FocusedStyles } from '../../focused';
import { TextStyles } from '../../typography';
import { TextInputProps } from '../../../components/forms/inputs/text/TextInput';

export const TextInputStyles = css<TextInputProps<HTMLInputElement, string>>`
  ${FocusedStyles};
  ${TextStyles};

  outline: none;
  padding: 0 ${Amount.Less};

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
`;

export default TextInputStyles;
