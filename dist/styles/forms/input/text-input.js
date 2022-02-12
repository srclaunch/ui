import { css } from 'styled-components';
// import { TextProps } from '../../../components/typography/Text';
import { Amount } from '../../../types/proportion';
import { TextColors } from '../../../types/typography/text';
import { FocusedStyles } from '../../focused';
export const TextInputStyles = css `
  ${FocusedStyles};
  /* $ {TextStyles}; */

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
//# sourceMappingURL=text-input.js.map