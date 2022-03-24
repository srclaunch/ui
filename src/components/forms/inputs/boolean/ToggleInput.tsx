import { BasicIcons } from '@srclaunch/icons';
import { ValidationProblem } from '@srclaunch/types';
import { memo, useEffect, useState, useRef } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Colors,
  Cursor,
  Depth,
  DepthShadow,
  ForegroundColors,
  Orientation,
  Size,
  Sizes,
  TextColors,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Button, ButtonType } from '../../../forms/buttons/Button';
import { Container, ContainerProps } from '../../../layout/Container';
import { Icon } from '../../../media/Icon';
import { Label } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';
import { InputProps } from '../shared/Input';

export type ToggleInputProps = ContainerProps &
  InputProps<boolean> & {
    readonly trueLabel?: string;
    readonly falseLabel?: string;
  };

export const ToggleInput = memo(
  ({
    className = '',
    cursor = Cursor.Pointer,
    defaultValue = false,
    events = {},
    falseLabel,
    label,
    trueLabel,
    size = {
      height: Sizes.Default,
      width: Sizes.Default,
    },
  }: ToggleInputProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [toggleValue, setToggleValue] = useState(defaultValue);
    const toggleValueRef = useRef(toggleValue);

    useEffect(() => {
      if (events.input?.onValueChange)
        events.input?.onValueChange({ value: toggleValue });
    }, [toggleValue]);

    useEffect(() => {
      setToggleValue(defaultValue ?? toggleValue ?? '');
    }, [defaultValue]);

    return (
      <>
        <Container alignment={{ orientation: Orientation.Horizontal }}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
            <ErrorLabel alignment={{ horizontal: AlignHorizontal.Right }}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

        <Container
          alignment={{
            horizontal: AlignHorizontal.Left,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          className={`${className} toggle-input`}
        >
          {falseLabel && (
            <Button
              cursor={cursor}
              form="null"
              events={{
                mouse: {
                  onClick: () => {
                    toggleValueRef.current = false;
                    setToggleValue(false);
                  },
                },
              }}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-falsey-label"
                textColor={!toggleValue ? TextColors.Light : TextColors.Lighter}
              >
                {falseLabel}
              </Label>
            </Button>
          )}

          <Container
            alignment={{
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Center,
            }}
            as="button"
            background={{
              color: BackgroundColors.InputControl,
            }}
            borderRadius={{ all: Amount.All }}
            border={{
              all: {
                color: BorderColors.InputControl,
                style: BorderStyle.Solid,
                width: 1,
              },
            }}
            cursor={cursor}
            events={{
              focus: {
                onBlur: () => setFocused(false),
                onFocus: () => setFocused(true),
              },
              mouse: {
                onClick: e => {
                  toggleValueRef.current = !toggleValueRef.current;
                  setToggleValue(toggleValueRef.current);
                },
              },
            }}
            form="null"
            padding={{ all: Amount.Least }}
            shadow={DepthShadow.Low}
            size={{
              height: size.height,
              width: `calc(${size.width} * 2)`,
            }}
          >
            <Container
              alignment={{
                horizontal: AlignHorizontal.Center,
                vertical: AlignVertical.Center,
              }}
              background={{
                color:
                  toggleValueRef.current === true
                    ? Colors.Primary
                    : Colors.Error,
              }}
              borderRadius={{ all: Amount.All }}
              cursor={cursor}
              depth={Depth.High}
              shadow={DepthShadow.High}
              size={{
                height: `calc(${size.height} / 3 * 2)`,
                width: `calc(${size.height} / 3 * 2)`,
              }}
              states={{
                on: {
                  transform: {
                    translate: {
                      x: `calc(${size.height} / 10 * 9)`,
                    },
                  },
                },
                state: {
                  focused,
                  on: toggleValue,
                },
              }}
            >
              <Icon
                color={ForegroundColors.White}
                name={
                  toggleValueRef.current === true
                    ? BasicIcons.Checkmark2
                    : BasicIcons.Close
                }
                size={{
                  height: Sizes.Smallest,
                  width: Sizes.Smallest,
                }}
              />
            </Container>
          </Container>

          {trueLabel && (
            <Button
              cursor={cursor}
              form="null"
              events={{
                mouse: {
                  onClick: () => {
                    toggleValueRef.current = true;
                    setToggleValue(true);
                  },
                },
              }}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-truthy-label"
                textColor={toggleValue ? TextColors.Light : TextColors.Lighter}
              >
                {trueLabel}
              </Label>
            </Button>
          )}
        </Container>
      </>
    );
  },
);

// const Label = styled.label`
//   color: rgba(150, 150, 150, 1);
//   display: block;
//   font-size: 16px;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const ToggleSwitch = styled.span<
//   {
//     readonly toggleValue: boolean;
//   } & ContainerProps<HTMLSpanElement> &
//     FocusProps
// >`
//   ${FocusStyles};

//   border-radius: ${Amount.All};
//   height: ${props => `calc(${props.size} - 8px)`};
//   transform: translateX(0);
//   transition: background 0.1s ease-in-out, transform 0.1s ease-in-out;
//   width: ${props => `calc(${props.size} - 8px)`};

//   i.icon {
//     opacity: 0;
//     transition: opacity 0.1s ease-in-out;
//   }
//   /*
//   @keyframes toggle-animation {
//     0% {
//       height: 100%;
//     }

//     50% {
//       height: 50%;
//       width: 50%;
//     }

//     100% {
//       height: 100%;
//     }
//   } */

//   &:before {
//     border-radius: 100%;
//   }

//   ${props =>
//     props.toggleValue === true &&
//     css`
//       transform: translateX(calc(${props.size} - ${Amount.Least}));
//       /* animation: toggle-animation 0.2s ease-in-out; */

//       i.icon {
//         opacity: 1;
//       }
//     `}

//   ${props =>
//     props.toggleValue === false &&
//     css`
//       /* */
//     `}
// `;
