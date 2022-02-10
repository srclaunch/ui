import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';
import { Container } from '../../../layout/Container';
import { Align, Amount, BackgroundColors, Colors, Cursor, Orientation, Size, } from '../../../../types';
import { Icon } from '../../../media/Icon';
import { FocusedStyles } from '../../../../styles/focused';
import { validate } from '@srclaunch/validation';
export const Checkbox = memo(({ className = '', defaultValue = false, onChange, size = Size.Small, validation = {}, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState([]);
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        const probs = validate(value, validation);
        setProblems(probs);
        if (onChange)
            onChange({
                problems: probs,
                validated: !probs.length,
                value,
            });
    }, [value]);
    return (_jsx(Container, { alignContent: Align.Center, as: "button", backgroundColor: BackgroundColors.Transparent, className: `${className} checkbox`, cursor: Cursor.Pointer, error: problems, form: "null", onBlur: () => setFocused(false), onClick: () => setValue(!value), onFocus: () => setFocused(true), orientation: Orientation.Horizontal, ...props, children: _jsx(Box, { size: size, focused: focused, children: _jsx(Icon, { color: value ? Colors.Success : Colors.White, name: BasicIcons.Checkmark2, size: Size.Smaller }, void 0) }, void 0) }, void 0));
});
const Box = styled.span `
  ${FocusedStyles};

  align-items: center;
  background: white;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 4px;
  color: #7b7b7b;
  cursor: pointer;
  display: flex;
  height: ${props => props.size};
  justify-content: center;
  margin-right: 5px;
  position: relative;
  text-align: center;
  transition: background 0.2s ease-in-out;
  width: ${props => props.size};

  &:before {
    border-radius: ${Amount.Least};
  }

  ${props => !props.fixed &&
    css `
      &:hover {
        background: rgba(220, 220, 220, 0.1);
      }
    `}
`;
//# sourceMappingURL=Checkbox.js.map