import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';

import { Container } from '../../../layout/Container';
import {
  Align,
  Amount,
  BackgroundColors,
  Colors,
  Cursor,
  InputProps,
  InputValueChangeHandler,
  Orientation,
  Size,
} from '../../../../types';

import { Icon } from '../../../media/Icon';
import { FocusedStyles } from '../../../../styles/focused';
import { validate } from '@srclaunch/validation';
import { ValidationProblem } from '@srclaunch/types';

type CheckboxProps = InputProps<HTMLInputElement, boolean>;

export const Checkbox = memo(
  ({
    className = '',
    defaultValue = false,
    onChange,
    size = Size.Small,
    validation = {},
    ...props
  }: CheckboxProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
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

    return (
      <Container
        alignContent={Align.Center}
        as="button"
        backgroundColor={BackgroundColors.Transparent}
        className={`${className} checkbox`}
        cursor={Cursor.Pointer}
        error={problems}
        form="null"
        onBlur={() => setFocused(false)}
        onClick={() => setValue(!value)}
        onFocus={() => setFocused(true)}
        orientation={Orientation.Horizontal}
        {...props}
      >
        <Box size={size} focused={focused}>
          <Icon
            color={value ? Colors.Success : Colors.White}
            name={BasicIcons.Checkmark2}
            size={Size.Smaller}
          />
        </Box>
      </Container>
    );
  },
);

const Box = styled.span<{
  fixed?: boolean;
  focused?: boolean;
  size?: Size;
}>`
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

  ${props =>
    !props.fixed &&
    css`
      &:hover {
        background: rgba(220, 220, 220, 0.1);
      }
    `}
`;
