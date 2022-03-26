import { memo, useEffect, useRef, useState } from 'react';
import { BasicIcons } from '@srclaunch/icons';

import { Container } from '../../../layout/Container';
import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
  Colors,
  Cursor,
  Orientation,
  Sizes,
} from '../../../../types';
import { Icon } from '../../../media/Icon';
import { validate } from '@srclaunch/validation';
import { ValidationProblem } from '@srclaunch/types';
import { InputContainer, InputContainerProps } from '../shared/InputContainer';

type CheckboxProps = InputContainerProps<boolean>;

export const Checkbox = memo(
  ({
    className = '',
    defaultValue,
    events = {},
    size = {},
    validation = {},
    ...props
  }: CheckboxProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [value, setValue] = useState(defaultValue);
    const valueRef = useRef(value);

    useEffect(() => {
      if (validation?.conditions) {
        const probs = validate(value, validation.conditions);

        setProblems(probs);

        if (events.input?.onValueChange)
          events.input?.onValueChange({
            validation: {
              problems: probs,
              validated: !probs.length,
            },
            value,
          });
      }
    }, [value]);

    return (
      <InputContainer
        alignment={{
          orientation: Orientation.Horizontal,
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
        }}
        as="button"
        // background={{ color: BackgroundColors.InputControl }}
        className={`${className} checkbox`}
        cursor={Cursor.Pointer}
        events={{
          focus: {
            onBlur: () => setFocused(false),
            onFocus: () => setFocused(true),
          },
          mouse: {
            onClick: () => {
              valueRef.current = !valueRef.current;
              setValue(valueRef.current);
            },
          },
        }}
        form="null"
        states={{ state: { error: problems, focused } }}
        size={{
          height: Sizes.Default,
          width: Sizes.Default,
          ...size,
        }}
        {...props}
      >
        <Container>
          <Icon
            color={valueRef.current ? Colors.Success : Colors.White}
            name={BasicIcons.Checkmark2}
            size={{
              height: Sizes.Smaller,
              width: Sizes.Smaller,
              ...size,
            }}
          />
        </Container>
      </InputContainer>
    );
  },
);

// const Box = styled.span<{
//   fixed?: boolean;
//   focused?: boolean;
//   size?: Size;
// }>`
//   ${FocusStyles};

//   align-items: center;
//   background: white;
//   border: 1px solid rgba(230, 230, 230, 1);
//   border-radius: 4px;
//   color: #7b7b7b;
//   cursor: pointer;
//   display: flex;
//   height: ${props => props.size};
//   justify-content: center;
//   margin-right: 5px;
//   position: relative;
//   text-align: center;
//   transition: background 0.2s ease-in-out;
//   width: ${props => props.size};

//   &:before {
//     border-radius: ${Amount.Least};
//   }

//   ${props =>
//     !props.fixed &&
//     css`
//       &:hover {
//         background: rgba(220, 220, 220, 0.1);
//       }
//     `}
// `;
