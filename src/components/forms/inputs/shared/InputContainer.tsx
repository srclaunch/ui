import { memo, useEffect, useRef, useState, ReactElement } from 'react';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  Orientation,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';
import { Input, InputProps } from './Input';
import { Icon, IconProps } from '../../../media/Icon';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { InputLabel } from '../../labels/InputLabel';
import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';

export type InputContainerProps<V> = ContainerProps &
  InputProps<V> & {
    readonly icon?: IconProps;
    readonly prefix?: string;
    readonly spellCheck?: boolean;
    readonly suffix?: string;
  };

export const InputContainer = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    border = {},
    children,
    className = '',
    defaultValue,
    events = {},
    icon = {},
    label = undefined,
    lineHeight = Sizes.Default,
    max,
    maxLength,
    min,
    name,
    shadow = DepthShadow.Low,
    states = {},
    textAlign = TextAlign.Left,
    textColor = TextColors.InputControl,
    textSize = TextSize.Default,
    type,
    validation = {},
    ...props
  }: InputContainerProps<any>): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (valueChanged && validation?.conditions) {
        const probs = validate(value, validation?.conditions);

        setProblems(probs && probs.length > 0 ? probs : undefined);

        if (events.input?.onValueChange)
          events.input?.onValueChange({
            validation: {
              problems: probs,
              validated: probs.length === 0,
            },
            value,
          });
      } else {
        if (events.input?.onValueChange)
          events.input?.onValueChange({
            value,
          });
      }
    }, [value]);

    return (
      <Container
        className={`${className} input-container`}
        events={{
          mouse: {
            onClick: e => () => {
              if (children) {
                inputRef.current?.focus();
              }

              if (events.mouse?.onClick) {
                events.mouse.onClick(e);
              }
            },
          },
          ...events,
        }}
      >
        {(label || problems) && (
          <InputLabel
            states={{
              state: {
                error: problems,
              },
            }}
          >
            {label}
          </InputLabel>
        )}

        <Container
          alignment={{ orientation: Orientation.Horizontal, ...alignment }}
          background={{
            color: BackgroundColors.InputControl,
            ...background,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          border={{
            all: {
              color:
                states.state?.error &&
                Array.isArray(states.state.error) &&
                states.state.error.length > 0
                  ? BorderColors.Error
                  : border?.all && typeof border?.all == 'object'
                  ? border.all.color
                  : BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          className={`${className} input-container-wrapper`}
          shadow={shadow}
          states={{
            state: {
              error: problems,
              focused,
            },
          }}
          {...props}
        >
          {icon && (
            <Icon
              color={
                value === ''
                  ? TextColors.InputPlaceholder
                  : icon.color ?? textColor
              }
              margin={{
                left: Amount.Less,
              }}
              {...icon}
            />
          )}

          {children ? (
            children
          ) : (
            <Input
              events={{
                input: {
                  onChange: events.input?.onChange,
                  onValueChange: ({ value: val }) => {
                    setValueChanged(true);
                    setValue(val);

                    if (events.input?.onValueChange) {
                      events.input.onValueChange({
                        value: val,
                      });
                    }
                  },
                },
              }}
              max={max}
              maxLength={maxLength}
              min={min}
              textAlign={textAlign}
              textColor={textColor}
              textSize={textSize}
              type={type}
            />
          )}

          {states.state?.loading && (
            <ProgressSpinner
              size={{
                height: Sizes.Small,
                width: Sizes.Small,
              }}
            />
          )}
        </Container>
      </Container>
    );
  },
);
