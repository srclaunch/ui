import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';

import { Container } from '../../../layout/Container';
import {
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Colors,
  Cursor,
  InputProps,
  InputValueChangeHandler,
  Orientation,
  Size,
  Sizes,
} from '../../../../types';

import { Icon } from '../../../media/Icon';
import { FocusStyles } from '../../../../styles/container/focus';
import { validate } from '@srclaunch/validation';
import { ValidationProblem } from '@srclaunch/types';

type CheckboxProps = InputProps<HTMLInputElement, boolean>;

export const Checkbox = memo(
  ({
    className = '',
    defaultValue = false,
    onChange,
    size = {
      height: Sizes.Small,
    },
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
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        as="button"
        background={{ color: BackgroundColors.Transparent }}
        className={`${className} checkbox`}
        cursor={Cursor.Pointer}
        error={problems}
        form="null"
        onBlur={() => setFocused(false)}
        onClick={() => setValue(!value)}
        onFocus={() => setFocused(true)}
        {...props}
      >
        <Box size={size} focused={focused}>
          <Icon
            color={value ? Colors.Success : Colors.White}
            name={BasicIcons.Checkmark2}
            size={{
              height: Sizes.Smaller,
              width: Sizes.Smaller,
            }}
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
  ${FocusStyles};

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
