import { css } from 'styled-components';
import { TextColors } from '../../../types/typography/text';
import { Amount } from '../../../types/proportion';
import { FocusedStyles } from '../../focused';
import { TextStyles } from '../../typography';
export const TextInputStyles = css `
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
//# sourceMappingURL=text-input.js.map