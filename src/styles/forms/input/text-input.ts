import { css } from 'styled-components';

// import { TextProps } from '../../../components/typography/Text';
import { Amount, TextColors } from '../../../types';
import { TextStyles } from '../../typography';

export const TextInputStyles = css`
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
