import { css } from 'styled-components';

// import { TextProps } from '../../../components/typography/Text';
import { Amount } from '../../../types/proportion';
import { FocusProps } from '../../../types/state/focus-props';
import { TextColors } from '../../../types/typography/text';
import { FocusedStyles } from '../../focused';
import { TextStyles } from '../../typography';

export const TextInputStyles = css<FocusProps>`
  ${FocusedStyles};
  ${TextStyles};
  outline: none;
  padding: 0 ${Amount.Less};
  white-space: nowrap;

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
